 
import {ClientService} from './client.service';
import { Controller, Post, Body, Get, Put, Delete,Param,Logger, HttpException, HttpStatus} from '@nestjs/common';
import {Client} from './client.entity';

@Controller('client')
export class ClientController {


    constructor (private clientService: ClientService ){}

    @Post('/createClient')
    create(@Body() client:Client){
        console.log(client);
        return this.clientService.createClient(client);
    }

    @Get()
    getAllClient(@Param() params){
        return this.clientService.getAllClient(params.id);
    }

    @Get(':id')
    async getOneClient(@Param('id') id){

        const cliente = await this.clientService.getOneClient(id);

        if(cliente)
        return cliente;
        throw new HttpException('usuario no encontrado', HttpStatus.NOT_FOUND);
    }



    
    @Delete(':id')
    deleteClient(@Param() Params ){
        return this.clientService.deleteClient(Params.id);
    }


    @Put(':id')
    async updateClient(@Param('id') id_client, @Body() client : Client ) :Promise<any>{

        client.id_client = String(id_client);

        return this.clientService.updateClient(client);

    }



}
