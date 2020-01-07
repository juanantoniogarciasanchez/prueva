import { RoleType } from '../role/roletype.enum';

export interface IJwtPayLoad {
  Id_usuario: number;
  usuario: string;
  Email: string;
  role: RoleType[];
  iat?: Date;
}
