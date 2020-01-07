import { Entity, Column, PrimaryGeneratedColumn, Double } from 'typeorm';
@Entity()
export class Client {


    @PrimaryGeneratedColumn()
    id_client: string;

    @Column()
    fechaRegistro:string;
    
    @Column()
    tipoCliente:string;

    @Column()
    NombreCliente:string;
    
    @Column()
    NombreEsta:string;
    
    @Column()
    Razon:string;
    
    @Column()
    RFC_cliente:string;
    
    @Column()
    DiDactura:string;
    
    @Column()
    Estado:string;
    
    @Column()
    Municipio:string;
    
    @Column()
    Colonia:string;
    
    @Column()
    Calle:string;
    
    @Column()
    NumEx:string;

    @Column()
    NumInt:string;
 
    @Column()
    Calle1:string;

    @Column()
    Calle2:string;
    
    @Column()
    Telefono:string;

    @Column()
    Celular:string;
    
    @Column()
    correo:string;

    
    @Column()
    Abre:string;

    @Column()
    Cierra:string;

    @Column()
    Horario1:string;

    
    @Column()
    Horario2:string;

    @Column()
    isActive:string;
 
}
