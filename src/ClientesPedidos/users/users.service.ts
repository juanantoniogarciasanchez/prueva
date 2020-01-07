import { Injectable, Inject , ConflictException} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { Users } from './users.entity';

@Injectable()
export class UsersService {

    constructor(@InjectRepository(Users) private usersRepository: Repository<Users>) { }

    async createUser(user: Users ) {
        const useR = new Users();
        useR.id_user = user.id_user;
        useR.name = user.name;
        useR.last_name = user.last_name;
        useR.mothers_last_name = user.mothers_last_name;
        useR.user = user.user;
        useR.pass = user.pass;
        useR.distribution = user.distribution;
        useR.route = user.route; 
        useR.num_order = user.num_order;
        useR.isActive = user.isActive; 
        
        return await this.usersRepository.save(useR);
    }
    

    async getAllUser(user: Users): Promise<Users[]> {
        return await this.usersRepository.find();
    }

    async getoneUser(id_user: number): Promise<Users[]> {
        const usuario =  await this.usersRepository.find({
            select: [ "isActive"],
            where: [{ "id_user": id_user }]
        });

        if(usuario){
            return usuario;
            return null;
        }
    }

    async deleteUser(user: Users) {
            this.usersRepository.delete(user);
        }


        async updateUser(user: Users): Promise<UpdateResult> {
            return await this.usersRepository.update(user.id_user, user);

        }




    
}