import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { HttpService } from '@nestjs/axios';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrdersService {
  constructor(private readonly httpService: HttpService) {}

  async findAll(): Promise<CreateOrderDto[]> {

    const createOrderDto: CreateOrderDto[] = await this.httpService.axiosRef.get<CreateOrderDto>(process.env.ORDER_API_URL)
    .then((result)=>{
      console.log("Consultando api externa de orders")
      return result.data
    }).catch((error) => { 
      throw new HttpException({
        status: HttpStatus.NOT_FOUND,
        error: 'External Orders API does not responde',
      }, HttpStatus.FORBIDDEN, {
        cause: error
      });
      return undefined;
    });
    return createOrderDto;   
  }
}
