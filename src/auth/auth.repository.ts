import { Repository, EntityRepository, getConnection } from 'typeorm';
import { Usuarios } from '../usuarios/usuarios.entity';
import { SignupDto } from './dto';
import { RoleRepository } from '../role/role.repository';
import { Role } from '../role/role.entity';
import { RoleType } from '../role/roletype.enum';
import { UsuariosDetails } from '../usuarios/usuarios.details.entity';
import { genSalt, hash } from 'bcryptjs';

@EntityRepository(Usuarios)
export class AuthRepository extends Repository<Usuarios> {
  async signup(signupDto: SignupDto) {
    const { usuario, Email, password } = signupDto;
    const user = new Usuarios();

    user.usuario = usuario;
    user.Email = Email;

    const roleRepository: RoleRepository = await getConnection().getRepository(
      Role,
    );

    const defaultRole: Role = await roleRepository.findOne({
      where: { name: RoleType.GENERAL },
    });

    user.roles = [defaultRole];
    const details = new UsuariosDetails();
    user.details = details;

    const salt = await genSalt(10);
    user.password = await hash(password, salt);

    await user.save();
  }
}
