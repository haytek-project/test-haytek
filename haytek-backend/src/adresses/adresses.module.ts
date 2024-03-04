import { Module } from '@nestjs/common';
import { AdressesService } from './adresses.service';
import { AdressesController } from './adresses.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule.register({
    timeout: 5000,
    maxRedirects: 5,
  }),],
  controllers: [AdressesController],
  providers: [AdressesService],
  exports: [AdressesService]
})
export class AdressesModule {}
