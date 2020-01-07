import {
  Controller,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { SignupDto, SigninDto } from './dto';
import { AuthService } from '../auth/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post()
  async signup(@Body() signupDto: SignupDto): Promise<void> {
    return this.authService.signup(signupDto);
  }
  @Post()
  @UsePipes(ValidationPipe)
  async sigin(@Body() signinDto: SigninDto) {
    return this.authService.signin(signinDto);
  }
}
