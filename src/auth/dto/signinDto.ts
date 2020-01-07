import { IsNotEmpty, IsString } from 'class-validator';
export class SigninDto {
  @IsNotEmpty()
  @IsString()
  usuario: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
