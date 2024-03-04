import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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
      console.log("Consultando api externa de carrier")
      return result.data
    }).catch((error) => { 
      throw new HttpException({
        status: HttpStatus.NOT_FOUND,
        error: 'External Carriers API does not responde',
      }, HttpStatus.FORBIDDEN, {
        cause: error
      });
      return undefined;
    });
    return createCarrierDto;     

  } 

}
