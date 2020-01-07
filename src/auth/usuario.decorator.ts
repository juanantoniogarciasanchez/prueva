import { createParamDecorator } from '@nestjs/common';
import { UsuarioDto } from '../usuarios/Dto/usuario.dto';

export const GetUsuario = createParamDecorator(
  (data, req): UsuarioDto => {
    return req.usuario;
  },
);
