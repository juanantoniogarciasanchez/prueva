import { Module } from '@nestjs/common';
import { UserVehiculoController } from './user-vehiculo.controller';
import { UserVehiculoService } from './user-vehiculo.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {UserVehiculo} from './user-vehiculo.entity';
@Module({
  imports: [TypeOrmModule.forFeature([UserVehiculo])],
  controllers: [UserVehiculoController],
  providers: [UserVehiculoService]
})
export class UserVehiculoModule {}
