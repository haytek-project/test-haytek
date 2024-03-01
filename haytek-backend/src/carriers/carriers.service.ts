import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { CreateCarrierDto } from './dto/create-carrier.dto';
import { Observable, map } from 'rxjs';

@Injectable()
export class CarriersService {
  constructor(private readonly httpService : HttpService){}

  async findAll(): Promise<CreateCarrierDto[]> {
    const createCarrierDto: CreateCarrierDto[] = await this.httpService.axiosRef.get<CreateCarrierDto>('https://stg-api.haytek.com.br/api/v1/test-haytek-api/carriers')
    .then((result)=>{
      return result.data
    }).catch((error) => {
      console.log(error)
      return undefined
    }); 
    return createCarrierDto; 
  } 

  // getVehicleMake(): Observable<AxiosResponse<any>> {
  //   return  this.httpService.get('https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json')
  //     .pipe(map(response => response.data.Results.map(result => result.Make_Name));
  // }

}
