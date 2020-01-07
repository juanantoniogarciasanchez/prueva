import { Module } from '@nestjs/common';
import { ProductvController } from './productv.controller';
import { ProductvService } from './productv.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {Productv} from './productv.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Productv])],
  controllers: [ProductvController],
  providers: [ProductvService]
})
export class ProductvModule {}
