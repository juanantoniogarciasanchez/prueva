import { Controller, Post, Body, Get, Put, Delete,Param,Logger, HttpException, HttpStatus} from '@nestjs/common';
import { UsersService } from './users.service';
import { Users } from './users.entity';
import {ApiResponse} from "@nestjs/swagger";
import { strict } from 'assert';


@Controller('users')
export class UsersController {

    constructor(private service: UsersService) { }

  

    // Creamos nuevos usuarios tipo post  localhost:3000/users/createUser
    @Post('/createUser')
    create(@Body() user: Users) {
        console.log(user);
        return this.service.createUser(user);
    }


     // buscamos en la base de datos todos los usuarios  
     // localhost:3000/users
     @Get()
     @ApiResponse({status: 200 , description: 'listo' })
     getAllUsuario(@Param() params) {
         return this.service.getAllUser(params.id);
     }


    // buscamos en la base de datos solo un suario  
    // localhost:3000/users/1000
    @Get(':id')
    async getOneUsuario(@Param('id')  id) {
        Logger.log('opteniendo usuario , controlador user');
        const usuario = await this.service.getoneUser(id);
        if(usuario)
        return usuario;
        throw new HttpException('usuario no encontrado', HttpStatus.NOT_FOUND);
     }


    // borramos un usario solo con el ID tipo delete  
    //localhost:3000/users/1001

    @Delete(':id')
    deleteUser(@Param() params) {
        return this.service.deleteUser(params);
    }



    
    @Put(':id')
    async updateUser(@Param('id') id_user, @Body() user: Users): Promise<any> {
        
        user.id_user = String(id_user);

        console.log('Update # '+ user.id_user);
        
        return this.service.updateUser(user);
    }


    /*
    // 
    @Put()
    update(@Body() user: User) {
        return this.service.updateUser(user);
    }
    */

}