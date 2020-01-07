import { Module } from '@nestjs/common';
import { TypeclientService } from './typeclient.service';
import { TypeclientController } from './typeclient.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {TypeClient} from './typeclient.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TypeClient])],
  providers: [TypeclientService],
  controllers: [TypeclientController]
})
export class TypeclientModule {}
