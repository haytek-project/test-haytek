import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule.register({
    timeout: 5000,
    maxRedirects: 5,
  }),],
  controllers: [OrdersController],
  providers: [OrdersService],
  exports: [OrdersService]
})
export class OrdersModule {}
