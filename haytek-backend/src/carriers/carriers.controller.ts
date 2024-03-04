import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CarriersService } from './carriers.service';
import { CreateCarrierDto } from './dto/create-carrier.dto';
import { UpdateCarrierDto } from './dto/update-carrier.dto';

@Controller('carriers')
export class CarriersController {
  constructor(private readonly carriersService: CarriersService) {}

  @Get()
  async findAll(): Promise<CreateCarrierDto[]>  {
    return await this.carriersService.findAll();
  }


}
