import { IsString, IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ColumnDto {
  @ApiProperty()
  @IsInt()
  id: number;

  @ApiProperty()
  @IsString()
  title: string;
}

export class CreateColumnDto {
  @ApiProperty()
  @IsString()
  title: string;
}

export class UpdateColumnDto {
  @ApiProperty()
  @IsInt()
  id: number;

  @ApiProperty()
  @IsString()
  title: string;

}

export class DeleteColumnDto {
  @ApiProperty()
  @IsInt()
  id: number;

}
