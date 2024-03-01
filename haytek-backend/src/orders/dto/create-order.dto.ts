import { IsDate, IsNotEmpty, IsString, Min } from "@nestjs/class-validator";

export class CreateOrderDto{

    @IsString()
    @IsNotEmpty()
    readonly id: string;

    @IsString()
    @IsNotEmpty()
    readonly addressId: string;

    @IsString()
    @IsNotEmpty()
    readonly carrierId: string;

    @IsString()
    @IsNotEmpty()
    @Min(1)
    readonly quantity: number;

    @IsDate()
    @IsNotEmpty()
    readonly createdAt: Date;
}


// {
//     "Id": "64330f70-f2dc-4f61-93e1-b89a404460b9",
//     "addressId": "2ceb4f33-368a-45ab-85bd-2f67c0951067",
//     "carrierId": "e00dde5a-a469-4e24-ada3-fff8fc7872b6",
//     "quantity": 9,
//     "createdAt": "2024-02-10T16:46:04.151Z"
// },
