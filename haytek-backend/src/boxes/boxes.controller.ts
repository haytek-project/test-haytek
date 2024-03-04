import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BoxesService } from './boxes.service';
import { CreateBoxDto } from './dto/create-box.dto';
import { UpdateBoxDto } from './dto/update-box.dto';
import { AxiosResponse } from 'axios';

@Controller('boxes')
export class BoxesController {
  constructor(private readonly boxesService: BoxesService) {}

  @Get()
  async findAll(): Promise<CreateBoxDto[]> {
    return await this.boxesService.findAll();
  }

}
