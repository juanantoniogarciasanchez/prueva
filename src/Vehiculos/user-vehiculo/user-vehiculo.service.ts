import { Injectable, Inject , ConflictException, HttpException, HttpStatus, UnsupportedMediaTypeException} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { UserVehiculo } from './user-vehiculo.entity';
import {UserDTO} from './user-vehiculoDto';
@Injectable()
export class UserVehiculoService {

    

    constructor(@InjectRepository(UserVehiculo) private usersRepository: Repository<UserVehiculo>) { }

    async createUser(user: UserVehiculo ) {
        const useR = new UserVehiculo();

        useR.id_user = user.id_user;
        useR.name = user.name;
        useR.last_name = user.last_name;
        useR.mothers_last_name = user.mothers_last_name;
        useR.user = user.user;
        useR.pass = user.pass;
        useR.distribution = user.distribution;

         return await this.usersRepository.save(useR);
    }
    

    async login( data: UserDTO): Promise <UserDTO[]>{

        var DataSplit = new String(JSON.stringify(data));
        var DataSplitAreglo = DataSplit.split(',');
            
        var UserDataSplit = DataSplitAreglo[0].replace(/["{]/g,"");
        console.log(UserDataSplit);

        var PassDataSplit = DataSplitAreglo[1].replace(/[":""}]/g,"");
        console.log(PassDataSplit);


       // const {user, pass} = data;
        const useR = await this.usersRepository.find({
            select: ["id_user", "name","last_name","mothers_last_name","user","pass", "distribution"],
            where : [{  "user" :UserDataSplit , "pass": PassDataSplit}]
        });

        if(useR){
            return useR;
            return null;
        }

        }






    async getAllUser(user: UserVehiculo): Promise<UserVehiculo[]> {
        return await this.usersRepository.find();
    }

    async getoneUser(id_user: string): Promise<UserVehiculo[]> {
        const usuario =  await this.usersRepository.find({
            select: ["id_user","name","last_name","mothers_last_name","user","pass", "distribution"],
            where: [{ "id_user": id_user }]
        });

        if(usuario){
            return usuario;
            return null;
        }
    }

    async deleteUser(user: UserVehiculo) {
            this.usersRepository.delete(user);
        }


        async updateUser(user: UserVehiculo): Promise<UpdateResult> {
            return await this.usersRepository.update(user.id_user, user);

        }


}
