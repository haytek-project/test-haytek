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
       
        // function isSameDay(d1, d2) {
        //     return d1.getFullYear() === d2.getFullYear() &&
        //       d1.getDate() === d2.getDate() &&
        //       d1.getMonth() === d2.getMonth();
        // }

        // const teste = new Date()
        // const teste2 = new Date("2024-02-04T10:14:03.997Z")
        // console.log(isSameDay(teste, teste2))

        
        // const teste = new Date()
        // console.log(teste)
        // console.log(teste.getDate())
        // console.log(teste.getMonth())
        // console.log(teste.getFullYear())

        // const a = new DateWithoutTime(new Date().toISOString());
        // const b = new DateWithoutTime("2022-12-25T23:55:00.000Z");
        // console.log(a, b)




        // return 0 

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
        const ordersDateList = this.getOrdersDate(orders)
        // const orderAdressList = this.getOrdersAdress(orders)


        for (const orderDate in ordersDateList){
            const groupedByDateOrderList = this.groupOrdersByDate(orderDate, orders)
            
            for (const adr in adresses){               
                const groupedByAdressOrderList = this.groupOrdersByAdress(adresses[adr].Id, groupedByDateOrderList)

                if (groupedByAdressOrderList != undefined && groupedByAdressOrderList.length != 0){
                    for (const carrier in carriers){
                        const groupedByCarrierOrderList = this.groupOrdersByCarrier(carriers[carrier].Id, groupedByAdressOrderList)
                        
                        if (groupedByCarrierOrderList != undefined && groupedByCarrierOrderList.length != 0){
                            console.log("indiciando deliveryDTO")
                            let regularDelivery = new CreateDeliveryDto()
                            let cutOffDelivery  = new CreateDeliveryDto()

                            
                            console.log(groupedByCarrierOrderList)
                            for (const item in groupedByCarrierOrderList){    
                                let order = groupedByCarrierOrderList[item]        
                                let adress = this.findAdressById(order.addressId, adresses)[0]
                                let carrier = this.findCarrierBydId(order.carrierId, carriers)[0]


                                let orderCreatedDate = new Date(order.createdAt)
                                const orderHour =  Number(orderCreatedDate.getUTCHours())
                                const orderMinutes =  Number(orderCreatedDate.getMinutes())
                                const orderTime = ((orderHour * 60) + orderMinutes)

                                const cutOffHour = Number(carrier.cutOffTime.split(':')[0])
                                const cutOffMinutes = Number(carrier.cutOffTime.split(':')[1])
                                const cutOffTime = ((cutOffHour * 60) + cutOffMinutes)                                              

                                if (orderTime < cutOffTime){            
                                    // DIA ATUAL                      
                                    regularDelivery.sendDate = orderCreatedDate
                                    regularDelivery.adress = adress
                                    regularDelivery.carrier = carrier
                                    // regularDelivery.orders.push( order )
                                }else{
                                    // DIA SEGUINTE
                                    orderCreatedDate.setDate(orderCreatedDate.getDate() + 1)
                                    cutOffDelivery.sendDate = orderCreatedDate
                                    cutOffDelivery.adress = adress
                                    cutOffDelivery.carrier = carrier
                                    // regularDelivery.orders.push( order )
                                }
                            }
                            console.log(regularDelivery, cutOffDelivery)
                            if (regularDelivery.sendDate != undefined) deliveryFullList.push(regularDelivery)
                            if (cutOffDelivery.sendDate != undefined) deliveryFullList.push(cutOffDelivery)
                        
                            // console.log(qtdItens)
                            // this.getBoxesPerDelivery(qtdItens, groupedByCarrierOrderList, boxes)
                            console.log('------------------')
                            // return delivery
                            
                        }
                    }
                }
                
            }
        }
        return deliveryFullList

        // for (const item in ordersDate){
        //     const orderDate = new Date(ordersDate[item])
        //     const ordersSortedByDate =  orders.filter(function(order) {
        //         const internalDate = new Date(order.createdAt)
        //         return internalDate.getDate() === orderDate.getDate() &&
        //                internalDate.getMonth() === orderDate.getMonth() && 
        //                internalDate.getFullYear() === orderDate.getFullYear()
        //       });

        //     for (const adr in adresses){                
        //         const orderSortedByAdress =  ordersSortedByDate.filter(function(item){
        //             return item.addressId === adresses[adr].Id
        //         });
        //         if (orderSortedByAdress.length != 0){

        //             for (const carrier in carriers){
        //                 const orderSortedByCarrier = orderSortedByAdress.filter(function(order){
        //                     return order.carrierId === carriers[carrier].Id
        //                 });
        //                 if (orderSortedByCarrier.length != 0){
        //                     delivery.push(orderSortedByCarrier)

        //                 }
        //             }
        //         }


        //     }

        // }
    
        // console.log(delivery)
        // for (const deli in delivery){
        //     let totalQtd = 0
        //     for (var i = 0; i < delivery[deli].length; i +=1){
        //         totalQtd = totalQtd + delivery[deli][i].quantity
        //     }      
        //     console.log(this.getBoxesPerDelivery(totalQtd, boxes))
        //     // console.log(totalQtd)      
        //     console.log("--------------")
        // }
        // return delivery
        


        // console.log(new Date(dt.getUTCFullYear(), dt.getUTCMonth(), dt.getUTCDate()))
        // console.log(new Date(dt.getFullYear(), dt.getMonth(), dt.getDate()).setHours(0,0,0,0))
        // return 0




        //     let date = new DateWithoutTime(orders[order].createdAt)
        //     console.log(orders[order].createdAt)
        //     console.log(date)
        //     // const vent = !!ordersDate.find(orderDate => {return orderDate === date})
        //     if (!(ordersDate.includes(date))){
        //         ordersDate.push(date)
        //         console.log("if")
        //     }else{
        //         console.log("else")
        //     }
            
        // }

        // console.log(ordersDate)

        // for (const order in orders){
        //     let date = new Date(orders[order].createdAt).setHours(0,0,0,0)
        //     // let day = date.getDay()
        //     // let mounth = date.getMonth()
        //     // let year = date.getFullYear()

        //     var aquaticCreatures =  orders.filter(function(order) {
        //         return new Date(order.createdAt).setHours(0,0,0,0) == date, order.addressId == "11fbe6ba-e46d-47c0-bb29-f95831fa5131";
        //       });

        //       console.log(aquaticCreatures)
        //       console.log("#############################################################")

        // }
          

        // var aquaticCreatures =  orders.filter(function(order) {
        //     return order.quantity == 27;
        //   });

        // console.log(aquaticCreatures)

        // for(const order in orders){
        //     const now = new Date('2024-02-14T22:47:28.992Z')
        //     const orderDate = new Date(orders[order].createdAt)
        //     if (now > orderDate){
        //         console.log(now,orderDate, "MAIOR")
        //     }else{
        //         console.log(now,orderDate, "MENOR")
        //     }

        // }


  


        // orders.sort((a, b) => {
        //     let da = new Date(a.createdAt),
        //         db = new Date(b.createdAt);
        //     return da - db;
        // });

        // orders.forEach((e) => {
        //     console.log(`${e.addressId} ${e.carrierId} ${e.createdAt}`);
        // });
        // console.log(Object.keys(adresses).length)
        // for (const i in adresses){
        //   console.log(adresses[i])
        // }


        // console.log(Object.keys(orders).length)
        // for (const i in orders){

        //   console.log(orders[i].createdAt)
        // }

        
        // console.log(boxes)
        // console.log(carriers)
        // console.log(orders)
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
        const orderDate = new Date(orders[date].createdAt)
        const ordersSortedByDate =  orders.filter(function(order) {
            const internalDate = new Date(order.createdAt)
            return internalDate.getDate() === orderDate.getDate() &&
                    internalDate.getMonth() === orderDate.getMonth() && 
                    internalDate.getFullYear() === orderDate.getFullYear()
        });
        return ordersSortedByDate

        
    }

    getOrdersDate(orders){
        let ordersDate = []
        for (const order in orders){
            let a = new Date(orders[order].createdAt)
            let dt = new Date(a.getFullYear(), a.getMonth(), a.getDate())    
            if (!(ordersDate.includes(dt.toDateString()))){
                ordersDate.push(dt.toDateString())
            }            
        }
        return ordersDate
    }


    getOrdersAdress(orders){
        let ordersAdress = []
        for (const order in orders){
            if (!(ordersAdress.includes(orders[order].addressId))){
                ordersAdress.push(orders[order].addressId)
            }            
        }
        return ordersAdress

    }


    // getBoxesEnum(boxes){
    //     let result = {}
    //     for (const box in boxes){
    //         result.push(123)
    //     }
    // }
    getBoxesPerDelivery(total, orders, boxes){

        //Caixas:
            //Tipo
            //Qtd de Itens na caixa
            //Cod. dos Pedidos contidos na caixa ( o mesmo pedido pode aparecer em mais de uma caixa)
        console.log('TOTAL ', total)
        let G = 30
        let M = 10
        let P = 5
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
