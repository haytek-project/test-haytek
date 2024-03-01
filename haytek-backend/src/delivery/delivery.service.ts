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
            // console.log(delivery.orderList)
            let BoxesList = []
            let totalDelivery = delivery.totalQuantity
            delivery.orderList.forEach((order) => {
                let totalOrder = order.quantity
                console.log(totalDelivery)
                console.log(totalOrder)
                
                while (totalDelivery > 0 && totalOrder > 0){
                    if (totalOrder >= G){
                        let usedBoxDto = new UsedBoxDto()
                        usedBoxDto.itemsQty = G
                        usedBoxDto.ordersId.indexOf(order.Id) === -1 ? usedBoxDto.ordersId.push(order.Id): console.log("This item already exists")
                        usedBoxDto.type = 'G'
                        totalDelivery = totalDelivery - G
                        totalOrder = totalOrder - G
                        BoxesList.push(usedBoxDto)
                        console.log("caixa G")
                        console.log(totalDelivery)
                        console.log(totalOrder)
                        
                    }
                    if (totalOrder > M && totalOrder < G){
                        let usedBoxDto = new UsedBoxDto()
                        usedBoxDto.itemsQty = M
                        usedBoxDto.ordersId.indexOf(order.Id) === -1 ? usedBoxDto.ordersId.push(order.Id): console.log("This item already exists")
                        usedBoxDto.type = 'M'
                        totalDelivery = totalDelivery - M
                        totalOrder = totalOrder - M
                        BoxesList.push(usedBoxDto)
                        console.log("caixa M")
                        console.log(totalDelivery)
                        console.log(totalOrder)

                    }
                    if (totalOrder > P && totalOrder < M){
                        let usedBoxDto = new UsedBoxDto()
                        usedBoxDto.itemsQty = P
                        usedBoxDto.ordersId.indexOf(order.Id) === -1 ? usedBoxDto.ordersId.push(order.Id): console.log("This item already exists")
                        usedBoxDto.type = 'P'
                        totalDelivery = totalDelivery - P
                        totalOrder = totalOrder - P
                        BoxesList.push(usedBoxDto)
                        console.log("caixa P")
                        console.log(totalDelivery)
                        console.log(totalOrder)

                    }
                    if (totalOrder <= P ){
                        let usedBoxDto = new UsedBoxDto()
                        usedBoxDto.itemsQty = totalOrder
                        usedBoxDto.ordersId.indexOf(order.Id) === -1 ? usedBoxDto.ordersId.push(order.Id): console.log("This item already exists")
                        usedBoxDto.type = 'P'
                        totalDelivery = totalDelivery - totalOrder
                        totalOrder = totalOrder - totalOrder
                        BoxesList.push(usedBoxDto)
                        console.log("caixa P")
                        console.log(totalDelivery)
                        console.log(totalOrder)

                    }
                    // exit()
                }

                

                

                // while ( total < M){
                //     if (order.quantity > P){
                //         let usedBoxDto = new UsedBoxDto()
                //         usedBoxDto.itemsQty = 5
                //         usedBoxDto.ordersId.indexOf(order.Id) === -1 ? usedBoxDto.ordersId.push(order.Id): console.log("This item already exists")
                //         usedBoxDto.type = 'P'
                //         total = total - P
                //         BoxesList.push(usedBoxDto)
                //     }
                //     if (order.quantity < P){
                //         let usedBoxDto = new UsedBoxDto()
                //         usedBoxDto.itemsQty = 5
                //         usedBoxDto.ordersId.indexOf(order.Id) === -1 ? usedBoxDto.ordersId.push(order.Id): console.log("This item already exists")
                //         usedBoxDto.type = 'P'
                //         total = total - P
                //         BoxesList.push(usedBoxDto)
                //     }
                // }

                // while (total <= P){
                //     if (order.quantity > P){
                //         let usedBoxDto = new UsedBoxDto()
                //         usedBoxDto.itemsQty = 5
                //         usedBoxDto.ordersId.indexOf(order.Id) === -1 ? usedBoxDto.ordersId.push(order.Id): console.log("This item already exists")
                //         usedBoxDto.type = 'P'
                //         total = total - P
                //         BoxesList.push(usedBoxDto)
                //     }
                // }
                
            });
            console.log(BoxesList)

            // delivery.orderList.forEach((order) => {
            //     qtdTotal = qtdTotal + order.quantity
            // });

        });
        return 0

        //Caixas:
            //Tipo
            //Qtd de Itens na caixa
            //Cod. dos Pedidos contidos na caixa ( o mesmo pedido pode aparecer em mais de uma caixa)
        console.log('TOTAL ', total)
        // let G = 30
        // let M = 10
        // let P = 5
        let boxList = {}
        let ordersList = []
        // let usedBoxDto = new UsedBoxDto()
        console.log(orders)
        for(const order in orders){
            while (total > G){
                if (orders[order].quantity > G){
                    console.log("quantity MAIOR que 30")
                    console.log(orders[order].quantity)
                    total = total - G
                    boxList['type'] = 'G'
                    ordersList.indexOf(orders[order].Id) === -1 ? ordersList.push(orders[order].Id): console.log("This item already exists");
                    boxList['orders'] = ordersList
                    boxList['itemsQty'] = G
                    console.log(total)
                }
            }
            while (total > M && total < G){
                if (orders[order].quantity > M){
                    console.log("quantity MAIOR que 10")
                    console.log(orders[order].quantity)
                    total = total - M
                    boxList['type'] = 'M'
                    ordersList.indexOf(orders[order].Id) === -1 ? ordersList.push(orders[order].Id): console.log("This item already exists");
                    boxList['orders'] = ordersList
                    boxList['itemsQty'] = M
                    console.log(total)
                }
            }
            console.log(boxList)


        }
        return 0

        // console.log(DiasDaSemana.DOMINGO)
        let boxesList = {}
        for (const box in boxes){
            boxesList['type'] = boxes[box].type
            boxesList['qtd'] = boxes[box].maxQuantity
        }
        // console.log(boxesList)


        // let G = 0
        // let M = 0
        // let P = 0

        // console.log(qtd)
        // while (qtd > 0){
        //     if (qtd > 30){
        //         G = G + 1
        //         qtd = qtd - 30
        //     }
        //     if (qtd >= 10 && qtd < 30){
        //         M = M + 1
        //         qtd = qtd - 10
        //     }
        //     if (qtd > 5 && qtd < 10 ){
        //         P = P + 1
        //         qtd = qtd - 5
        //     }
        //     if (qtd <= 5){
        //         P = P + 1
        //         qtd = qtd - 5
        //     }
        // }
        // console.log("box_G", G)
        // console.log("box_M", M)
        // console.log("box_P", P)

    }

}
