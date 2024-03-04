import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { HttpService } from '@nestjs/axios';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrdersService {
  constructor(private readonly httpService: HttpService) {}

  async findAll(): Promise<CreateOrderDto[]> {

    const createOrderDto: CreateOrderDto[] = await this.httpService.axiosRef.get<CreateOrderDto>(process.env.ORDER_API_URL)
    .then((result)=>{
      return result.data
    }).catch((error) => {
      console.log(error)
      return undefined
    });  
    return createOrderDto;   
  }
}
