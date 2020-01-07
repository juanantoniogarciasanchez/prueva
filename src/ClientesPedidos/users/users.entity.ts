import { Entity, Column, PrimaryGeneratedColumn, Double } from 'typeorm';

@Entity()
export class Users {

    @PrimaryGeneratedColumn()
    id_user:string;

    @Column()
    name:string;
    
    @Column()
    last_name:string;

    @Column()
    mothers_last_name:string;

    @Column()
    user:string;

    
    @Column()
    pass:string;

    
    @Column()
    distribution:string;

    
    @Column()
    route:string;

    
    @Column()
    num_order:string;

    
    @Column()
    isActive:number;
}