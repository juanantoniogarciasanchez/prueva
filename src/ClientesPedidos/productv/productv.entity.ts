import { Entity, Column, PrimaryGeneratedColumn, Double } from 'typeorm';

@Entity()
export class Productv {

    @PrimaryGeneratedColumn()
    name_sku_product:string;

    @Column()
    cost:string;

    @Column()
    quantity:string;

    @Column()
    number_order:string;

    @Column()
    id_client:string;

    
    @Column()
    isActive:string;

}
