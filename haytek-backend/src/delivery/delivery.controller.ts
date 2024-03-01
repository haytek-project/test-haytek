import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DeliveryService } from './delivery.service';
import { CreateDeliveryDto } from './dto/create-delivery.dto';
import { UpdateDeliveryDto } from './dto/update-delivery.dto';

@Controller('delivery')
export class DeliveryController {
  constructor(private readonly deliveryService: DeliveryService) {}

  @Get()
  delivery(){
    
    // [
    //    {
    //     "Id": "c56dc7bc-6167-49de-9e60-37c386660f59",
    //     "name": "Tam",
    //     "cutOffTime": "14:00"
    //   }
    // ]
    return this.deliveryService.delivery();
  //   return [
  //     {
  //         "orderList": [
  //             {
  //                 "Id": "a63e4cda-5f90-4791-b9dc-82113826c719",
  //                 "addressId": "2ceb4f33-368a-45ab-85bd-2f67c0951067",
  //                 "carrierId": "0f513c5e-b717-4e41-9df0-213d08ae1be4",
  //                 "quantity": 54,
  //                 "createdAt": "2024-02-10T20:29:07.582Z"
  //             }
  //         ],
  //         "totalQuantity": 54,
  //         "Boxes": [
  //             {
  //                 "ordersId": [
  //                     "a63e4cda-5f90-4791-b9dc-82113826c719"
  //                 ],
  //                 "itemsQty": 30,
  //                 "type": "G"
  //             },
  //             {
  //                 "ordersId": [
  //                     "a63e4cda-5f90-4791-b9dc-82113826c719"
  //                 ],
  //                 "itemsQty": 10,
  //                 "type": "M"
  //             },
  //             {
  //                 "ordersId": [
  //                     "a63e4cda-5f90-4791-b9dc-82113826c719"
  //                 ],
  //                 "itemsQty": 10,
  //                 "type": "M"
  //             },
  //             {
  //                 "ordersId": [
  //                     "a63e4cda-5f90-4791-b9dc-82113826c719"
  //                 ],
  //                 "itemsQty": 4,
  //                 "type": "P"
  //             }
  //         ],
  //         "sendDate": "2024-02-11T20:29:07.582Z",
  //         "adress": {
  //             "Id": "2ceb4f33-368a-45ab-85bd-2f67c0951067",
  //             "state": "RJ",
  //             "zipcode": "21050700",
  //             "street": "Rua Astrei",
  //             "complement": "",
  //             "neighborhood": "Higienópolis",
  //             "city": "Rio de Janeiro"
  //         },
  //         "carrier": {
  //             "Id": "0f513c5e-b717-4e41-9df0-213d08ae1be4",
  //             "name": "Gollog",
  //             "cutOffTime": "15:00"
  //         }
  //     },
  //     {
  //         "orderList": [
  //             {
  //                 "Id": "64330f70-f2dc-4f61-93e1-b89a404460b9",
  //                 "addressId": "2ceb4f33-368a-45ab-85bd-2f67c0951067",
  //                 "carrierId": "e00dde5a-a469-4e24-ada3-fff8fc7872b6",
  //                 "quantity": 9,
  //                 "createdAt": "2024-02-10T16:46:04.151Z"
  //             }
  //         ],
  //         "totalQuantity": 9,
  //         "Boxes": [
  //             {
  //                 "ordersId": [
  //                     "64330f70-f2dc-4f61-93e1-b89a404460b9"
  //                 ],
  //                 "itemsQty": 5,
  //                 "type": "P"
  //             },
  //             {
  //                 "ordersId": [
  //                     "64330f70-f2dc-4f61-93e1-b89a404460b9"
  //                 ],
  //                 "itemsQty": 4,
  //                 "type": "P"
  //             }
  //         ],
  //         "sendDate": "2024-02-10T16:46:04.151Z",
  //         "adress": {
  //             "Id": "2ceb4f33-368a-45ab-85bd-2f67c0951067",
  //             "state": "RJ",
  //             "zipcode": "21050700",
  //             "street": "Rua Astrei",
  //             "complement": "",
  //             "neighborhood": "Higienópolis",
  //             "city": "Rio de Janeiro"
  //         },
  //         "carrier": {
  //             "Id": "e00dde5a-a469-4e24-ada3-fff8fc7872b6",
  //             "name": "Haytek",
  //             "cutOffTime": "17:00"
  //         }
  //     },
  //     {
  //         "orderList": [
  //             {
  //                 "Id": "a5bc42bb-7c5d-46b7-ac49-cc924dd25b71",
  //                 "addressId": "2ceb4f33-368a-45ab-85bd-2f67c0951067",
  //                 "carrierId": "e00dde5a-a469-4e24-ada3-fff8fc7872b6",
  //                 "quantity": 22,
  //                 "createdAt": "2024-02-10T20:20:01.953Z"
  //             }
  //         ],
  //         "totalQuantity": 22,
  //         "Boxes": [
  //             {
  //                 "ordersId": [
  //                     "a5bc42bb-7c5d-46b7-ac49-cc924dd25b71"
  //                 ],
  //                 "itemsQty": 10,
  //                 "type": "M"
  //             },
  //             {
  //                 "ordersId": [
  //                     "a5bc42bb-7c5d-46b7-ac49-cc924dd25b71"
  //                 ],
  //                 "itemsQty": 10,
  //                 "type": "M"
  //             },
  //             {
  //                 "ordersId": [
  //                     "a5bc42bb-7c5d-46b7-ac49-cc924dd25b71"
  //                 ],
  //                 "itemsQty": 2,
  //                 "type": "P"
  //             }
  //         ],
  //         "sendDate": "2024-02-11T20:20:01.953Z",
  //         "adress": {
  //             "Id": "2ceb4f33-368a-45ab-85bd-2f67c0951067",
  //             "state": "RJ",
  //             "zipcode": "21050700",
  //             "street": "Rua Astrei",
  //             "complement": "",
  //             "neighborhood": "Higienópolis",
  //             "city": "Rio de Janeiro"
  //         },
  //         "carrier": {
  //             "Id": "e00dde5a-a469-4e24-ada3-fff8fc7872b6",
  //             "name": "Haytek",
  //             "cutOffTime": "17:00"
  //         }
  //     },
  //     {
  //         "orderList": [
  //             {
  //                 "Id": "ab86c4e6-1bd0-4235-a2b8-c3fc3f80d326",
  //                 "addressId": "11fbe6ba-e46d-47c0-bb29-f95831fa5131",
  //                 "carrierId": "c56dc7bc-6167-49de-9e60-37c386660f59",
  //                 "quantity": 99,
  //                 "createdAt": "2024-02-10T03:39:20.130Z"
  //             },
  //             {
  //                 "Id": "a80d6dd4-e836-4fd5-bb5b-83717a80c484",
  //                 "addressId": "11fbe6ba-e46d-47c0-bb29-f95831fa5131",
  //                 "carrierId": "c56dc7bc-6167-49de-9e60-37c386660f59",
  //                 "quantity": 10,
  //                 "createdAt": "2024-02-10T10:20:05.709Z"
  //             }
  //         ],
  //         "totalQuantity": 109,
  //         "Boxes": [
  //             {
  //                 "ordersId": [
  //                     "ab86c4e6-1bd0-4235-a2b8-c3fc3f80d326"
  //                 ],
  //                 "itemsQty": 30,
  //                 "type": "G"
  //             },
  //             {
  //                 "ordersId": [
  //                     "ab86c4e6-1bd0-4235-a2b8-c3fc3f80d326"
  //                 ],
  //                 "itemsQty": 30,
  //                 "type": "G"
  //             },
  //             {
  //                 "ordersId": [
  //                     "ab86c4e6-1bd0-4235-a2b8-c3fc3f80d326"
  //                 ],
  //                 "itemsQty": 30,
  //                 "type": "G"
  //             },
  //             {
  //                 "ordersId": [
  //                     "ab86c4e6-1bd0-4235-a2b8-c3fc3f80d326"
  //                 ],
  //                 "itemsQty": 5,
  //                 "type": "P"
  //             },
  //             {
  //                 "ordersId": [
  //                     "ab86c4e6-1bd0-4235-a2b8-c3fc3f80d326"
  //                 ],
  //                 "itemsQty": 4,
  //                 "type": "P"
  //             },
  //             {
  //                 "ordersId": [
  //                     "a80d6dd4-e836-4fd5-bb5b-83717a80c484"
  //                 ],
  //                 "itemsQty": 10,
  //                 "type": "M"
  //             }
  //         ],
  //         "sendDate": "2024-02-10T10:20:05.709Z",
  //         "adress": {
  //             "Id": "11fbe6ba-e46d-47c0-bb29-f95831fa5131",
  //             "state": "RJ",
  //             "zipcode": "20770130",
  //             "street": "Rua Piauí",
  //             "complement": "",
  //             "neighborhood": "Todos os Santos",
  //             "city": "Rio de Janeiro"
  //         },
  //         "carrier": {
  //             "Id": "c56dc7bc-6167-49de-9e60-37c386660f59",
  //             "name": "Tam",
  //             "cutOffTime": "14:00"
  //         }
  //     },
  //     {
  //         "orderList": [
  //             {
  //                 "Id": "607eb3a4-41ab-4b9a-ad45-29932ff4085d",
  //                 "addressId": "11fbe6ba-e46d-47c0-bb29-f95831fa5131",
  //                 "carrierId": "c56dc7bc-6167-49de-9e60-37c386660f59",
  //                 "quantity": 9,
  //                 "createdAt": "2024-02-10T20:14:43.312Z"
  //             }
  //         ],
  //         "totalQuantity": 9,
  //         "Boxes": [
  //             {
  //                 "ordersId": [
  //                     "607eb3a4-41ab-4b9a-ad45-29932ff4085d"
  //                 ],
  //                 "itemsQty": 5,
  //                 "type": "P"
  //             },
  //             {
  //                 "ordersId": [
  //                     "607eb3a4-41ab-4b9a-ad45-29932ff4085d"
  //                 ],
  //                 "itemsQty": 4,
  //                 "type": "P"
  //             }
  //         ],
  //         "sendDate": "2024-02-11T20:14:43.312Z",
  //         "adress": {
  //             "Id": "11fbe6ba-e46d-47c0-bb29-f95831fa5131",
  //             "state": "RJ",
  //             "zipcode": "20770130",
  //             "street": "Rua Piauí",
  //             "complement": "",
  //             "neighborhood": "Todos os Santos",
  //             "city": "Rio de Janeiro"
  //         },
  //         "carrier": {
  //             "Id": "c56dc7bc-6167-49de-9e60-37c386660f59",
  //             "name": "Tam",
  //             "cutOffTime": "14:00"
  //         }
  //     },
  //     {
  //         "orderList": [
  //             {
  //                 "Id": "11fdb6e7-3a5b-4916-bc57-96063fade9f9",
  //                 "addressId": "9eb197e3-bdf9-4b07-964c-b5b15551a963",
  //                 "carrierId": "c56dc7bc-6167-49de-9e60-37c386660f59",
  //                 "quantity": 69,
  //                 "createdAt": "2024-02-10T16:34:25.360Z"
  //             }
  //         ],
  //         "totalQuantity": 69,
  //         "Boxes": [
  //             {
  //                 "ordersId": [
  //                     "11fdb6e7-3a5b-4916-bc57-96063fade9f9"
  //                 ],
  //                 "itemsQty": 30,
  //                 "type": "G"
  //             },
  //             {
  //                 "ordersId": [
  //                     "11fdb6e7-3a5b-4916-bc57-96063fade9f9"
  //                 ],
  //                 "itemsQty": 30,
  //                 "type": "G"
  //             },
  //             {
  //                 "ordersId": [
  //                     "11fdb6e7-3a5b-4916-bc57-96063fade9f9"
  //                 ],
  //                 "itemsQty": 5,
  //                 "type": "P"
  //             },
  //             {
  //                 "ordersId": [
  //                     "11fdb6e7-3a5b-4916-bc57-96063fade9f9"
  //                 ],
  //                 "itemsQty": 4,
  //                 "type": "P"
  //             }
  //         ],
  //         "sendDate": "2024-02-11T16:34:25.360Z",
  //         "adress": {
  //             "Id": "9eb197e3-bdf9-4b07-964c-b5b15551a963",
  //             "state": "RJ",
  //             "zipcode": "22471270",
  //             "street": "Rua Baronesa de Poconé",
  //             "complement": "",
  //             "neighborhood": "Lagoa",
  //             "city": "Rio de Janeiro"
  //         },
  //         "carrier": {
  //             "Id": "c56dc7bc-6167-49de-9e60-37c386660f59",
  //             "name": "Tam",
  //             "cutOffTime": "14:00"
  //         }
  //     },
  //     {
  //         "orderList": [
  //             {
  //                 "Id": "44e3c4e7-8dc8-4c3d-a474-8353ec307318",
  //                 "addressId": "9eb197e3-bdf9-4b07-964c-b5b15551a963",
  //                 "carrierId": "e00dde5a-a469-4e24-ada3-fff8fc7872b6",
  //                 "quantity": 23,
  //                 "createdAt": "2024-02-10T04:36:27.785Z"
  //             }
  //         ],
  //         "totalQuantity": 23,
  //         "Boxes": [
  //             {
  //                 "ordersId": [
  //                     "44e3c4e7-8dc8-4c3d-a474-8353ec307318"
  //                 ],
  //                 "itemsQty": 10,
  //                 "type": "M"
  //             },
  //             {
  //                 "ordersId": [
  //                     "44e3c4e7-8dc8-4c3d-a474-8353ec307318"
  //                 ],
  //                 "itemsQty": 10,
  //                 "type": "M"
  //             },
  //             {
  //                 "ordersId": [
  //                     "44e3c4e7-8dc8-4c3d-a474-8353ec307318"
  //                 ],
  //                 "itemsQty": 3,
  //                 "type": "P"
  //             }
  //         ],
  //         "sendDate": "2024-02-10T04:36:27.785Z",
  //         "adress": {
  //             "Id": "9eb197e3-bdf9-4b07-964c-b5b15551a963",
  //             "state": "RJ",
  //             "zipcode": "22471270",
  //             "street": "Rua Baronesa de Poconé",
  //             "complement": "",
  //             "neighborhood": "Lagoa",
  //             "city": "Rio de Janeiro"
  //         },
  //         "carrier": {
  //             "Id": "e00dde5a-a469-4e24-ada3-fff8fc7872b6",
  //             "name": "Haytek",
  //             "cutOffTime": "17:00"
  //         }
  //     },
  //     {
  //         "orderList": [
  //             {
  //                 "Id": "abe8154d-d681-4f42-b947-a30c2398bedb",
  //                 "addressId": "2ceb4f33-368a-45ab-85bd-2f67c0951067",
  //                 "carrierId": "0f513c5e-b717-4e41-9df0-213d08ae1be4",
  //                 "quantity": 55,
  //                 "createdAt": "2024-02-13T21:12:25.063Z"
  //             }
  //         ],
  //         "totalQuantity": 55,
  //         "Boxes": [
  //             {
  //                 "ordersId": [
  //                     "abe8154d-d681-4f42-b947-a30c2398bedb"
  //                 ],
  //                 "itemsQty": 30,
  //                 "type": "G"
  //             },
  //             {
  //                 "ordersId": [
  //                     "abe8154d-d681-4f42-b947-a30c2398bedb"
  //                 ],
  //                 "itemsQty": 10,
  //                 "type": "M"
  //             },
  //             {
  //                 "ordersId": [
  //                     "abe8154d-d681-4f42-b947-a30c2398bedb"
  //                 ],
  //                 "itemsQty": 10,
  //                 "type": "M"
  //             },
  //             {
  //                 "ordersId": [
  //                     "abe8154d-d681-4f42-b947-a30c2398bedb"
  //                 ],
  //                 "itemsQty": 5,
  //                 "type": "P"
  //             }
  //         ],
  //         "sendDate": "2024-02-14T21:12:25.063Z",
  //         "adress": {
  //             "Id": "2ceb4f33-368a-45ab-85bd-2f67c0951067",
  //             "state": "RJ",
  //             "zipcode": "21050700",
  //             "street": "Rua Astrei",
  //             "complement": "",
  //             "neighborhood": "Higienópolis",
  //             "city": "Rio de Janeiro"
  //         },
  //         "carrier": {
  //             "Id": "0f513c5e-b717-4e41-9df0-213d08ae1be4",
  //             "name": "Gollog",
  //             "cutOffTime": "15:00"
  //         }
  //     },
  //     {
  //         "orderList": [
  //             {
  //                 "Id": "984ec1b3-fbe7-44bb-a8fb-f27cf301b0ea",
  //                 "addressId": "11fbe6ba-e46d-47c0-bb29-f95831fa5131",
  //                 "carrierId": "0f513c5e-b717-4e41-9df0-213d08ae1be4",
  //                 "quantity": 8,
  //                 "createdAt": "2024-02-13T21:19:40.800Z"
  //             }
  //         ],
  //         "totalQuantity": 8,
  //         "Boxes": [
  //             {
  //                 "ordersId": [
  //                     "984ec1b3-fbe7-44bb-a8fb-f27cf301b0ea"
  //                 ],
  //                 "itemsQty": 5,
  //                 "type": "P"
  //             },
  //             {
  //                 "ordersId": [
  //                     "984ec1b3-fbe7-44bb-a8fb-f27cf301b0ea"
  //                 ],
  //                 "itemsQty": 3,
  //                 "type": "P"
  //             }
  //         ],
  //         "sendDate": "2024-02-14T21:19:40.800Z",
  //         "adress": {
  //             "Id": "11fbe6ba-e46d-47c0-bb29-f95831fa5131",
  //             "state": "RJ",
  //             "zipcode": "20770130",
  //             "street": "Rua Piauí",
  //             "complement": "",
  //             "neighborhood": "Todos os Santos",
  //             "city": "Rio de Janeiro"
  //         },
  //         "carrier": {
  //             "Id": "0f513c5e-b717-4e41-9df0-213d08ae1be4",
  //             "name": "Gollog",
  //             "cutOffTime": "15:00"
  //         }
  //     },
  //     {
  //         "orderList": [
  //             {
  //                 "Id": "cda74525-8047-4d6f-bc07-8407b53f0721",
  //                 "addressId": "11fbe6ba-e46d-47c0-bb29-f95831fa5131",
  //                 "carrierId": "c29d24c6-3fc7-492c-8b44-7d56855ec11e",
  //                 "quantity": 82,
  //                 "createdAt": "2024-02-13T04:23:08.722Z"
  //             }
  //         ],
  //         "totalQuantity": 82,
  //         "Boxes": [
  //             {
  //                 "ordersId": [
  //                     "cda74525-8047-4d6f-bc07-8407b53f0721"
  //                 ],
  //                 "itemsQty": 30,
  //                 "type": "G"
  //             },
  //             {
  //                 "ordersId": [
  //                     "cda74525-8047-4d6f-bc07-8407b53f0721"
  //                 ],
  //                 "itemsQty": 30,
  //                 "type": "G"
  //             },
  //             {
  //                 "ordersId": [
  //                     "cda74525-8047-4d6f-bc07-8407b53f0721"
  //                 ],
  //                 "itemsQty": 10,
  //                 "type": "M"
  //             },
  //             {
  //                 "ordersId": [
  //                     "cda74525-8047-4d6f-bc07-8407b53f0721"
  //                 ],
  //                 "itemsQty": 10,
  //                 "type": "M"
  //             },
  //             {
  //                 "ordersId": [
  //                     "cda74525-8047-4d6f-bc07-8407b53f0721"
  //                 ],
  //                 "itemsQty": 2,
  //                 "type": "P"
  //             }
  //         ],
  //         "sendDate": "2024-02-13T04:23:08.722Z",
  //         "adress": {
  //             "Id": "11fbe6ba-e46d-47c0-bb29-f95831fa5131",
  //             "state": "RJ",
  //             "zipcode": "20770130",
  //             "street": "Rua Piauí",
  //             "complement": "",
  //             "neighborhood": "Todos os Santos",
  //             "city": "Rio de Janeiro"
  //         },
  //         "carrier": {
  //             "Id": "c29d24c6-3fc7-492c-8b44-7d56855ec11e",
  //             "name": "Correios",
  //             "cutOffTime": "13:30"
  //         }
  //     },
  //     {
  //         "orderList": [
  //             {
  //                 "Id": "027f95dc-830f-4352-a1e0-39b963a215a7",
  //                 "addressId": "9eb197e3-bdf9-4b07-964c-b5b15551a963",
  //                 "carrierId": "c29d24c6-3fc7-492c-8b44-7d56855ec11e",
  //                 "quantity": 87,
  //                 "createdAt": "2024-02-13T16:09:09.729Z"
  //             }
  //         ],
  //         "totalQuantity": 87,
  //         "Boxes": [
  //             {
  //                 "ordersId": [
  //                     "027f95dc-830f-4352-a1e0-39b963a215a7"
  //                 ],
  //                 "itemsQty": 30,
  //                 "type": "G"
  //             },
  //             {
  //                 "ordersId": [
  //                     "027f95dc-830f-4352-a1e0-39b963a215a7"
  //                 ],
  //                 "itemsQty": 30,
  //                 "type": "G"
  //             },
  //             {
  //                 "ordersId": [
  //                     "027f95dc-830f-4352-a1e0-39b963a215a7"
  //                 ],
  //                 "itemsQty": 10,
  //                 "type": "M"
  //             },
  //             {
  //                 "ordersId": [
  //                     "027f95dc-830f-4352-a1e0-39b963a215a7"
  //                 ],
  //                 "itemsQty": 10,
  //                 "type": "M"
  //             },
  //             {
  //                 "ordersId": [
  //                     "027f95dc-830f-4352-a1e0-39b963a215a7"
  //                 ],
  //                 "itemsQty": 5,
  //                 "type": "P"
  //             },
  //             {
  //                 "ordersId": [
  //                     "027f95dc-830f-4352-a1e0-39b963a215a7"
  //                 ],
  //                 "itemsQty": 2,
  //                 "type": "P"
  //             }
  //         ],
  //         "sendDate": "2024-02-14T16:09:09.729Z",
  //         "adress": {
  //             "Id": "9eb197e3-bdf9-4b07-964c-b5b15551a963",
  //             "state": "RJ",
  //             "zipcode": "22471270",
  //             "street": "Rua Baronesa de Poconé",
  //             "complement": "",
  //             "neighborhood": "Lagoa",
  //             "city": "Rio de Janeiro"
  //         },
  //         "carrier": {
  //             "Id": "c29d24c6-3fc7-492c-8b44-7d56855ec11e",
  //             "name": "Correios",
  //             "cutOffTime": "13:30"
  //         }
  //     },
  //     {
  //         "orderList": [
  //             {
  //                 "Id": "d0878e5d-df97-4b01-897a-ee7befb06724",
  //                 "addressId": "9eb197e3-bdf9-4b07-964c-b5b15551a963",
  //                 "carrierId": "e00dde5a-a469-4e24-ada3-fff8fc7872b6",
  //                 "quantity": 25,
  //                 "createdAt": "2024-02-13T02:22:12.566Z"
  //             }
  //         ],
  //         "totalQuantity": 25,
  //         "Boxes": [
  //             {
  //                 "ordersId": [
  //                     "d0878e5d-df97-4b01-897a-ee7befb06724"
  //                 ],
  //                 "itemsQty": 10,
  //                 "type": "M"
  //             },
  //             {
  //                 "ordersId": [
  //                     "d0878e5d-df97-4b01-897a-ee7befb06724"
  //                 ],
  //                 "itemsQty": 10,
  //                 "type": "M"
  //             },
  //             {
  //                 "ordersId": [
  //                     "d0878e5d-df97-4b01-897a-ee7befb06724"
  //                 ],
  //                 "itemsQty": 5,
  //                 "type": "P"
  //             }
  //         ],
  //         "sendDate": "2024-02-13T02:22:12.566Z",
  //         "adress": {
  //             "Id": "9eb197e3-bdf9-4b07-964c-b5b15551a963",
  //             "state": "RJ",
  //             "zipcode": "22471270",
  //             "street": "Rua Baronesa de Poconé",
  //             "complement": "",
  //             "neighborhood": "Lagoa",
  //             "city": "Rio de Janeiro"
  //         },
  //         "carrier": {
  //             "Id": "e00dde5a-a469-4e24-ada3-fff8fc7872b6",
  //             "name": "Haytek",
  //             "cutOffTime": "17:00"
  //         }
  //     },
  //     {
  //         "orderList": [
  //             {
  //                 "Id": "d22d84b7-0ac5-4295-97ff-ca404a903e2e",
  //                 "addressId": "2ceb4f33-368a-45ab-85bd-2f67c0951067",
  //                 "carrierId": "c56dc7bc-6167-49de-9e60-37c386660f59",
  //                 "quantity": 45,
  //                 "createdAt": "2024-02-03T05:26:01.270Z"
  //             }
  //         ],
  //         "totalQuantity": 45,
  //         "Boxes": [
  //             {
  //                 "ordersId": [
  //                     "d22d84b7-0ac5-4295-97ff-ca404a903e2e"
  //                 ],
  //                 "itemsQty": 30,
  //                 "type": "G"
  //             },
  //             {
  //                 "ordersId": [
  //                     "d22d84b7-0ac5-4295-97ff-ca404a903e2e"
  //                 ],
  //                 "itemsQty": 10,
  //                 "type": "M"
  //             },
  //             {
  //                 "ordersId": [
  //                     "d22d84b7-0ac5-4295-97ff-ca404a903e2e"
  //                 ],
  //                 "itemsQty": 5,
  //                 "type": "P"
  //             }
  //         ],
  //         "sendDate": "2024-02-03T05:26:01.270Z",
  //         "adress": {
  //             "Id": "2ceb4f33-368a-45ab-85bd-2f67c0951067",
  //             "state": "RJ",
  //             "zipcode": "21050700",
  //             "street": "Rua Astrei",
  //             "complement": "",
  //             "neighborhood": "Higienópolis",
  //             "city": "Rio de Janeiro"
  //         },
  //         "carrier": {
  //             "Id": "c56dc7bc-6167-49de-9e60-37c386660f59",
  //             "name": "Tam",
  //             "cutOffTime": "14:00"
  //         }
  //     },
  //     {
  //         "orderList": [
  //             {
  //                 "Id": "f3f91800-fd1b-4cc1-87da-37e31eb22502",
  //                 "addressId": "9eb197e3-bdf9-4b07-964c-b5b15551a963",
  //                 "carrierId": "c56dc7bc-6167-49de-9e60-37c386660f59",
  //                 "quantity": 67,
  //                 "createdAt": "2024-02-03T18:58:56.306Z"
  //             }
  //         ],
  //         "totalQuantity": 67,
  //         "Boxes": [
  //             {
  //                 "ordersId": [
  //                     "f3f91800-fd1b-4cc1-87da-37e31eb22502"
  //                 ],
  //                 "itemsQty": 30,
  //                 "type": "G"
  //             },
  //             {
  //                 "ordersId": [
  //                     "f3f91800-fd1b-4cc1-87da-37e31eb22502"
  //                 ],
  //                 "itemsQty": 30,
  //                 "type": "G"
  //             },
  //             {
  //                 "ordersId": [
  //                     "f3f91800-fd1b-4cc1-87da-37e31eb22502"
  //                 ],
  //                 "itemsQty": 5,
  //                 "type": "P"
  //             },
  //             {
  //                 "ordersId": [
  //                     "f3f91800-fd1b-4cc1-87da-37e31eb22502"
  //                 ],
  //                 "itemsQty": 2,
  //                 "type": "P"
  //             }
  //         ],
  //         "sendDate": "2024-02-04T18:58:56.306Z",
  //         "adress": {
  //             "Id": "9eb197e3-bdf9-4b07-964c-b5b15551a963",
  //             "state": "RJ",
  //             "zipcode": "22471270",
  //             "street": "Rua Baronesa de Poconé",
  //             "complement": "",
  //             "neighborhood": "Lagoa",
  //             "city": "Rio de Janeiro"
  //         },
  //         "carrier": {
  //             "Id": "c56dc7bc-6167-49de-9e60-37c386660f59",
  //             "name": "Tam",
  //             "cutOffTime": "14:00"
  //         }
  //     },
  //     {
  //         "orderList": [
  //             {
  //                 "Id": "eb4c1e73-67a2-4469-90d6-bb6f612b699e",
  //                 "addressId": "2ceb4f33-368a-45ab-85bd-2f67c0951067",
  //                 "carrierId": "c29d24c6-3fc7-492c-8b44-7d56855ec11e",
  //                 "quantity": 67,
  //                 "createdAt": "2024-02-07T07:25:28.487Z"
  //             }
  //         ],
  //         "totalQuantity": 67,
  //         "Boxes": [
  //             {
  //                 "ordersId": [
  //                     "eb4c1e73-67a2-4469-90d6-bb6f612b699e"
  //                 ],
  //                 "itemsQty": 30,
  //                 "type": "G"
  //             },
  //             {
  //                 "ordersId": [
  //                     "eb4c1e73-67a2-4469-90d6-bb6f612b699e"
  //                 ],
  //                 "itemsQty": 30,
  //                 "type": "G"
  //             },
  //             {
  //                 "ordersId": [
  //                     "eb4c1e73-67a2-4469-90d6-bb6f612b699e"
  //                 ],
  //                 "itemsQty": 5,
  //                 "type": "P"
  //             },
  //             {
  //                 "ordersId": [
  //                     "eb4c1e73-67a2-4469-90d6-bb6f612b699e"
  //                 ],
  //                 "itemsQty": 2,
  //                 "type": "P"
  //             }
  //         ],
  //         "sendDate": "2024-02-07T07:25:28.487Z",
  //         "adress": {
  //             "Id": "2ceb4f33-368a-45ab-85bd-2f67c0951067",
  //             "state": "RJ",
  //             "zipcode": "21050700",
  //             "street": "Rua Astrei",
  //             "complement": "",
  //             "neighborhood": "Higienópolis",
  //             "city": "Rio de Janeiro"
  //         },
  //         "carrier": {
  //             "Id": "c29d24c6-3fc7-492c-8b44-7d56855ec11e",
  //             "name": "Correios",
  //             "cutOffTime": "13:30"
  //         }
  //     },
  //     {
  //         "orderList": [
  //             {
  //                 "Id": "0651bce9-ef4d-4778-8dc7-94e548bb31e6",
  //                 "addressId": "9eb197e3-bdf9-4b07-964c-b5b15551a963",
  //                 "carrierId": "0f513c5e-b717-4e41-9df0-213d08ae1be4",
  //                 "quantity": 8,
  //                 "createdAt": "2024-02-07T16:40:18.202Z"
  //             }
  //         ],
  //         "totalQuantity": 8,
  //         "Boxes": [
  //             {
  //                 "ordersId": [
  //                     "0651bce9-ef4d-4778-8dc7-94e548bb31e6"
  //                 ],
  //                 "itemsQty": 5,
  //                 "type": "P"
  //             },
  //             {
  //                 "ordersId": [
  //                     "0651bce9-ef4d-4778-8dc7-94e548bb31e6"
  //                 ],
  //                 "itemsQty": 3,
  //                 "type": "P"
  //             }
  //         ],
  //         "sendDate": "2024-02-08T16:40:18.202Z",
  //         "adress": {
  //             "Id": "9eb197e3-bdf9-4b07-964c-b5b15551a963",
  //             "state": "RJ",
  //             "zipcode": "22471270",
  //             "street": "Rua Baronesa de Poconé",
  //             "complement": "",
  //             "neighborhood": "Lagoa",
  //             "city": "Rio de Janeiro"
  //         },
  //         "carrier": {
  //             "Id": "0f513c5e-b717-4e41-9df0-213d08ae1be4",
  //             "name": "Gollog",
  //             "cutOffTime": "15:00"
  //         }
  //     },
  //     {
  //         "orderList": [
  //             {
  //                 "Id": "152a7806-607e-4764-bf8e-6901631f0bea",
  //                 "addressId": "9eb197e3-bdf9-4b07-964c-b5b15551a963",
  //                 "carrierId": "84cc9a22-d700-492a-960a-d44103f5e9de",
  //                 "quantity": 42,
  //                 "createdAt": "2024-02-07T17:22:50.952Z"
  //             }
  //         ],
  //         "totalQuantity": 42,
  //         "Boxes": [
  //             {
  //                 "ordersId": [
  //                     "152a7806-607e-4764-bf8e-6901631f0bea"
  //                 ],
  //                 "itemsQty": 30,
  //                 "type": "G"
  //             },
  //             {
  //                 "ordersId": [
  //                     "152a7806-607e-4764-bf8e-6901631f0bea"
  //                 ],
  //                 "itemsQty": 10,
  //                 "type": "M"
  //             },
  //             {
  //                 "ordersId": [
  //                     "152a7806-607e-4764-bf8e-6901631f0bea"
  //                 ],
  //                 "itemsQty": 2,
  //                 "type": "P"
  //             }
  //         ],
  //         "sendDate": "2024-02-08T17:22:50.952Z",
  //         "adress": {
  //             "Id": "9eb197e3-bdf9-4b07-964c-b5b15551a963",
  //             "state": "RJ",
  //             "zipcode": "22471270",
  //             "street": "Rua Baronesa de Poconé",
  //             "complement": "",
  //             "neighborhood": "Lagoa",
  //             "city": "Rio de Janeiro"
  //         },
  //         "carrier": {
  //             "Id": "84cc9a22-d700-492a-960a-d44103f5e9de",
  //             "name": "Buslog",
  //             "cutOffTime": "13:15"
  //         }
  //     },
  //     {
  //         "orderList": [
  //             {
  //                 "Id": "9946b473-81e6-477d-acee-b15825754a5f",
  //                 "addressId": "9eb197e3-bdf9-4b07-964c-b5b15551a963",
  //                 "carrierId": "e00dde5a-a469-4e24-ada3-fff8fc7872b6",
  //                 "quantity": 10,
  //                 "createdAt": "2024-02-07T06:46:36.108Z"
  //             }
  //         ],
  //         "totalQuantity": 10,
  //         "Boxes": [
  //             {
  //                 "ordersId": [
  //                     "9946b473-81e6-477d-acee-b15825754a5f"
  //                 ],
  //                 "itemsQty": 10,
  //                 "type": "M"
  //             }
  //         ],
  //         "sendDate": "2024-02-07T06:46:36.108Z",
  //         "adress": {
  //             "Id": "9eb197e3-bdf9-4b07-964c-b5b15551a963",
  //             "state": "RJ",
  //             "zipcode": "22471270",
  //             "street": "Rua Baronesa de Poconé",
  //             "complement": "",
  //             "neighborhood": "Lagoa",
  //             "city": "Rio de Janeiro"
  //         },
  //         "carrier": {
  //             "Id": "e00dde5a-a469-4e24-ada3-fff8fc7872b6",
  //             "name": "Haytek",
  //             "cutOffTime": "17:00"
  //         }
  //     },
  //     {
  //         "orderList": [
  //             {
  //                 "Id": "91363244-9def-4979-a697-d8e58cbcc411",
  //                 "addressId": "11fbe6ba-e46d-47c0-bb29-f95831fa5131",
  //                 "carrierId": "e00dde5a-a469-4e24-ada3-fff8fc7872b6",
  //                 "quantity": 53,
  //                 "createdAt": "2024-02-05T17:22:04.704Z"
  //             }
  //         ],
  //         "totalQuantity": 53,
  //         "Boxes": [
  //             {
  //                 "ordersId": [
  //                     "91363244-9def-4979-a697-d8e58cbcc411"
  //                 ],
  //                 "itemsQty": 30,
  //                 "type": "G"
  //             },
  //             {
  //                 "ordersId": [
  //                     "91363244-9def-4979-a697-d8e58cbcc411"
  //                 ],
  //                 "itemsQty": 10,
  //                 "type": "M"
  //             },
  //             {
  //                 "ordersId": [
  //                     "91363244-9def-4979-a697-d8e58cbcc411"
  //                 ],
  //                 "itemsQty": 10,
  //                 "type": "M"
  //             },
  //             {
  //                 "ordersId": [
  //                     "91363244-9def-4979-a697-d8e58cbcc411"
  //                 ],
  //                 "itemsQty": 3,
  //                 "type": "P"
  //             }
  //         ],
  //         "sendDate": "2024-02-06T17:22:04.704Z",
  //         "adress": {
  //             "Id": "11fbe6ba-e46d-47c0-bb29-f95831fa5131",
  //             "state": "RJ",
  //             "zipcode": "20770130",
  //             "street": "Rua Piauí",
  //             "complement": "",
  //             "neighborhood": "Todos os Santos",
  //             "city": "Rio de Janeiro"
  //         },
  //         "carrier": {
  //             "Id": "e00dde5a-a469-4e24-ada3-fff8fc7872b6",
  //             "name": "Haytek",
  //             "cutOffTime": "17:00"
  //         }
  //     },
  //     {
  //         "orderList": [
  //             {
  //                 "Id": "f2f43a02-84fe-41ce-8a70-bf7dee7ca9f3",
  //                 "addressId": "9eb197e3-bdf9-4b07-964c-b5b15551a963",
  //                 "carrierId": "0f513c5e-b717-4e41-9df0-213d08ae1be4",
  //                 "quantity": 27,
  //                 "createdAt": "2024-02-05T16:19:45.282Z"
  //             }
  //         ],
  //         "totalQuantity": 27,
  //         "Boxes": [
  //             {
  //                 "ordersId": [
  //                     "f2f43a02-84fe-41ce-8a70-bf7dee7ca9f3"
  //                 ],
  //                 "itemsQty": 10,
  //                 "type": "M"
  //             },
  //             {
  //                 "ordersId": [
  //                     "f2f43a02-84fe-41ce-8a70-bf7dee7ca9f3"
  //                 ],
  //                 "itemsQty": 10,
  //                 "type": "M"
  //             },
  //             {
  //                 "ordersId": [
  //                     "f2f43a02-84fe-41ce-8a70-bf7dee7ca9f3"
  //                 ],
  //                 "itemsQty": 5,
  //                 "type": "P"
  //             },
  //             {
  //                 "ordersId": [
  //                     "f2f43a02-84fe-41ce-8a70-bf7dee7ca9f3"
  //                 ],
  //                 "itemsQty": 2,
  //                 "type": "P"
  //             }
  //         ],
  //         "sendDate": "2024-02-06T16:19:45.282Z",
  //         "adress": {
  //             "Id": "9eb197e3-bdf9-4b07-964c-b5b15551a963",
  //             "state": "RJ",
  //             "zipcode": "22471270",
  //             "street": "Rua Baronesa de Poconé",
  //             "complement": "",
  //             "neighborhood": "Lagoa",
  //             "city": "Rio de Janeiro"
  //         },
  //         "carrier": {
  //             "Id": "0f513c5e-b717-4e41-9df0-213d08ae1be4",
  //             "name": "Gollog",
  //             "cutOffTime": "15:00"
  //         }
  //     },
  //     {
  //         "orderList": [
  //             {
  //                 "Id": "1d0dded0-75f2-4d39-829c-14e10d83f42d",
  //                 "addressId": "11fbe6ba-e46d-47c0-bb29-f95831fa5131",
  //                 "carrierId": "0f513c5e-b717-4e41-9df0-213d08ae1be4",
  //                 "quantity": 41,
  //                 "createdAt": "2024-02-06T13:15:14.871Z"
  //             }
  //         ],
  //         "totalQuantity": 41,
  //         "Boxes": [
  //             {
  //                 "ordersId": [
  //                     "1d0dded0-75f2-4d39-829c-14e10d83f42d"
  //                 ],
  //                 "itemsQty": 30,
  //                 "type": "G"
  //             },
  //             {
  //                 "ordersId": [
  //                     "1d0dded0-75f2-4d39-829c-14e10d83f42d"
  //                 ],
  //                 "itemsQty": 10,
  //                 "type": "M"
  //             },
  //             {
  //                 "ordersId": [
  //                     "1d0dded0-75f2-4d39-829c-14e10d83f42d"
  //                 ],
  //                 "itemsQty": 1,
  //                 "type": "P"
  //             }
  //         ],
  //         "sendDate": "2024-02-06T13:15:14.871Z",
  //         "adress": {
  //             "Id": "11fbe6ba-e46d-47c0-bb29-f95831fa5131",
  //             "state": "RJ",
  //             "zipcode": "20770130",
  //             "street": "Rua Piauí",
  //             "complement": "",
  //             "neighborhood": "Todos os Santos",
  //             "city": "Rio de Janeiro"
  //         },
  //         "carrier": {
  //             "Id": "0f513c5e-b717-4e41-9df0-213d08ae1be4",
  //             "name": "Gollog",
  //             "cutOffTime": "15:00"
  //         }
  //     },
  //     {
  //         "orderList": [
  //             {
  //                 "Id": "95ba2df9-b043-4945-9b7f-4cdaa0697c8d",
  //                 "addressId": "11fbe6ba-e46d-47c0-bb29-f95831fa5131",
  //                 "carrierId": "0f513c5e-b717-4e41-9df0-213d08ae1be4",
  //                 "quantity": 38,
  //                 "createdAt": "2024-02-06T16:48:15.313Z"
  //             }
  //         ],
  //         "totalQuantity": 38,
  //         "Boxes": [
  //             {
  //                 "ordersId": [
  //                     "95ba2df9-b043-4945-9b7f-4cdaa0697c8d"
  //                 ],
  //                 "itemsQty": 30,
  //                 "type": "G"
  //             },
  //             {
  //                 "ordersId": [
  //                     "95ba2df9-b043-4945-9b7f-4cdaa0697c8d"
  //                 ],
  //                 "itemsQty": 5,
  //                 "type": "P"
  //             },
  //             {
  //                 "ordersId": [
  //                     "95ba2df9-b043-4945-9b7f-4cdaa0697c8d"
  //                 ],
  //                 "itemsQty": 3,
  //                 "type": "P"
  //             }
  //         ],
  //         "sendDate": "2024-02-07T16:48:15.313Z",
  //         "adress": {
  //             "Id": "11fbe6ba-e46d-47c0-bb29-f95831fa5131",
  //             "state": "RJ",
  //             "zipcode": "20770130",
  //             "street": "Rua Piauí",
  //             "complement": "",
  //             "neighborhood": "Todos os Santos",
  //             "city": "Rio de Janeiro"
  //         },
  //         "carrier": {
  //             "Id": "0f513c5e-b717-4e41-9df0-213d08ae1be4",
  //             "name": "Gollog",
  //             "cutOffTime": "15:00"
  //         }
  //     },
  //     {
  //         "orderList": [
  //             {
  //                 "Id": "37dba374-637b-4ffd-8bc3-0e60c13144d8",
  //                 "addressId": "9eb197e3-bdf9-4b07-964c-b5b15551a963",
  //                 "carrierId": "0f513c5e-b717-4e41-9df0-213d08ae1be4",
  //                 "quantity": 2,
  //                 "createdAt": "2024-02-06T12:11:52.143Z"
  //             }
  //         ],
  //         "totalQuantity": 2,
  //         "Boxes": [
  //             {
  //                 "ordersId": [
  //                     "37dba374-637b-4ffd-8bc3-0e60c13144d8"
  //                 ],
  //                 "itemsQty": 2,
  //                 "type": "P"
  //             }
  //         ],
  //         "sendDate": "2024-02-06T12:11:52.143Z",
  //         "adress": {
  //             "Id": "9eb197e3-bdf9-4b07-964c-b5b15551a963",
  //             "state": "RJ",
  //             "zipcode": "22471270",
  //             "street": "Rua Baronesa de Poconé",
  //             "complement": "",
  //             "neighborhood": "Lagoa",
  //             "city": "Rio de Janeiro"
  //         },
  //         "carrier": {
  //             "Id": "0f513c5e-b717-4e41-9df0-213d08ae1be4",
  //             "name": "Gollog",
  //             "cutOffTime": "15:00"
  //         }
  //     },
  //     {
  //         "orderList": [
  //             {
  //                 "Id": "9af36e94-d97c-45ee-93ad-98bb04c6ef10",
  //                 "addressId": "9eb197e3-bdf9-4b07-964c-b5b15551a963",
  //                 "carrierId": "c56dc7bc-6167-49de-9e60-37c386660f59",
  //                 "quantity": 51,
  //                 "createdAt": "2024-02-06T15:07:11.345Z"
  //             }
  //         ],
  //         "totalQuantity": 51,
  //         "Boxes": [
  //             {
  //                 "ordersId": [
  //                     "9af36e94-d97c-45ee-93ad-98bb04c6ef10"
  //                 ],
  //                 "itemsQty": 30,
  //                 "type": "G"
  //             },
  //             {
  //                 "ordersId": [
  //                     "9af36e94-d97c-45ee-93ad-98bb04c6ef10"
  //                 ],
  //                 "itemsQty": 10,
  //                 "type": "M"
  //             },
  //             {
  //                 "ordersId": [
  //                     "9af36e94-d97c-45ee-93ad-98bb04c6ef10"
  //                 ],
  //                 "itemsQty": 10,
  //                 "type": "M"
  //             },
  //             {
  //                 "ordersId": [
  //                     "9af36e94-d97c-45ee-93ad-98bb04c6ef10"
  //                 ],
  //                 "itemsQty": 1,
  //                 "type": "P"
  //             }
  //         ],
  //         "sendDate": "2024-02-07T15:07:11.345Z",
  //         "adress": {
  //             "Id": "9eb197e3-bdf9-4b07-964c-b5b15551a963",
  //             "state": "RJ",
  //             "zipcode": "22471270",
  //             "street": "Rua Baronesa de Poconé",
  //             "complement": "",
  //             "neighborhood": "Lagoa",
  //             "city": "Rio de Janeiro"
  //         },
  //         "carrier": {
  //             "Id": "c56dc7bc-6167-49de-9e60-37c386660f59",
  //             "name": "Tam",
  //             "cutOffTime": "14:00"
  //         }
  //     },
  //     {
  //         "orderList": [
  //             {
  //                 "Id": "32d43f56-97ca-473f-9292-bb92fe7da985",
  //                 "addressId": "9eb197e3-bdf9-4b07-964c-b5b15551a963",
  //                 "carrierId": "c29d24c6-3fc7-492c-8b44-7d56855ec11e",
  //                 "quantity": 9,
  //                 "createdAt": "2024-02-06T21:12:37.469Z"
  //             }
  //         ],
  //         "totalQuantity": 9,
  //         "Boxes": [
  //             {
  //                 "ordersId": [
  //                     "32d43f56-97ca-473f-9292-bb92fe7da985"
  //                 ],
  //                 "itemsQty": 5,
  //                 "type": "P"
  //             },
  //             {
  //                 "ordersId": [
  //                     "32d43f56-97ca-473f-9292-bb92fe7da985"
  //                 ],
  //                 "itemsQty": 4,
  //                 "type": "P"
  //             }
  //         ],
  //         "sendDate": "2024-02-07T21:12:37.469Z",
  //         "adress": {
  //             "Id": "9eb197e3-bdf9-4b07-964c-b5b15551a963",
  //             "state": "RJ",
  //             "zipcode": "22471270",
  //             "street": "Rua Baronesa de Poconé",
  //             "complement": "",
  //             "neighborhood": "Lagoa",
  //             "city": "Rio de Janeiro"
  //         },
  //         "carrier": {
  //             "Id": "c29d24c6-3fc7-492c-8b44-7d56855ec11e",
  //             "name": "Correios",
  //             "cutOffTime": "13:30"
  //         }
  //     },
  //     {
  //         "orderList": [
  //             {
  //                 "Id": "5622ab46-70f9-4c26-b73d-8daf20fc0555",
  //                 "addressId": "11fbe6ba-e46d-47c0-bb29-f95831fa5131",
  //                 "carrierId": "c29d24c6-3fc7-492c-8b44-7d56855ec11e",
  //                 "quantity": 27,
  //                 "createdAt": "2024-02-14T18:48:47.967Z"
  //             }
  //         ],
  //         "totalQuantity": 27,
  //         "Boxes": [
  //             {
  //                 "ordersId": [
  //                     "5622ab46-70f9-4c26-b73d-8daf20fc0555"
  //                 ],
  //                 "itemsQty": 10,
  //                 "type": "M"
  //             },
  //             {
  //                 "ordersId": [
  //                     "5622ab46-70f9-4c26-b73d-8daf20fc0555"
  //                 ],
  //                 "itemsQty": 10,
  //                 "type": "M"
  //             },
  //             {
  //                 "ordersId": [
  //                     "5622ab46-70f9-4c26-b73d-8daf20fc0555"
  //                 ],
  //                 "itemsQty": 5,
  //                 "type": "P"
  //             },
  //             {
  //                 "ordersId": [
  //                     "5622ab46-70f9-4c26-b73d-8daf20fc0555"
  //                 ],
  //                 "itemsQty": 2,
  //                 "type": "P"
  //             }
  //         ],
  //         "sendDate": "2024-02-15T18:48:47.967Z",
  //         "adress": {
  //             "Id": "11fbe6ba-e46d-47c0-bb29-f95831fa5131",
  //             "state": "RJ",
  //             "zipcode": "20770130",
  //             "street": "Rua Piauí",
  //             "complement": "",
  //             "neighborhood": "Todos os Santos",
  //             "city": "Rio de Janeiro"
  //         },
  //         "carrier": {
  //             "Id": "c29d24c6-3fc7-492c-8b44-7d56855ec11e",
  //             "name": "Correios",
  //             "cutOffTime": "13:30"
  //         }
  //     },
  //     {
  //         "orderList": [
  //             {
  //                 "Id": "72633d2c-6c21-4146-b9c0-e7281435f1e9",
  //                 "addressId": "11fbe6ba-e46d-47c0-bb29-f95831fa5131",
  //                 "carrierId": "e00dde5a-a469-4e24-ada3-fff8fc7872b6",
  //                 "quantity": 42,
  //                 "createdAt": "2024-02-14T03:21:11.710Z"
  //             },
  //             {
  //                 "Id": "cc99a5c2-a69e-44ab-a967-cd103cb1765f",
  //                 "addressId": "11fbe6ba-e46d-47c0-bb29-f95831fa5131",
  //                 "carrierId": "e00dde5a-a469-4e24-ada3-fff8fc7872b6",
  //                 "quantity": 80,
  //                 "createdAt": "2024-02-14T02:17:06.082Z"
  //             }
  //         ],
  //         "totalQuantity": 122,
  //         "Boxes": [
  //             {
  //                 "ordersId": [
  //                     "72633d2c-6c21-4146-b9c0-e7281435f1e9"
  //                 ],
  //                 "itemsQty": 30,
  //                 "type": "G"
  //             },
  //             {
  //                 "ordersId": [
  //                     "72633d2c-6c21-4146-b9c0-e7281435f1e9"
  //                 ],
  //                 "itemsQty": 10,
  //                 "type": "M"
  //             },
  //             {
  //                 "ordersId": [
  //                     "72633d2c-6c21-4146-b9c0-e7281435f1e9"
  //                 ],
  //                 "itemsQty": 2,
  //                 "type": "P"
  //             },
  //             {
  //                 "ordersId": [
  //                     "cc99a5c2-a69e-44ab-a967-cd103cb1765f"
  //                 ],
  //                 "itemsQty": 30,
  //                 "type": "G"
  //             },
  //             {
  //                 "ordersId": [
  //                     "cc99a5c2-a69e-44ab-a967-cd103cb1765f"
  //                 ],
  //                 "itemsQty": 30,
  //                 "type": "G"
  //             },
  //             {
  //                 "ordersId": [
  //                     "cc99a5c2-a69e-44ab-a967-cd103cb1765f"
  //                 ],
  //                 "itemsQty": 10,
  //                 "type": "M"
  //             },
  //             {
  //                 "ordersId": [
  //                     "cc99a5c2-a69e-44ab-a967-cd103cb1765f"
  //                 ],
  //                 "itemsQty": 10,
  //                 "type": "M"
  //             }
  //         ],
  //         "sendDate": "2024-02-14T02:17:06.082Z",
  //         "adress": {
  //             "Id": "11fbe6ba-e46d-47c0-bb29-f95831fa5131",
  //             "state": "RJ",
  //             "zipcode": "20770130",
  //             "street": "Rua Piauí",
  //             "complement": "",
  //             "neighborhood": "Todos os Santos",
  //             "city": "Rio de Janeiro"
  //         },
  //         "carrier": {
  //             "Id": "e00dde5a-a469-4e24-ada3-fff8fc7872b6",
  //             "name": "Haytek",
  //             "cutOffTime": "17:00"
  //         }
  //     },
  //     {
  //         "orderList": [
  //             {
  //                 "Id": "362f54d6-987b-4e45-a6cc-ed78dd29b215",
  //                 "addressId": "9eb197e3-bdf9-4b07-964c-b5b15551a963",
  //                 "carrierId": "e00dde5a-a469-4e24-ada3-fff8fc7872b6",
  //                 "quantity": 63,
  //                 "createdAt": "2024-02-14T22:47:28.982Z"
  //             }
  //         ],
  //         "totalQuantity": 63,
  //         "Boxes": [
  //             {
  //                 "ordersId": [
  //                     "362f54d6-987b-4e45-a6cc-ed78dd29b215"
  //                 ],
  //                 "itemsQty": 30,
  //                 "type": "G"
  //             },
  //             {
  //                 "ordersId": [
  //                     "362f54d6-987b-4e45-a6cc-ed78dd29b215"
  //                 ],
  //                 "itemsQty": 30,
  //                 "type": "G"
  //             },
  //             {
  //                 "ordersId": [
  //                     "362f54d6-987b-4e45-a6cc-ed78dd29b215"
  //                 ],
  //                 "itemsQty": 3,
  //                 "type": "P"
  //             }
  //         ],
  //         "sendDate": "2024-02-15T22:47:28.982Z",
  //         "adress": {
  //             "Id": "9eb197e3-bdf9-4b07-964c-b5b15551a963",
  //             "state": "RJ",
  //             "zipcode": "22471270",
  //             "street": "Rua Baronesa de Poconé",
  //             "complement": "",
  //             "neighborhood": "Lagoa",
  //             "city": "Rio de Janeiro"
  //         },
  //         "carrier": {
  //             "Id": "e00dde5a-a469-4e24-ada3-fff8fc7872b6",
  //             "name": "Haytek",
  //             "cutOffTime": "17:00"
  //         }
  //     },
  //     {
  //         "orderList": [
  //             {
  //                 "Id": "91f0f093-a8f0-4aee-ac99-5abad2952ca4",
  //                 "addressId": "2ceb4f33-368a-45ab-85bd-2f67c0951067",
  //                 "carrierId": "84cc9a22-d700-492a-960a-d44103f5e9de",
  //                 "quantity": 54,
  //                 "createdAt": "2024-02-09T10:03:41.138Z"
  //             },
  //             {
  //                 "Id": "ffe98bb7-dd85-457b-a25f-7b4135ec094a",
  //                 "addressId": "2ceb4f33-368a-45ab-85bd-2f67c0951067",
  //                 "carrierId": "84cc9a22-d700-492a-960a-d44103f5e9de",
  //                 "quantity": 49,
  //                 "createdAt": "2024-02-09T05:49:59.484Z"
  //             }
  //         ],
  //         "totalQuantity": 103,
  //         "Boxes": [
  //             {
  //                 "ordersId": [
  //                     "91f0f093-a8f0-4aee-ac99-5abad2952ca4"
  //                 ],
  //                 "itemsQty": 30,
  //                 "type": "G"
  //             },
  //             {
  //                 "ordersId": [
  //                     "91f0f093-a8f0-4aee-ac99-5abad2952ca4"
  //                 ],
  //                 "itemsQty": 10,
  //                 "type": "M"
  //             },
  //             {
  //                 "ordersId": [
  //                     "91f0f093-a8f0-4aee-ac99-5abad2952ca4"
  //                 ],
  //                 "itemsQty": 10,
  //                 "type": "M"
  //             },
  //             {
  //                 "ordersId": [
  //                     "91f0f093-a8f0-4aee-ac99-5abad2952ca4"
  //                 ],
  //                 "itemsQty": 4,
  //                 "type": "P"
  //             },
  //             {
  //                 "ordersId": [
  //                     "ffe98bb7-dd85-457b-a25f-7b4135ec094a"
  //                 ],
  //                 "itemsQty": 30,
  //                 "type": "G"
  //             },
  //             {
  //                 "ordersId": [
  //                     "ffe98bb7-dd85-457b-a25f-7b4135ec094a"
  //                 ],
  //                 "itemsQty": 10,
  //                 "type": "M"
  //             },
  //             {
  //                 "ordersId": [
  //                     "ffe98bb7-dd85-457b-a25f-7b4135ec094a"
  //                 ],
  //                 "itemsQty": 5,
  //                 "type": "P"
  //             },
  //             {
  //                 "ordersId": [
  //                     "ffe98bb7-dd85-457b-a25f-7b4135ec094a"
  //                 ],
  //                 "itemsQty": 4,
  //                 "type": "P"
  //             }
  //         ],
  //         "sendDate": "2024-02-09T05:49:59.484Z",
  //         "adress": {
  //             "Id": "2ceb4f33-368a-45ab-85bd-2f67c0951067",
  //             "state": "RJ",
  //             "zipcode": "21050700",
  //             "street": "Rua Astrei",
  //             "complement": "",
  //             "neighborhood": "Higienópolis",
  //             "city": "Rio de Janeiro"
  //         },
  //         "carrier": {
  //             "Id": "84cc9a22-d700-492a-960a-d44103f5e9de",
  //             "name": "Buslog",
  //             "cutOffTime": "13:15"
  //         }
  //     },
  //     {
  //         "orderList": [
  //             {
  //                 "Id": "d9050c15-d2c3-43a2-82bd-817f006184cf",
  //                 "addressId": "11fbe6ba-e46d-47c0-bb29-f95831fa5131",
  //                 "carrierId": "84cc9a22-d700-492a-960a-d44103f5e9de",
  //                 "quantity": 56,
  //                 "createdAt": "2024-02-09T20:51:34.169Z"
  //             }
  //         ],
  //         "totalQuantity": 56,
  //         "Boxes": [
  //             {
  //                 "ordersId": [
  //                     "d9050c15-d2c3-43a2-82bd-817f006184cf"
  //                 ],
  //                 "itemsQty": 30,
  //                 "type": "G"
  //             },
  //             {
  //                 "ordersId": [
  //                     "d9050c15-d2c3-43a2-82bd-817f006184cf"
  //                 ],
  //                 "itemsQty": 10,
  //                 "type": "M"
  //             },
  //             {
  //                 "ordersId": [
  //                     "d9050c15-d2c3-43a2-82bd-817f006184cf"
  //                 ],
  //                 "itemsQty": 10,
  //                 "type": "M"
  //             },
  //             {
  //                 "ordersId": [
  //                     "d9050c15-d2c3-43a2-82bd-817f006184cf"
  //                 ],
  //                 "itemsQty": 5,
  //                 "type": "P"
  //             },
  //             {
  //                 "ordersId": [
  //                     "d9050c15-d2c3-43a2-82bd-817f006184cf"
  //                 ],
  //                 "itemsQty": 1,
  //                 "type": "P"
  //             }
  //         ],
  //         "sendDate": "2024-02-10T20:51:34.169Z",
  //         "adress": {
  //             "Id": "11fbe6ba-e46d-47c0-bb29-f95831fa5131",
  //             "state": "RJ",
  //             "zipcode": "20770130",
  //             "street": "Rua Piauí",
  //             "complement": "",
  //             "neighborhood": "Todos os Santos",
  //             "city": "Rio de Janeiro"
  //         },
  //         "carrier": {
  //             "Id": "84cc9a22-d700-492a-960a-d44103f5e9de",
  //             "name": "Buslog",
  //             "cutOffTime": "13:15"
  //         }
  //     },
  //     {
  //         "orderList": [
  //             {
  //                 "Id": "2c1a614f-ce39-4d22-8d55-86419da0b937",
  //                 "addressId": "11fbe6ba-e46d-47c0-bb29-f95831fa5131",
  //                 "carrierId": "e00dde5a-a469-4e24-ada3-fff8fc7872b6",
  //                 "quantity": 91,
  //                 "createdAt": "2024-02-09T19:56:30.283Z"
  //             }
  //         ],
  //         "totalQuantity": 91,
  //         "Boxes": [
  //             {
  //                 "ordersId": [
  //                     "2c1a614f-ce39-4d22-8d55-86419da0b937"
  //                 ],
  //                 "itemsQty": 30,
  //                 "type": "G"
  //             },
  //             {
  //                 "ordersId": [
  //                     "2c1a614f-ce39-4d22-8d55-86419da0b937"
  //                 ],
  //                 "itemsQty": 30,
  //                 "type": "G"
  //             },
  //             {
  //                 "ordersId": [
  //                     "2c1a614f-ce39-4d22-8d55-86419da0b937"
  //                 ],
  //                 "itemsQty": 30,
  //                 "type": "G"
  //             },
  //             {
  //                 "ordersId": [
  //                     "2c1a614f-ce39-4d22-8d55-86419da0b937"
  //                 ],
  //                 "itemsQty": 1,
  //                 "type": "P"
  //             }
  //         ],
  //         "sendDate": "2024-02-10T19:56:30.283Z",
  //         "adress": {
  //             "Id": "11fbe6ba-e46d-47c0-bb29-f95831fa5131",
  //             "state": "RJ",
  //             "zipcode": "20770130",
  //             "street": "Rua Piauí",
  //             "complement": "",
  //             "neighborhood": "Todos os Santos",
  //             "city": "Rio de Janeiro"
  //         },
  //         "carrier": {
  //             "Id": "e00dde5a-a469-4e24-ada3-fff8fc7872b6",
  //             "name": "Haytek",
  //             "cutOffTime": "17:00"
  //         }
  //     },
  //     {
  //         "orderList": [
  //             {
  //                 "Id": "005e343f-9601-4544-8ab8-ee741698cd6e",
  //                 "addressId": "2ceb4f33-368a-45ab-85bd-2f67c0951067",
  //                 "carrierId": "c56dc7bc-6167-49de-9e60-37c386660f59",
  //                 "quantity": 71,
  //                 "createdAt": "2024-02-08T09:14:03.189Z"
  //             }
  //         ],
  //         "totalQuantity": 71,
  //         "Boxes": [
  //             {
  //                 "ordersId": [
  //                     "005e343f-9601-4544-8ab8-ee741698cd6e"
  //                 ],
  //                 "itemsQty": 30,
  //                 "type": "G"
  //             },
  //             {
  //                 "ordersId": [
  //                     "005e343f-9601-4544-8ab8-ee741698cd6e"
  //                 ],
  //                 "itemsQty": 30,
  //                 "type": "G"
  //             },
  //             {
  //                 "ordersId": [
  //                     "005e343f-9601-4544-8ab8-ee741698cd6e"
  //                 ],
  //                 "itemsQty": 10,
  //                 "type": "M"
  //             },
  //             {
  //                 "ordersId": [
  //                     "005e343f-9601-4544-8ab8-ee741698cd6e"
  //                 ],
  //                 "itemsQty": 1,
  //                 "type": "P"
  //             }
  //         ],
  //         "sendDate": "2024-02-08T09:14:03.189Z",
  //         "adress": {
  //             "Id": "2ceb4f33-368a-45ab-85bd-2f67c0951067",
  //             "state": "RJ",
  //             "zipcode": "21050700",
  //             "street": "Rua Astrei",
  //             "complement": "",
  //             "neighborhood": "Higienópolis",
  //             "city": "Rio de Janeiro"
  //         },
  //         "carrier": {
  //             "Id": "c56dc7bc-6167-49de-9e60-37c386660f59",
  //             "name": "Tam",
  //             "cutOffTime": "14:00"
  //         }
  //     },
  //     {
  //         "orderList": [
  //             {
  //                 "Id": "4607b224-d41e-42ac-8348-9768f6794ee0",
  //                 "addressId": "2ceb4f33-368a-45ab-85bd-2f67c0951067",
  //                 "carrierId": "84cc9a22-d700-492a-960a-d44103f5e9de",
  //                 "quantity": 12,
  //                 "createdAt": "2024-02-08T02:05:08.832Z"
  //             }
  //         ],
  //         "totalQuantity": 12,
  //         "Boxes": [
  //             {
  //                 "ordersId": [
  //                     "4607b224-d41e-42ac-8348-9768f6794ee0"
  //                 ],
  //                 "itemsQty": 10,
  //                 "type": "M"
  //             },
  //             {
  //                 "ordersId": [
  //                     "4607b224-d41e-42ac-8348-9768f6794ee0"
  //                 ],
  //                 "itemsQty": 2,
  //                 "type": "P"
  //             }
  //         ],
  //         "sendDate": "2024-02-08T02:05:08.832Z",
  //         "adress": {
  //             "Id": "2ceb4f33-368a-45ab-85bd-2f67c0951067",
  //             "state": "RJ",
  //             "zipcode": "21050700",
  //             "street": "Rua Astrei",
  //             "complement": "",
  //             "neighborhood": "Higienópolis",
  //             "city": "Rio de Janeiro"
  //         },
  //         "carrier": {
  //             "Id": "84cc9a22-d700-492a-960a-d44103f5e9de",
  //             "name": "Buslog",
  //             "cutOffTime": "13:15"
  //         }
  //     },
  //     {
  //         "orderList": [
  //             {
  //                 "Id": "b4178a67-db87-454b-96cb-553bee61ad4a",
  //                 "addressId": "9eb197e3-bdf9-4b07-964c-b5b15551a963",
  //                 "carrierId": "0f513c5e-b717-4e41-9df0-213d08ae1be4",
  //                 "quantity": 28,
  //                 "createdAt": "2024-02-08T11:26:51.839Z"
  //             }
  //         ],
  //         "totalQuantity": 28,
  //         "Boxes": [
  //             {
  //                 "ordersId": [
  //                     "b4178a67-db87-454b-96cb-553bee61ad4a"
  //                 ],
  //                 "itemsQty": 10,
  //                 "type": "M"
  //             },
  //             {
  //                 "ordersId": [
  //                     "b4178a67-db87-454b-96cb-553bee61ad4a"
  //                 ],
  //                 "itemsQty": 10,
  //                 "type": "M"
  //             },
  //             {
  //                 "ordersId": [
  //                     "b4178a67-db87-454b-96cb-553bee61ad4a"
  //                 ],
  //                 "itemsQty": 5,
  //                 "type": "P"
  //             },
  //             {
  //                 "ordersId": [
  //                     "b4178a67-db87-454b-96cb-553bee61ad4a"
  //                 ],
  //                 "itemsQty": 3,
  //                 "type": "P"
  //             }
  //         ],
  //         "sendDate": "2024-02-08T11:26:51.839Z",
  //         "adress": {
  //             "Id": "9eb197e3-bdf9-4b07-964c-b5b15551a963",
  //             "state": "RJ",
  //             "zipcode": "22471270",
  //             "street": "Rua Baronesa de Poconé",
  //             "complement": "",
  //             "neighborhood": "Lagoa",
  //             "city": "Rio de Janeiro"
  //         },
  //         "carrier": {
  //             "Id": "0f513c5e-b717-4e41-9df0-213d08ae1be4",
  //             "name": "Gollog",
  //             "cutOffTime": "15:00"
  //         }
  //     },
  //     {
  //         "orderList": [
  //             {
  //                 "Id": "95924daf-8c5b-453c-b99b-601a199b5870",
  //                 "addressId": "11fbe6ba-e46d-47c0-bb29-f95831fa5131",
  //                 "carrierId": "e00dde5a-a469-4e24-ada3-fff8fc7872b6",
  //                 "quantity": 9,
  //                 "createdAt": "2024-02-01T07:26:18.484Z"
  //             }
  //         ],
  //         "totalQuantity": 9,
  //         "Boxes": [
  //             {
  //                 "ordersId": [
  //                     "95924daf-8c5b-453c-b99b-601a199b5870"
  //                 ],
  //                 "itemsQty": 5,
  //                 "type": "P"
  //             },
  //             {
  //                 "ordersId": [
  //                     "95924daf-8c5b-453c-b99b-601a199b5870"
  //                 ],
  //                 "itemsQty": 4,
  //                 "type": "P"
  //             }
  //         ],
  //         "sendDate": "2024-02-01T07:26:18.484Z",
  //         "adress": {
  //             "Id": "11fbe6ba-e46d-47c0-bb29-f95831fa5131",
  //             "state": "RJ",
  //             "zipcode": "20770130",
  //             "street": "Rua Piauí",
  //             "complement": "",
  //             "neighborhood": "Todos os Santos",
  //             "city": "Rio de Janeiro"
  //         },
  //         "carrier": {
  //             "Id": "e00dde5a-a469-4e24-ada3-fff8fc7872b6",
  //             "name": "Haytek",
  //             "cutOffTime": "17:00"
  //         }
  //     },
  //     {
  //         "orderList": [
  //             {
  //                 "Id": "8da5c96a-ae3e-4417-af51-0e326bc3613e",
  //                 "addressId": "9eb197e3-bdf9-4b07-964c-b5b15551a963",
  //                 "carrierId": "0f513c5e-b717-4e41-9df0-213d08ae1be4",
  //                 "quantity": 31,
  //                 "createdAt": "2024-02-04T10:14:03.997Z"
  //             }
  //         ],
  //         "totalQuantity": 31,
  //         "Boxes": [
  //             {
  //                 "ordersId": [
  //                     "8da5c96a-ae3e-4417-af51-0e326bc3613e"
  //                 ],
  //                 "itemsQty": 30,
  //                 "type": "G"
  //             },
  //             {
  //                 "ordersId": [
  //                     "8da5c96a-ae3e-4417-af51-0e326bc3613e"
  //                 ],
  //                 "itemsQty": 1,
  //                 "type": "P"
  //             }
  //         ],
  //         "sendDate": "2024-02-04T10:14:03.997Z",
  //         "adress": {
  //             "Id": "9eb197e3-bdf9-4b07-964c-b5b15551a963",
  //             "state": "RJ",
  //             "zipcode": "22471270",
  //             "street": "Rua Baronesa de Poconé",
  //             "complement": "",
  //             "neighborhood": "Lagoa",
  //             "city": "Rio de Janeiro"
  //         },
  //         "carrier": {
  //             "Id": "0f513c5e-b717-4e41-9df0-213d08ae1be4",
  //             "name": "Gollog",
  //             "cutOffTime": "15:00"
  //         }
  //     },
  //     {
  //         "orderList": [
  //             {
  //                 "Id": "e68c22b2-8d15-4f7c-b7f7-83b6a39ede2c",
  //                 "addressId": "9eb197e3-bdf9-4b07-964c-b5b15551a963",
  //                 "carrierId": "c29d24c6-3fc7-492c-8b44-7d56855ec11e",
  //                 "quantity": 45,
  //                 "createdAt": "2024-02-04T11:23:14.599Z"
  //             }
  //         ],
  //         "totalQuantity": 45,
  //         "Boxes": [
  //             {
  //                 "ordersId": [
  //                     "e68c22b2-8d15-4f7c-b7f7-83b6a39ede2c"
  //                 ],
  //                 "itemsQty": 30,
  //                 "type": "G"
  //             },
  //             {
  //                 "ordersId": [
  //                     "e68c22b2-8d15-4f7c-b7f7-83b6a39ede2c"
  //                 ],
  //                 "itemsQty": 10,
  //                 "type": "M"
  //             },
  //             {
  //                 "ordersId": [
  //                     "e68c22b2-8d15-4f7c-b7f7-83b6a39ede2c"
  //                 ],
  //                 "itemsQty": 5,
  //                 "type": "P"
  //             }
  //         ],
  //         "sendDate": "2024-02-04T11:23:14.599Z",
  //         "adress": {
  //             "Id": "9eb197e3-bdf9-4b07-964c-b5b15551a963",
  //             "state": "RJ",
  //             "zipcode": "22471270",
  //             "street": "Rua Baronesa de Poconé",
  //             "complement": "",
  //             "neighborhood": "Lagoa",
  //             "city": "Rio de Janeiro"
  //         },
  //         "carrier": {
  //             "Id": "c29d24c6-3fc7-492c-8b44-7d56855ec11e",
  //             "name": "Correios",
  //             "cutOffTime": "13:30"
  //         }
  //     },
  //     {
  //         "orderList": [
  //             {
  //                 "Id": "24bc081d-2b0d-4228-b244-cf55a49abeaa",
  //                 "addressId": "2ceb4f33-368a-45ab-85bd-2f67c0951067",
  //                 "carrierId": "c56dc7bc-6167-49de-9e60-37c386660f59",
  //                 "quantity": 28,
  //                 "createdAt": "2024-02-12T23:21:43.674Z"
  //             }
  //         ],
  //         "totalQuantity": 28,
  //         "Boxes": [
  //             {
  //                 "ordersId": [
  //                     "24bc081d-2b0d-4228-b244-cf55a49abeaa"
  //                 ],
  //                 "itemsQty": 10,
  //                 "type": "M"
  //             },
  //             {
  //                 "ordersId": [
  //                     "24bc081d-2b0d-4228-b244-cf55a49abeaa"
  //                 ],
  //                 "itemsQty": 10,
  //                 "type": "M"
  //             },
  //             {
  //                 "ordersId": [
  //                     "24bc081d-2b0d-4228-b244-cf55a49abeaa"
  //                 ],
  //                 "itemsQty": 5,
  //                 "type": "P"
  //             },
  //             {
  //                 "ordersId": [
  //                     "24bc081d-2b0d-4228-b244-cf55a49abeaa"
  //                 ],
  //                 "itemsQty": 3,
  //                 "type": "P"
  //             }
  //         ],
  //         "sendDate": "2024-02-13T23:21:43.674Z",
  //         "adress": {
  //             "Id": "2ceb4f33-368a-45ab-85bd-2f67c0951067",
  //             "state": "RJ",
  //             "zipcode": "21050700",
  //             "street": "Rua Astrei",
  //             "complement": "",
  //             "neighborhood": "Higienópolis",
  //             "city": "Rio de Janeiro"
  //         },
  //         "carrier": {
  //             "Id": "c56dc7bc-6167-49de-9e60-37c386660f59",
  //             "name": "Tam",
  //             "cutOffTime": "14:00"
  //         }
  //     },
  //     {
  //         "orderList": [
  //             {
  //                 "Id": "df50bae1-8077-4143-a970-0e4bc33eea09",
  //                 "addressId": "2ceb4f33-368a-45ab-85bd-2f67c0951067",
  //                 "carrierId": "e00dde5a-a469-4e24-ada3-fff8fc7872b6",
  //                 "quantity": 16,
  //                 "createdAt": "2024-02-12T13:19:37.000Z"
  //             }
  //         ],
  //         "totalQuantity": 16,
  //         "Boxes": [
  //             {
  //                 "ordersId": [
  //                     "df50bae1-8077-4143-a970-0e4bc33eea09"
  //                 ],
  //                 "itemsQty": 10,
  //                 "type": "M"
  //             },
  //             {
  //                 "ordersId": [
  //                     "df50bae1-8077-4143-a970-0e4bc33eea09"
  //                 ],
  //                 "itemsQty": 5,
  //                 "type": "P"
  //             },
  //             {
  //                 "ordersId": [
  //                     "df50bae1-8077-4143-a970-0e4bc33eea09"
  //                 ],
  //                 "itemsQty": 1,
  //                 "type": "P"
  //             }
  //         ],
  //         "sendDate": "2024-02-12T13:19:37.000Z",
  //         "adress": {
  //             "Id": "2ceb4f33-368a-45ab-85bd-2f67c0951067",
  //             "state": "RJ",
  //             "zipcode": "21050700",
  //             "street": "Rua Astrei",
  //             "complement": "",
  //             "neighborhood": "Higienópolis",
  //             "city": "Rio de Janeiro"
  //         },
  //         "carrier": {
  //             "Id": "e00dde5a-a469-4e24-ada3-fff8fc7872b6",
  //             "name": "Haytek",
  //             "cutOffTime": "17:00"
  //         }
  //     },
  //     {
  //         "orderList": [
  //             {
  //                 "Id": "40116134-9abc-4c3f-9251-9859df851453",
  //                 "addressId": "11fbe6ba-e46d-47c0-bb29-f95831fa5131",
  //                 "carrierId": "c56dc7bc-6167-49de-9e60-37c386660f59",
  //                 "quantity": 65,
  //                 "createdAt": "2024-02-12T16:56:46.546Z"
  //             }
  //         ],
  //         "totalQuantity": 65,
  //         "Boxes": [
  //             {
  //                 "ordersId": [
  //                     "40116134-9abc-4c3f-9251-9859df851453"
  //                 ],
  //                 "itemsQty": 30,
  //                 "type": "G"
  //             },
  //             {
  //                 "ordersId": [
  //                     "40116134-9abc-4c3f-9251-9859df851453"
  //                 ],
  //                 "itemsQty": 30,
  //                 "type": "G"
  //             },
  //             {
  //                 "ordersId": [
  //                     "40116134-9abc-4c3f-9251-9859df851453"
  //                 ],
  //                 "itemsQty": 5,
  //                 "type": "P"
  //             }
  //         ],
  //         "sendDate": "2024-02-13T16:56:46.546Z",
  //         "adress": {
  //             "Id": "11fbe6ba-e46d-47c0-bb29-f95831fa5131",
  //             "state": "RJ",
  //             "zipcode": "20770130",
  //             "street": "Rua Piauí",
  //             "complement": "",
  //             "neighborhood": "Todos os Santos",
  //             "city": "Rio de Janeiro"
  //         },
  //         "carrier": {
  //             "Id": "c56dc7bc-6167-49de-9e60-37c386660f59",
  //             "name": "Tam",
  //             "cutOffTime": "14:00"
  //         }
  //     },
  //     {
  //         "orderList": [
  //             {
  //                 "Id": "7ba45707-773c-45a4-89c2-beb193d821f9",
  //                 "addressId": "11fbe6ba-e46d-47c0-bb29-f95831fa5131",
  //                 "carrierId": "e00dde5a-a469-4e24-ada3-fff8fc7872b6",
  //                 "quantity": 58,
  //                 "createdAt": "2024-02-12T19:39:07.839Z"
  //             }
  //         ],
  //         "totalQuantity": 58,
  //         "Boxes": [
  //             {
  //                 "ordersId": [
  //                     "7ba45707-773c-45a4-89c2-beb193d821f9"
  //                 ],
  //                 "itemsQty": 30,
  //                 "type": "G"
  //             },
  //             {
  //                 "ordersId": [
  //                     "7ba45707-773c-45a4-89c2-beb193d821f9"
  //                 ],
  //                 "itemsQty": 10,
  //                 "type": "M"
  //             },
  //             {
  //                 "ordersId": [
  //                     "7ba45707-773c-45a4-89c2-beb193d821f9"
  //                 ],
  //                 "itemsQty": 10,
  //                 "type": "M"
  //             },
  //             {
  //                 "ordersId": [
  //                     "7ba45707-773c-45a4-89c2-beb193d821f9"
  //                 ],
  //                 "itemsQty": 5,
  //                 "type": "P"
  //             },
  //             {
  //                 "ordersId": [
  //                     "7ba45707-773c-45a4-89c2-beb193d821f9"
  //                 ],
  //                 "itemsQty": 3,
  //                 "type": "P"
  //             }
  //         ],
  //         "sendDate": "2024-02-13T19:39:07.839Z",
  //         "adress": {
  //             "Id": "11fbe6ba-e46d-47c0-bb29-f95831fa5131",
  //             "state": "RJ",
  //             "zipcode": "20770130",
  //             "street": "Rua Piauí",
  //             "complement": "",
  //             "neighborhood": "Todos os Santos",
  //             "city": "Rio de Janeiro"
  //         },
  //         "carrier": {
  //             "Id": "e00dde5a-a469-4e24-ada3-fff8fc7872b6",
  //             "name": "Haytek",
  //             "cutOffTime": "17:00"
  //         }
  //     },
  //     {
  //         "orderList": [
  //             {
  //                 "Id": "1f59a0d4-cc2c-4d68-8c73-a4dbf4e8181f",
  //                 "addressId": "2ceb4f33-368a-45ab-85bd-2f67c0951067",
  //                 "carrierId": "c29d24c6-3fc7-492c-8b44-7d56855ec11e",
  //                 "quantity": 59,
  //                 "createdAt": "2024-02-11T18:00:55.810Z"
  //             }
  //         ],
  //         "totalQuantity": 59,
  //         "Boxes": [
  //             {
  //                 "ordersId": [
  //                     "1f59a0d4-cc2c-4d68-8c73-a4dbf4e8181f"
  //                 ],
  //                 "itemsQty": 30,
  //                 "type": "G"
  //             },
  //             {
  //                 "ordersId": [
  //                     "1f59a0d4-cc2c-4d68-8c73-a4dbf4e8181f"
  //                 ],
  //                 "itemsQty": 10,
  //                 "type": "M"
  //             },
  //             {
  //                 "ordersId": [
  //                     "1f59a0d4-cc2c-4d68-8c73-a4dbf4e8181f"
  //                 ],
  //                 "itemsQty": 10,
  //                 "type": "M"
  //             },
  //             {
  //                 "ordersId": [
  //                     "1f59a0d4-cc2c-4d68-8c73-a4dbf4e8181f"
  //                 ],
  //                 "itemsQty": 5,
  //                 "type": "P"
  //             },
  //             {
  //                 "ordersId": [
  //                     "1f59a0d4-cc2c-4d68-8c73-a4dbf4e8181f"
  //                 ],
  //                 "itemsQty": 4,
  //                 "type": "P"
  //             }
  //         ],
  //         "sendDate": "2024-02-12T18:00:55.810Z",
  //         "adress": {
  //             "Id": "2ceb4f33-368a-45ab-85bd-2f67c0951067",
  //             "state": "RJ",
  //             "zipcode": "21050700",
  //             "street": "Rua Astrei",
  //             "complement": "",
  //             "neighborhood": "Higienópolis",
  //             "city": "Rio de Janeiro"
  //         },
  //         "carrier": {
  //             "Id": "c29d24c6-3fc7-492c-8b44-7d56855ec11e",
  //             "name": "Correios",
  //             "cutOffTime": "13:30"
  //         }
  //     },
  //     {
  //         "orderList": [
  //             {
  //                 "Id": "57097ece-dffa-4b3d-b8e0-bbf01a6d7966",
  //                 "addressId": "11fbe6ba-e46d-47c0-bb29-f95831fa5131",
  //                 "carrierId": "c29d24c6-3fc7-492c-8b44-7d56855ec11e",
  //                 "quantity": 66,
  //                 "createdAt": "2024-02-11T23:32:39.082Z"
  //             }
  //         ],
  //         "totalQuantity": 66,
  //         "Boxes": [
  //             {
  //                 "ordersId": [
  //                     "57097ece-dffa-4b3d-b8e0-bbf01a6d7966"
  //                 ],
  //                 "itemsQty": 30,
  //                 "type": "G"
  //             },
  //             {
  //                 "ordersId": [
  //                     "57097ece-dffa-4b3d-b8e0-bbf01a6d7966"
  //                 ],
  //                 "itemsQty": 30,
  //                 "type": "G"
  //             },
  //             {
  //                 "ordersId": [
  //                     "57097ece-dffa-4b3d-b8e0-bbf01a6d7966"
  //                 ],
  //                 "itemsQty": 5,
  //                 "type": "P"
  //             },
  //             {
  //                 "ordersId": [
  //                     "57097ece-dffa-4b3d-b8e0-bbf01a6d7966"
  //                 ],
  //                 "itemsQty": 1,
  //                 "type": "P"
  //             }
  //         ],
  //         "sendDate": "2024-02-12T23:32:39.082Z",
  //         "adress": {
  //             "Id": "11fbe6ba-e46d-47c0-bb29-f95831fa5131",
  //             "state": "RJ",
  //             "zipcode": "20770130",
  //             "street": "Rua Piauí",
  //             "complement": "",
  //             "neighborhood": "Todos os Santos",
  //             "city": "Rio de Janeiro"
  //         },
  //         "carrier": {
  //             "Id": "c29d24c6-3fc7-492c-8b44-7d56855ec11e",
  //             "name": "Correios",
  //             "cutOffTime": "13:30"
  //         }
  //     },
  //     {
  //         "orderList": [
  //             {
  //                 "Id": "b7b99a45-3fba-4ac3-8f70-12d1ebbeb3e0",
  //                 "addressId": "11fbe6ba-e46d-47c0-bb29-f95831fa5131",
  //                 "carrierId": "0f513c5e-b717-4e41-9df0-213d08ae1be4",
  //                 "quantity": 61,
  //                 "createdAt": "2024-02-15T02:24:33.829Z"
  //             }
  //         ],
  //         "totalQuantity": 61,
  //         "Boxes": [
  //             {
  //                 "ordersId": [
  //                     "b7b99a45-3fba-4ac3-8f70-12d1ebbeb3e0"
  //                 ],
  //                 "itemsQty": 30,
  //                 "type": "G"
  //             },
  //             {
  //                 "ordersId": [
  //                     "b7b99a45-3fba-4ac3-8f70-12d1ebbeb3e0"
  //                 ],
  //                 "itemsQty": 30,
  //                 "type": "G"
  //             },
  //             {
  //                 "ordersId": [
  //                     "b7b99a45-3fba-4ac3-8f70-12d1ebbeb3e0"
  //                 ],
  //                 "itemsQty": 1,
  //                 "type": "P"
  //             }
  //         ],
  //         "sendDate": "2024-02-15T02:24:33.829Z",
  //         "adress": {
  //             "Id": "11fbe6ba-e46d-47c0-bb29-f95831fa5131",
  //             "state": "RJ",
  //             "zipcode": "20770130",
  //             "street": "Rua Piauí",
  //             "complement": "",
  //             "neighborhood": "Todos os Santos",
  //             "city": "Rio de Janeiro"
  //         },
  //         "carrier": {
  //             "Id": "0f513c5e-b717-4e41-9df0-213d08ae1be4",
  //             "name": "Gollog",
  //             "cutOffTime": "15:00"
  //         }
  //     },
  //     {
  //         "orderList": [
  //             {
  //                 "Id": "2ab059f7-a603-40a8-93c4-8804bf4e271d",
  //                 "addressId": "11fbe6ba-e46d-47c0-bb29-f95831fa5131",
  //                 "carrierId": "c29d24c6-3fc7-492c-8b44-7d56855ec11e",
  //                 "quantity": 63,
  //                 "createdAt": "2024-02-02T12:22:24.928Z"
  //             }
  //         ],
  //         "totalQuantity": 63,
  //         "Boxes": [
  //             {
  //                 "ordersId": [
  //                     "2ab059f7-a603-40a8-93c4-8804bf4e271d"
  //                 ],
  //                 "itemsQty": 30,
  //                 "type": "G"
  //             },
  //             {
  //                 "ordersId": [
  //                     "2ab059f7-a603-40a8-93c4-8804bf4e271d"
  //                 ],
  //                 "itemsQty": 30,
  //                 "type": "G"
  //             },
  //             {
  //                 "ordersId": [
  //                     "2ab059f7-a603-40a8-93c4-8804bf4e271d"
  //                 ],
  //                 "itemsQty": 3,
  //                 "type": "P"
  //             }
  //         ],
  //         "sendDate": "2024-02-02T12:22:24.928Z",
  //         "adress": {
  //             "Id": "11fbe6ba-e46d-47c0-bb29-f95831fa5131",
  //             "state": "RJ",
  //             "zipcode": "20770130",
  //             "street": "Rua Piauí",
  //             "complement": "",
  //             "neighborhood": "Todos os Santos",
  //             "city": "Rio de Janeiro"
  //         },
  //         "carrier": {
  //             "Id": "c29d24c6-3fc7-492c-8b44-7d56855ec11e",
  //             "name": "Correios",
  //             "cutOffTime": "13:30"
  //         }
  //     },
  //     {
  //         "orderList": [
  //             {
  //                 "Id": "8772fb56-a7aa-4b02-8ce0-65930968f8bf",
  //                 "addressId": "9eb197e3-bdf9-4b07-964c-b5b15551a963",
  //                 "carrierId": "e00dde5a-a469-4e24-ada3-fff8fc7872b6",
  //                 "quantity": 85,
  //                 "createdAt": "2024-02-02T02:10:39.359Z"
  //             }
  //         ],
  //         "totalQuantity": 85,
  //         "Boxes": [
  //             {
  //                 "ordersId": [
  //                     "8772fb56-a7aa-4b02-8ce0-65930968f8bf"
  //                 ],
  //                 "itemsQty": 30,
  //                 "type": "G"
  //             },
  //             {
  //                 "ordersId": [
  //                     "8772fb56-a7aa-4b02-8ce0-65930968f8bf"
  //                 ],
  //                 "itemsQty": 30,
  //                 "type": "G"
  //             },
  //             {
  //                 "ordersId": [
  //                     "8772fb56-a7aa-4b02-8ce0-65930968f8bf"
  //                 ],
  //                 "itemsQty": 10,
  //                 "type": "M"
  //             },
  //             {
  //                 "ordersId": [
  //                     "8772fb56-a7aa-4b02-8ce0-65930968f8bf"
  //                 ],
  //                 "itemsQty": 10,
  //                 "type": "M"
  //             },
  //             {
  //                 "ordersId": [
  //                     "8772fb56-a7aa-4b02-8ce0-65930968f8bf"
  //                 ],
  //                 "itemsQty": 5,
  //                 "type": "P"
  //             }
  //         ],
  //         "sendDate": "2024-02-02T02:10:39.359Z",
  //         "adress": {
  //             "Id": "9eb197e3-bdf9-4b07-964c-b5b15551a963",
  //             "state": "RJ",
  //             "zipcode": "22471270",
  //             "street": "Rua Baronesa de Poconé",
  //             "complement": "",
  //             "neighborhood": "Lagoa",
  //             "city": "Rio de Janeiro"
  //         },
  //         "carrier": {
  //             "Id": "e00dde5a-a469-4e24-ada3-fff8fc7872b6",
  //             "name": "Haytek",
  //             "cutOffTime": "17:00"
  //         }
  //     }
    
  // ]
  }
}
