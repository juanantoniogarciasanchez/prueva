import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {Products} from './products.entity';
import { Productv } from '../productv/productv.entity';

@Module({
  imports : [TypeOrmModule.forFeature([Productv])],
  providers: [ProductsService],
  controllers: [ProductsController]
})
export class ProductsModule {}
