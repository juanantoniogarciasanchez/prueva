import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './ClientesPedidos/users/users.module';
import { ClientModule } from './ClientesPedidos/client/client.module';
import { OrdersModule } from './ClientesPedidos/orders/orders.module';
import { ProductsModule } from './ClientesPedidos/products/products.module';
import { ProductvModule } from './ClientesPedidos/productv/productv.module';
import { TypeclientModule } from './ClientesPedidos/typeclient/typeclient.module';

import { RouteModule } from './vehiculos/route/route.module';

import { Users } from './ClientesPedidos/users/users.entity';
import { TypeClient } from './ClientesPedidos/typeclient/typeclient.entity';
import { Productv } from './ClientesPedidos/productv/productv.entity';
import { Products } from './ClientesPedidos/products/products.entity';
import { Orders } from './ClientesPedidos/orders/orders.entity';
import { Client } from './ClientesPedidos/client/client.entity';

import { Route } from './Vehiculos/route/route.entity';
import { UserVehiculoModule } from './vehiculos/user-vehiculo/user-vehiculo.module';
import { AuthPidionModule } from './vehiculos/auth-pidion/auth-pidion.module';
import { AuthWebModule } from './vehiculos/auth-web/auth-web.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { RoleModule } from './role/role.module';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: '192.168.1.166',
      port: 1433,
      username: '',
      password: 'Hopers2019',
      database: 'BD_ERP',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([
      Client,
      Orders,
      Products,
      Productv,
      TypeClient,
      Users,
      Route,
    ]),
    ClientModule,
    OrdersModule,
    ProductsModule,
    ProductvModule,
    TypeclientModule,
    UsersModule,
    RouteModule,
    UserVehiculoModule,
    AuthPidionModule,
    AuthWebModule,
    UsuariosModule,
    RoleModule,
    ConfigModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
