import { Entity, Column} from 'typeorm';

@Entity()
export class UserVehiculo {

    @Column({ primary: true,  type: 'varchar', unique: true})
    id_user: string;
  
    @Column()
    name: string;
  
    @Column()
    last_name: string;
  
    mothers_last_name: string;
  
    @Column({unique: true})
    user:string;
  
    @Column()
    pass: string;
  
    @Column()
    distribution:string;
  
 
}
