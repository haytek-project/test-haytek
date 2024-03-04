import { IsNotEmpty, IsString } from "@nestjs/class-validator";

export class CreateAdressDto {
    @IsString()
    @IsNotEmpty()
    readonly Id: string;
    
    @IsString()
    @IsNotEmpty()
    readonly state: string;

    @IsString()
    @IsNotEmpty()
    readonly zipcode: string;

    @IsString()
    @IsNotEmpty()
    readonly street: string;

    @IsString()
    @IsNotEmpty()
    readonly complement: string;

    @IsString()
    @IsNotEmpty()
    readonly neighborhood: string;
    
    @IsString()
    @IsNotEmpty()
    readonly city: string;


}


// "Id": "2ceb4f33-368a-45ab-85bd-2f67c0951067",
// "state": "RJ",
// "zipcode": "21050700",
// "street": "Rua Astrei",
// "complement": "",
// "neighborhood": "Higienópolis",
// "city": "Rio de Janeiro"