import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { CreateAdressDto } from './dto/create-adress.dto';

@Injectable()
export class AdressesService {
  constructor(private readonly httpService: HttpService){}

  async findAll(): Promise<CreateAdressDto[]> {

    const createAdressDto: CreateAdressDto[] = await this.httpService.axiosRef.
    get<CreateAdressDto>('https://stg-api.haytek.com.br/api/v1/test-haytek-api/adresses')
    .then((result)=>{
      return result.data
    }).catch((error) => {
      console.log(error)
      return undefined
    }); 
    return createAdressDto
  }
}
