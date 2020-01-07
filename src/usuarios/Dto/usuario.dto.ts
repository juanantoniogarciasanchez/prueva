import { IsNotEmpty } from 'class-validator';
import { RoleType } from '../../role/roletype.enum';
import { UsuariosDetails } from '../usuarios.details.entity';

export class UsuarioDto {
  @IsNotEmpty()
  Id_usuario: number;

  @IsNotEmpty()
  usuario: string;

  @IsNotEmpty()
  Email: string;

  @IsNotEmpty()
  roles: RoleType[];

  @IsNotEmpty()
  details: UsuariosDetails;
}
