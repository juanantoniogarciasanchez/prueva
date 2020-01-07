import {
  Controller,
  Param,
  ParseIntPipe,
  Get,
  Post,
  Body,
  Patch,
  Delete,
} from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { Usuarios } from './usuarios.entity';
import { identifier } from '@babel/types';

@Controller('usuarios')
export class UsuariosController {
  constructor(private usuariosService: UsuariosService) {}

  @Get(':id')
  async getUsuario(@Param('id', ParseIntPipe) id: number): Promise<Usuarios> {
    const usuarios = await this.usuariosService.getOne(id);
    return usuarios;
  }

  @Get()
  async getUsuarios(): Promise<Usuarios[]> {
    const usuarios = await this.usuariosService.getAll();
    return usuarios;
  }

  @Post()
  async CrearUsuario(@Body() usu: Usuarios): Promise<Usuarios> {
    const CreaUsuario = await this.usuariosService.CreateUsuario(usu);
    return CreaUsuario;
  }

  @Patch(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() usu: Usuarios) {
    const update = await this.usuariosService.update(id, usu);
    return update;
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    await this.usuariosService.delete(id);
    return true;
  }
}
