import { Module } from '@nestjs/common';
import { CarriersService } from './carriers.service';
import { CarriersController } from './carriers.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule.register({
    timeout: 5000,
    maxRedirects: 5,
  }),],
  controllers: [CarriersController],
  providers: [CarriersService],
  exports: [CarriersService]
})
export class CarriersModule {}
