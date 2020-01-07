import { Entity, Column, PrimaryGeneratedColumn, Double } from 'typeorm';

@Entity()
export class TypeClient {

    @PrimaryGeneratedColumn()
    id_type_client:string;

    @Column()
    type_client:string;

    @Column()
    isActive: number;

}