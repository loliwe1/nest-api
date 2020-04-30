import { IsString, IsEmail, MinLength, MaxLength } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @MinLength(6)
  @MaxLength(20)
  password: string;

  @IsString()
  confirm: string;
}