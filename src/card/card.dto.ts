import { IsString, IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CardDto {
  @ApiProperty()
  @IsInt()
  id: number;

  @ApiProperty()
  @IsString()
  title: string;

  @ApiProperty()
  @IsString()
  description?: string;

  @ApiProperty()
  @IsInt()
  columnId: number;
}

export class UpdateCardDto {

  @ApiProperty()
  @IsInt()
  id: number;

  @ApiProperty()
  @IsString()
  title: string;

  @ApiProperty()
  @IsString()
  description?: string;

  @ApiProperty()
  @IsInt()
  columnId: number;
}

export class CreateCardDto {
  @ApiProperty()
  @IsString()
  title: string;

  @ApiProperty()
  @IsString()
  description?: string;

  @ApiProperty()
  @IsInt()
  columnId: number;
}

export class DeleteCardDto {
  @ApiProperty()
  @IsInt()
  id: number;
}
