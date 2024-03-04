import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { CreateBoxDto } from './dto/create-box.dto';

@Injectable()
export class BoxesService {

  constructor(private readonly httpService: HttpService){}

  async findAll(): Promise<CreateBoxDto[]> {
    const createBoxDto: CreateBoxDto[] = await this.httpService.axiosRef.get<CreateBoxDto>(process.env.BOX_API_URL)
    .then((result)=>{
      console.log("Consultando api externa de boxes")
      return result.data
    }).catch((error) => {
      console.log(error)
      return undefined
    });  
    return createBoxDto;
  }
}
