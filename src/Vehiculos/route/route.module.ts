import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RouteService } from './route.service';
import { RouteController } from './route.controller';
import { Route } from './route.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Route])],
  providers: [RouteService],
  controllers: [RouteController]
})
export class RouteModule {}
