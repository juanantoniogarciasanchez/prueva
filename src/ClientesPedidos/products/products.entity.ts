import { Entity, Column, PrimaryGeneratedColumn, Double } from 'typeorm';

@Entity()
export class Products {

   
   
   
    @PrimaryGeneratedColumn()
    name_sku_product:string;
   
    @Column()
    Marca:string;

  

    @Column()
    product:string;

    @Column()
    characteristics:string;

    @Column()
    cost:string;

    @Column()
    size:string;

    @Column()
    type_product:string;

    @Column()
    abre_type_producto:string;

    @Column()
    general_description:string;

    @Column()
    isActive:string;



}