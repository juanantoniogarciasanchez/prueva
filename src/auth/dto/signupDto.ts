import { IsNotEmpty, IsString } from 'class-validator';
export class SignupDto {
  @IsNotEmpty()
  @IsString()
  usuario: string;

  @IsNotEmpty()
  @IsString()
  Email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
