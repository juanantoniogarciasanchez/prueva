import {
  Injectable,
  ConflictException,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthRepository } from './auth.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { SignupDto, SigninDto } from './dto';
import { Usuarios } from '../usuarios/usuarios.entity';
import { IJwtPayLoad } from './jwt-payload.interface';
import { RoleType } from '../role/roletype.enum';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(AuthRepository)
    private readonly authRepository: AuthRepository,
    private readonly jwtService: JwtService,
  ) {}

  async signup(signupDto: SignupDto): Promise<void> {
    const { usuario, Email } = signupDto;
    const UsuarioExiste = await this.authRepository.findOne({
      where: [{ usuario }, { Email }],
    });

    if (UsuarioExiste) {
      throw new ConflictException('Usuario o correo existe ');
    }

    return this.authRepository.signup(signupDto);
  }

  async signin(signinDto: SigninDto): Promise<{ token: string }> {
    const { usuario, password } = signinDto;
    const user: Usuarios = await this.authRepository.findOne({
      where: { usuario },
    });

    if (!user) {
      throw new UnauthorizedException('credenciales invalidas');
    }

    const payload: IJwtPayLoad = {
      Id_usuario: user.Id_usuario,
      Email: user.Email,
      usuario: user.usuario,
      role: user.roles.map(r => r.Nombre as RoleType),
    };

    const token = await this.jwtService.sign(payload);

    return { token };
  }
}
