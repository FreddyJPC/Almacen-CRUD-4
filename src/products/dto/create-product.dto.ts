import { ApiProperty } from "@nestjs/swagger";

export class CreateProductDto {
    @ApiProperty({ example: 'John dadDoe' })
    name: string;

    @ApiProperty({ example: 'sdfg' })
    quantity: string;

    @ApiProperty({ example: 'Develgodadper' })
    createdAt: string;
}
