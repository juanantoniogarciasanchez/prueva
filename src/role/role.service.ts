import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RoleRepository } from './role.repository';
import { Role } from './role.entity';
@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(RoleRepository)
    private readonly roleRepository: RoleRepository,
  ) {}

  async getOne(id: number): Promise<Role> {
    if (!id) {
      throw new BadRequestException('id must be sent');
    }
    const role: Role = await this.roleRepository.findOne(id, {
      where: { status: 'ACTIVE' },
    });

    if (!role) {
      throw new NotFoundException();
    }
    return role;
  }

  async getAll(): Promise<Role[]> {
    const role: Role[] = await this.roleRepository.find({
      where: { status: 'ACTIVE' },
    });
    return role;
  }

  async CreateRole(role: Role): Promise<Role> {
    const GuardarRole: Role = await this.roleRepository.save(role);
    return GuardarRole;
  }

  async update(id: number, role: Role): Promise<void> {
    await this.roleRepository.update(id, role);
  }

  async delete(id: number): Promise<void> {
    const roleExiste = await this.roleRepository.findOne(id, {
      where: { status: 'ACTIVE' },
    });
    if (!roleExiste) {
      throw new NotFoundException();
    }
    await this.roleRepository.update(id, { status: 'INACTIVE' });
  }
}
