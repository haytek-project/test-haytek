import { IsNotEmpty, IsNumber, IsString, isNotEmpty } from "@nestjs/class-validator";

export class CreateBoxDto {

    @IsNotEmpty()
    @IsString()
    readonly type: string;

    @IsNotEmpty()
    @IsNumber()
    readonly maxQuantity: Number

}


// {
//     "type": "P",
//     "maxQuantity": "5"
// }