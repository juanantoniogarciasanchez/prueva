import { Controller, Post, Body, Get, Put, Delete,Param,Logger, HttpException, HttpStatus} from '@nestjs/common';
import { UserVehiculoService } from './user-vehiculo.service';
import { UserVehiculo } from './user-vehiculo.entity';
import {ApiResponse} from "@nestjs/swagger";
import {UserDTO} from './user-vehiculoDto';




@Controller('uservehiculo')
export class UserVehiculoController {

    
    constructor(private service: UserVehiculoService) { }

  

    // Creamos nuevos usuarios tipo post  localhost:3000/users/createUser
    @Post('/createUser')
    create(@Body() user: UserVehiculo) {
        console.log(user);
        return this.service.createUser(user);
    }


            @Post('/LoginPda')
          async  login(@Body() data : UserDTO ){
                console.log(data);
                return this.service.login(data);
            }




                    // buscamos en la base de datos todos los usuarios  
                    // localhost:3000/users
                    @Get()
                    @ApiResponse({status: 200 , description: 'listo' })
                    getAllUsuario(@Param() params) {
                        return this.service.getAllUser(params);
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
        return this.service.deleteUser(params.id);
    }

    @Put(':id')
    async updateUser(@Param('id') id_user, @Body() user: UserVehiculo): Promise<any> {
        
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