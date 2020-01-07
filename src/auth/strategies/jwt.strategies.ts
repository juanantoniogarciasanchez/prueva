import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { AuthRepository } from '../auth.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { IJwtPayLoad } from '../jwt-payload.interface';
import { UnauthorizedException, Injectable } from '@nestjs/common';
import { Configuration } from '../../config/config.keys';
import { ConfigService } from '../../config/config.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly configService: ConfigService,
    @InjectRepository(AuthRepository)
    private readonly authRepository: AuthRepository,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrkey: configService.get(Configuration.JWT_SECRET),
    });
  }

  async validate(payload: IJwtPayLoad) {
    const { usuario } = payload;
    const user = await this.authRepository.findOne({
      where: { usuario, status: 'ACTIVE' },
    });

    if (!user) {
      throw new UnauthorizedException();
    }

    return payload;
  }
}
