import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { UsuariosRepository } from './usuarios.repository';
import { InjectRepository } from '@nestjs/typeorm';

import { Usuarios } from './usuarios.entity';
import { UsuariosDetails } from './usuarios.details.entity';
import { getConnection } from 'typeorm';
import { Role } from '../role/role.entity';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(UsuariosRepository)
    private readonly usuariosRepository: UsuariosRepository,
  ) {}

  async getOne(id: number): Promise<Usuarios> {
    if (!id) {
      throw new BadRequestException('id must be sent');
    }
    const usuariO: Usuarios = await this.usuariosRepository.findOne(id, {
      where: { status: 'ACTIVE' },
    });

    if (!usuariO) {
      throw new NotFoundException();
    }
    return usuariO;
  }

  async getAll(): Promise<Usuarios[]> {
    const usuarios: Usuarios[] = await this.usuariosRepository.find({
      where: { status: 'ACTIVE' },
    });
    return usuarios;
  }

  async CreateUsuario(usuarios: Usuarios): Promise<Usuarios> {
    const details = new UsuariosDetails();
    usuarios.details = details;
    const repo = await getConnection().getRepository(Role);
    const defaultRole = await repo.findOne({ where: { name: 'GENERAL' } });
    usuarios.roles = [defaultRole];
    const GuardarUsuario = await this.usuariosRepository.save(usuarios);
    return GuardarUsuario;
  }

  async update(id: number, usuario: Usuarios): Promise<void> {
    await this.usuariosRepository.update(id, usuario);
  }

  async delete(id: number): Promise<void> {
    const usuarioExiste = await this.usuariosRepository.findOne(id, {
      where: { status: 'ACTIVE' },
    });
    if (!usuarioExiste) {
      throw new NotFoundException();
    }
    await this.usuariosRepository.update(id, { status: 'INACTIVE' });
  }
}
