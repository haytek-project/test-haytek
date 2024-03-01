import { Injectable } from '@nestjs/common';
import { AdressesService } from 'src/adresses/adresses.service';
import { BoxesService } from 'src/boxes/boxes.service';
import { CarriersService } from 'src/carriers/carriers.service';
import { OrdersService } from 'src/orders/orders.service';
import { CreateDeliveryDto } from './dto/create-delivery.dto';
import { UsedBoxDto } from './dto/usedBox.dto';
import { CreateOrderDto } from 'src/orders/dto/create-order.dto';
import { exit } from 'process';



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
    

        //Ordenando pedidos retornados pela api
        // orders.sort(function compare(a, b) {
        //     var dateA = +new Date(a.createdAt);
        //     var dateB = +new Date(b.createdAt);
        //     return dateA - dateB;
        //   });



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
                            // console.log(regularDelivery, cutOffDelivery)
                            if (regularDelivery.sendDate != undefined) deliveryFullList.push(regularDelivery)
                            if (cutOffDelivery.sendDate != undefined) deliveryFullList.push(cutOffDelivery)                            
                        }
                    });
                }
                
            });
        });

        this.getBoxesPerDelivery(deliveryFullList, boxes)


        return deliveryFullList

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
        let G = 30
        let M = 10
        let P = 5
        deliveryFullList.forEach((delivery) => {
            console.log(delivery)
            let BoxesList = []
            let totalDelivery = delivery.totalQuantity
            delivery.orderList.forEach((order) => {
                let totalOrder = order.quantity
                
                while (totalDelivery > 0 && totalOrder > 0){
                    if (totalOrder >= G){
                        totalDelivery = totalDelivery - G; totalOrder = totalOrder - G
                        BoxesList.push(this.addItemsIntoBox('G', G, order.Id))
                    }
                    if (totalOrder >= M && totalOrder < G){
                        totalDelivery = totalDelivery - M; totalOrder = totalOrder - M
                        BoxesList.push(this.addItemsIntoBox('M', M, order.Id))
                    }
                    if (totalOrder > P && totalOrder < M){
                        totalDelivery = totalDelivery - P; totalOrder = totalOrder - P
                        BoxesList.push(this.addItemsIntoBox('P', P, order.Id))
                    }
                    if (totalOrder <= P && totalOrder != 0 ){                        
                        BoxesList.push(this.addItemsIntoBox('P', totalOrder, order.Id))
                        totalDelivery = totalDelivery - totalOrder; totalOrder = totalOrder - totalOrder
                    }
                    
                }
                
            });
            delivery.Boxes = BoxesList


        });
        return deliveryFullList
    }

    addItemsIntoBox(size, qtd, orderId){
        let usedBoxDto = new UsedBoxDto()
        usedBoxDto.itemsQty = qtd
        usedBoxDto.ordersId.indexOf(orderId) === -1 ? usedBoxDto.ordersId.push(orderId): console.log("This item already exists")
        usedBoxDto.type = size
        return usedBoxDto
    }

}
