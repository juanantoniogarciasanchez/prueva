import { Entity, Column, PrimaryGeneratedColumn, Double } from 'typeorm';

@Entity()
export class Orders {

    @PrimaryGeneratedColumn()
    number_order:string;

    @Column()
    NombreCliente:string;
    
    @Column( )
    tipo:string;

    @Column()
    NombreEstablecimiento:string;

    @Column()
    Direccion:string;

    @Column()
    NumOrden:string;

    @Column()
    Total1:string;

    @Column()
    Producto:string;


    @Column()
    Marca:string;


    @Column()
    Volumen:string;

    @Column()
    SKU:string;


    @Column()
    Descripsion:string;

    @Column()
    CostoUnitario:string;

    @Column()
    Cantidad :string;

    @Column()
    Total2:string;


    @Column()
    isActive:string;

    

}
