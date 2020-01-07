import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Route {

    
    @Column({ primary: true,  type: 'varchar', length: 50  , unique: true})
    Id_route: string;

    @Column({ type: 'varchar', length: 50 , nullable:true })
    Nombre_Vehiculo_route:string;

    @Column({ type: 'varchar', length: 50 , nullable:true })
    Nombre_Conductor_route:string;
 
    @Column({ type: 'varchar', length: 50 , nullable:true })
    Nombre_Copiloto_route:string;

    @Column({ type: 'varchar', length: 50 , nullable:true })
    Fecha_Salida_route:string;

    @Column({ type: 'varchar', length: 50 , nullable:true })
    Hora_Salida_route:string;
 
    @Column({ type: 'varchar', length: 50 , nullable:true })
    Lugar_Salida_route:string;
 
    @Column({ type: 'varchar', length: 50 , nullable:true })
    Lugar_Destino_route:string;
 
    @Column({ type: 'varchar', length: 50 , nullable:true })
    DistanciaKM_route:string;

    @Column({ type: 'varchar', length: 50 , nullable:true })
    Gasolina_Inicial_route:string;

    @Column({ type: 'varchar', length: 50 , nullable:true })
    Observaciones_Salida_route:string;

    @Column({ type: 'varchar', length: 50 , nullable:true })
    Fecha_llegada_route:string;

    @Column({ type: 'varchar', length: 50 , nullable:true })
    Km_Recorridos_route:string;

    @Column({ type: 'varchar', length: 50 , nullable:true })
    GasolinaFina_route:string;


    @Column({ type: 'varchar', length: 50 , nullable:true })
    Observaciones_final_route:string;
 


}
