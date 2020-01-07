import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import {Client} from './client.entity';
 
@Injectable()
export class ClientService {


    constructor (@InjectRepository(Client) private  ClientRepository: Repository<Client>){}



    async createClient (client:Client){
        const  clienT = new Client();
        clienT.id_client = client.id_client;
        clienT.fechaRegistro = client.fechaRegistro;
        clienT.tipoCliente = client.tipoCliente;
        clienT.NombreCliente = client.NombreCliente;
        clienT.NombreEsta = client.NombreEsta;
        clienT.Razon = client.Razon;
        clienT.RFC_cliente = client.RFC_cliente;
        clienT.DiDactura = client.DiDactura;
        clienT.Estado = client.Estado;
        clienT.Municipio = client.Municipio;
        clienT.Colonia = client.Colonia;
        clienT.Calle = client.Calle;
        clienT.NumEx = client.NumEx;
        clienT.NumInt = client.NumInt;
        clienT.Calle1 = client.Calle1;
        clienT.Calle2 = client.Calle2;
        clienT.Telefono = client.Telefono;
        clienT.Celular = client.Celular;
        clienT.correo = client.correo;
        clienT.Abre = client.Abre;
        clienT.Cierra = client.Cierra;
        clienT.Horario1 = client.Horario1;
        clienT.Horario2 = client.Horario2;
        clienT.isActive = client.isActive;
        
        return await this.ClientRepository.save(clienT);
    }

    async getAllClient (client:Client): Promise<Client[]> {
        return await this.ClientRepository.find();
    }


    async getOneClient (id_client : number): Promise <Client[]> {
        const cliente = await this.ClientRepository.find({

            select : ["id_client" , "fechaRegistro", "tipoCliente","NombreCliente", "NombreEsta", "Razon", "RFC_cliente", "DiDactura", "Estado", "Municipio" ,  "Colonia" , "Calle", "NumEx", "NumInt", "Calle1", "Calle2", "Telefono", "Celular", "correo" , "Abre", "Cierra", "Horario1", "Horario2",  "isActive" ],
            where : [{"id_client": id_client }]

        });

        if(cliente){
            return cliente;
            return null;
        }
    } 


    async deleteClient (client:Client){
       return await this.ClientRepository.delete(client);
    }


    async updateClient (client:Client) : Promise <UpdateResult>{
        return await this.ClientRepository.update(client.id_client,client);
    }

}
