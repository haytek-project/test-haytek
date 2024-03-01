import { Module } from '@nestjs/common';
import { DeliveryService } from './delivery.service';
import { DeliveryController } from './delivery.controller';
import { HttpModule } from '@nestjs/axios';
import { AdressesModule } from 'src/adresses/adresses.module';
import { BoxesModule } from 'src/boxes/boxes.module';
import { CarriersModule } from 'src/carriers/carriers.module';
import { OrdersModule } from 'src/orders/orders.module';

@Module({
  imports: [
        HttpModule.register({ timeout: 5000,  maxRedirects: 5,}),AdressesModule, BoxesModule, CarriersModule, OrdersModule],
  controllers: [DeliveryController],
  providers: [DeliveryService],
})
export class DeliveryModule {}
