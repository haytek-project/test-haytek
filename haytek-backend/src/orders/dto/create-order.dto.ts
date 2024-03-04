import { IsDate, IsNotEmpty, IsString, Min } from "@nestjs/class-validator";

export class CreateOrderDto{

    @IsString()
    @IsNotEmpty()
    readonly Id: string;

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