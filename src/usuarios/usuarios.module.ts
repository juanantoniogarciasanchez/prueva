import { Module } from '@nestjs/common';
import { UsuariosController } from './usuarios.controller';
import { UsuariosService } from './usuarios.service';
import { Usuarios } from './usuarios.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosDetails } from './usuarios.details.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Usuarios, UsuariosDetails])],
  controllers: [UsuariosController],
  providers: [UsuariosService],
})
export class UsuariosModule {}
