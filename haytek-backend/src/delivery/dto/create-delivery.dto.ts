import { CreateAdressDto } from "src/adresses/dto/create-adress.dto";
import { Adress } from "src/adresses/entities/adress.entity";
import { CreateBoxDto } from "src/boxes/dto/create-box.dto";
import { CreateCarrierDto } from "src/carriers/dto/create-carrier.dto";
import { CreateOrderDto } from "src/orders/dto/create-order.dto";

export class CreateDeliveryDto {

    sendDate: Date;
    carrier: CreateCarrierDto;
    adress: CreateAdressDto;
    orders: CreateOrderDto;
    // boxes: CreateBoxDto;
      //-Tipo
      //-Qtd de itens na caixa
      //-Cod dos pedidos contidos na caixa ( o mesmo pode aparecer em mais de uma caixa )

    // constructor(carrier: CreateCarrierDto, adress: CreateAdressDto, boxes: CreateBoxDto){
    //   this.adress = adress
    //   this.carrier = carrier
    //   this.boxes = boxes
    // }
}
