import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { CreateAdressDto } from './dto/create-adress.dto';

@Injectable()
export class AdressesService {
  constructor(private readonly httpService: HttpService){}

  async findAll(): Promise<CreateAdressDto[]> {

    const createAdressDto: CreateAdressDto[] = await this.httpService.axiosRef.
    get<CreateAdressDto>(process.env.ADRESS_API_URL)
    .then((result)=>{
      console.log("Consultando api externa de adress")
      return result.data
    }).catch((error) => { 
        throw new HttpException({
          status: HttpStatus.NOT_FOUND,
          error: 'External Address API does not responde',
        }, HttpStatus.FORBIDDEN, {
          cause: error
        });
      return undefined
    }); 
    return createAdressDto
  }
}
