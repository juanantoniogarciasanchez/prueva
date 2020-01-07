import {
  Controller,
  Get,
  Post,
  Param,
  ParseIntPipe,
  Body,
  Patch,
  Delete,
} from '@nestjs/common';
import { RoleService } from './role.service';
import { Role } from './role.entity';
@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Get(':id')
  async getRole(@Param('id', ParseIntPipe) id: number): Promise<Role> {
    const roles = await this.roleService.getOne(id);
    return roles;
  }

  @Get()
  async getRoles(): Promise<Role[]> {
    const roles = await this.roleService.getAll();
    return roles;
  }

  @Post()
  async CrearRole(@Body() role: Role): Promise<Role> {
    const CreaRole = await this.roleService.CreateRole(role);
    return CreaRole;
  }

  @Patch(':id')
  async updateRole(@Param('id', ParseIntPipe) id: number, @Body() role: Role) {
    const updateRole = await this.roleService.update(id, role);
    return true;
  }

  @Delete(':id')
  async borrarRole(@Param('id', ParseIntPipe) id: number) {
    await this.roleService.delete(id);
    return true;
  }
}
