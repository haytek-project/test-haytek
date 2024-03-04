import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { CreateCarrierDto } from './dto/create-carrier.dto';
import { Observable, map } from 'rxjs';

@Injectable()
export class CarriersService {
  constructor(private readonly httpService : HttpService){}

  async findAll(): Promise<CreateCarrierDto[]> {

    const createCarrierDto: CreateCarrierDto[] = await this.httpService.axiosRef.get<CreateCarrierDto>(process.env.CARRIER_API_URL)
    .then((result)=>{
      return result.data
    }).catch((error) => {
      console.log(error)
      return undefined
    }); 
    return createCarrierDto;     

  } 

}
