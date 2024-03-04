import { Inject, Injectable } from '@nestjs/common';
import { OrdersService } from './orders/orders.service';
import { Order } from './orders/entities/order.entity';
import { AdressesService } from './adresses/adresses.service';
import { BoxesService } from './boxes/boxes.service';
import { CarriersService } from './carriers/carriers.service';
import { CreateAdressDto } from './adresses/dto/create-adress.dto';

@Injectable()
export class AppService {

  getHello(): string {

    return 'Haytec Backend Test!';
  }
}
