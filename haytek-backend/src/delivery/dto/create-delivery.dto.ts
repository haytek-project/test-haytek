import { IsArray, IsDate, ValidateNested } from "@nestjs/class-validator";
import { Expose, Type } from '@nestjs/class-transformer';
import { CreateAdressDto } from "src/adresses/dto/create-adress.dto";
import { Adress } from "src/adresses/entities/adress.entity";
import { CreateBoxDto } from "src/boxes/dto/create-box.dto";
import { CreateCarrierDto } from "src/carriers/dto/create-carrier.dto";
import { CreateOrderDto } from "src/orders/dto/create-order.dto";
import { IsNotEmpty } from "class-validator";
import { UsedBoxDto } from "./usedBox.dto";

class OrdersObject {
//   order: CreateOrderDto;
//     // boxes: CreateBoxDto;
//       //-Tipo
//       //-Qtd de itens na caixa
//       //-Cod dos pedidos contidos na caixa ( o mesmo pode aparecer em mais de uma caixa )

//     // constructor(carrier: CreateCarrierDto, adress: CreateAdressDto, boxes: CreateBoxDto){
//     //   this.adress = adress
//     //   this.carrier = carrier
//     //   this.boxes = boxes
//     // }
}

export class CreateDeliveryDto{
  sendDate: Date;
  carrier: CreateCarrierDto;
  adress: CreateAdressDto;
  orderList: CreateBoxDto[] = []
  totalQuantity: Number = 0
  Boxes: UsedBoxDto[] = []

  // @IsArray()
  // @IsNotEmpty()
  // @ValidateNested({ each: true })
  // @Type(() => OrdersObject)
  // orderList: OrdersObject[];
}
