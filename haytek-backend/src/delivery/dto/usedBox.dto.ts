import { CreateCarrierDto } from "src/carriers/dto/create-carrier.dto";

export class UsedBoxDto {

    type: String;
    itemsQty: number;
    ordersId: string[] = []
    // menu_names: Array<string>;

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
