import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AdressesService } from './adresses.service';
import { AxiosResponse } from 'axios';
import { CreateAdressDto } from './dto/create-adress.dto';

@Controller('adresses')
export class AdressesController {
  constructor(private readonly adressesService: AdressesService) {}

  @Get()
  async findAll(): Promise<CreateAdressDto[]>{
    return await this.adressesService.findAll();
  }
}
