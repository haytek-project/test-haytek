import { IsNotEmpty, IsString } from "@nestjs/class-validator";

export class CreateCarrierDto {
    @IsString()
    @IsNotEmpty()
    readonly Id: string;
    
    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @IsString()
    @IsNotEmpty()
    readonly cutOffTime: string
}

// {
//     "Id": "0f513c5e-b717-4e41-9df0-213d08ae1be4",
//     "name": "Gollog",
//     "cutOffTime": "15:00"
// }