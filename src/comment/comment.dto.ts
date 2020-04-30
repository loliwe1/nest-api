import { IsString, IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CommentDto {
  @ApiProperty()
  @IsInt()
  id: number;

  @ApiProperty()
  @IsString()
  title: string;

  @ApiProperty()
  @IsInt()
  cardId: number;
}

export class UpdateCommentDto {
  @ApiProperty()
  @IsInt()
  id: number;

  @ApiProperty()
  @IsString()
  title: string;
}

export class CreateCommentDto {
  @ApiProperty()
  @IsString()
  title: string;

  @ApiProperty()
  @IsInt()
  cardId: number;
}

export class DeleteCommentDto {
  @ApiProperty()
  @IsInt()
  id: number;
}
