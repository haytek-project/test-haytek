import { Injectable } from '@nestjs/common';
import { AdressesService } from 'src/adresses/adresses.service';
import { BoxesService } from 'src/boxes/boxes.service';
import { CarriersService } from 'src/carriers/carriers.service';
import { OrdersService } from 'src/orders/orders.service';
import { CreateDeliveryDto } from './dto/create-delivery.dto';
import { UsedBoxDto } from './dto/usedBox.dto';


@Injectable()
export class DeliveryService {
    constructor(
        private readonly adressService: AdressesService,
        private readonly boxesService: BoxesService,
        private readonly carriesService: CarriersService,
        private readonly ordersService: OrdersService        
        ){}
        
    
    async delivery(){
        const adresses = await this.adressService.findAll()
        const boxes = await this.boxesService.findAll()
        const carriers = await this.carriesService.findAll()
        const orders = await this.ordersService.findAll()
    
        let deliveryFullList = []
        //Pegando uma lista com a datas únicas dos pedidos retornados na api de pedidos
        const ordersDateList = this.getOrdersDate(orders)

        ordersDateList.forEach((orderDate) => {

            // Agrupando pedidos por data
            const groupByDate = this.groupOrdersByDate(orderDate, orders)
                   
            adresses.forEach((adress) => {

                // Agrupando pedidos por endereco
                const groupByAdress = this.groupOrdersByAdress(adress.Id, groupByDate)

                // Caso a lista retornada não for vazia
                if (groupByAdress != undefined && groupByAdress.length != 0){

                    // Agrupando pedidos por entrega
                    carriers.forEach((carrier) => {    
                        const groupByCarrier = this.groupOrdersByCarrier(carrier.Id, groupByAdress)
                        
                        // Caso a lista retornada não for vazia
                        if (groupByCarrier != undefined && groupByCarrier.length != 0){
                            
                            // Inicializando DTO's para armazenar as entregas normais e as entregas com cutOff
                            let regularDelivery = new CreateDeliveryDto(); 
                            let cutOffDelivery  = new CreateDeliveryDto(); 
                                                
                            
                            // Varrendo lista com todos os pedidos agrupados por Data, Endereco e Transportadora
                            groupByCarrier.forEach((order) => {                                 
                                let adress = this.findAdressById(order.addressId, adresses)[0]
                                let carrier = this.findCarrierBydId(order.carrierId, carriers)[0]


                                // convertendo hora e minuto do pedido para minutos
                                let orderCreatedDate = new Date(order.createdAt)
                                const orderTime = ((Number(orderCreatedDate.getUTCHours()) * 60) + Number(orderCreatedDate.getUTCMinutes()))

                                  // convertendo hora e minuto do cutOff para minutos
                                const cutOffTime = ((Number(carrier.cutOffTime.split(':')[0]) * 60) + Number(carrier.cutOffTime.split(':')[1]))                                              

                                if (orderTime < cutOffTime){            
                                    // DIA ATUAL                      
                                    regularDelivery.sendDate = orderCreatedDate
                                    regularDelivery.adress = adress
                                    regularDelivery.carrier = carrier                               
                                    regularDelivery.orderList.push(order)
                                    regularDelivery.totalQuantity = regularDelivery.totalQuantity + order.quantity
                                }else{
                                    // DIA SEGUINTE
                                    orderCreatedDate.setDate(orderCreatedDate.getDate() + 1)
                                    cutOffDelivery.sendDate = orderCreatedDate
                                    cutOffDelivery.adress = adress
                                    cutOffDelivery.carrier = carrier
                                    cutOffDelivery.orderList.push( order )
                                    cutOffDelivery.totalQuantity = cutOffDelivery.totalQuantity + order.quantity
                                }
                            });
                            if (regularDelivery.sendDate != undefined) deliveryFullList.push(regularDelivery)
                            if (cutOffDelivery.sendDate != undefined) deliveryFullList.push(cutOffDelivery)                            
                        }
                    });
                }
                
            });
        });
        return this.getBoxesPerDelivery(deliveryFullList, boxes)
    }


    findCarrierBydId(Id, carriers){
        return carriers.filter(function(item){
            return item.Id == Id
        });
    }

    findAdressById(Id, adresses){
        return adresses.filter(function(item){
            return item.Id == Id
        });
    }

    groupOrdersByCarrier(carrier, orders){
        const orderGroupedByCarrier = orders.filter(function(order){
            return order.carrierId === carrier
        });
        if (orderGroupedByCarrier.length != 0){
            return orderGroupedByCarrier
        }
    }

    groupOrdersByAdress(adress, orders){
        const orderSortedByAdress =  orders.filter(function(item){
            return item.addressId === adress
        });
        if (orderSortedByAdress.length != 0){
            return orderSortedByAdress
        }
    }


    groupOrdersByDate(date, orders){
        const orderDate = new Date(date)
        const ordersSortedByDate =  orders.filter(function(order) {
            const internalDate = new Date(order.createdAt)
            return internalDate.getUTCDate() === orderDate.getUTCDate() &&
                    internalDate.getUTCMonth() === orderDate.getUTCMonth() && 
                    internalDate.getUTCFullYear() === orderDate.getUTCFullYear()
        });
        return ordersSortedByDate        
    }

    getOrdersDate(orders){
        let ordersDate = []
        orders.forEach((o) => {
            let orderDate = new Date(o.createdAt)
            if (!(ordersDate.includes(orderDate.toDateString()))){
                ordersDate.push(orderDate.toDateString())
            } 
        });
        return ordersDate
    }


    getOrdersAdress(orders){
        let ordersAdress = []
        orders.forEach((o) => {
            if (!(ordersAdress.includes(o.addressId))){
                ordersAdress.push(o.addressId)
            } 
        });
        return ordersAdress
    }

    getBoxesPerDelivery(deliveryFullList, boxes){

        // ordernando array de caixas
        boxes.sort(
            function(a,b){return b.maxQuantity - a.maxQuantity}
        )

        deliveryFullList.forEach((delivery) => {
            let BoxesList = []
            let totalDelivery = delivery.totalQuantity
            let diff = 0 
            delivery.orderList.forEach((order, orderIndex) => {

                let totalOrder = Number(order.quantity) - diff
                let orderIdList = []
                
                boxes.forEach((box, boxIndex) => {                                 

                    while (totalDelivery > 0){

                        if (totalOrder >= box.maxQuantity){  
                            orderIdList.push(order.Id)                          
                            BoxesList.push(this.addItemsIntoBox(box.type, box.maxQuantity, orderIdList ))
                            totalOrder = Number(totalOrder) - Number(box.maxQuantity)
                            totalDelivery = Number(totalDelivery) - Number(box.maxQuantity)
                        }

                        if (totalOrder != 0 && totalOrder < box.maxQuantity && totalDelivery > box.maxQuantity){
                            orderIdList.push(order.Id)
                            if(totalOrder < totalDelivery){
                                orderIdList.push(delivery.orderList[orderIndex+1].Id)
                            }
                            BoxesList.push(this.addItemsIntoBox(box.type, box.maxQuantity, orderIdList))
                            diff = Number(box.maxQuantity) - Number(totalOrder)
                            totalDelivery = Number(totalDelivery) - Number(box.maxQuantity)
                            totalOrder = 0
                            break
                        }

                        if (totalOrder != 0 && totalOrder < box.maxQuantity && totalDelivery < box.maxQuantity && boxIndex == boxes.length-1){
                            orderIdList.push(order.Id)
                            BoxesList.push(this.addItemsIntoBox(box.type, totalOrder, orderIdList ))
                            totalOrder = 0
                            totalDelivery = 0
                        }
                        if (totalOrder < box.maxQuantity && totalDelivery < box.maxQuantity && boxIndex < boxes.length-1 ){
                            break
                        }
                        if (totalOrder == 0)
                            break
                    }                
                });
                delivery.Boxes = BoxesList
            });            
        });
        return deliveryFullList
    }

    addItemsIntoBox(size, qtd, orderIdList){
        let usedBoxDto = new UsedBoxDto()
        usedBoxDto.itemsQty = Number(qtd)
        orderIdList.forEach((element) => {
            usedBoxDto.ordersId.indexOf(element) === -1 ? usedBoxDto.ordersId.push(element): console.log(element, 'Alread exists in orderIdList');
        });
        usedBoxDto.type = size
        return usedBoxDto
    }

}
