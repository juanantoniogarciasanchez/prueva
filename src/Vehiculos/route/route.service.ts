import { Injectable } from '@nestjs/common';
import {InjectRepository}from '@nestjs/typeorm';
import { Repository  , UpdateResult} from 'typeorm';
import { Route } from './route.entity';


@Injectable()
export class RouteService {

    constructor(@InjectRepository(Route) private RouteRepository: Repository<Route> ){}

    async createRoute(route: Route ) {
        const routE = new Route();
    console.log(JSON.stringify(route));
    var RouteSplit = new String(JSON.stringify(route));
    var RouteSplitAreglo = RouteSplit.split(',');

     
           
            
            var Nombre_Vehiculo_routeSplit = RouteSplitAreglo[0].replace(/["{]/g,"");
            console.log(Nombre_Vehiculo_routeSplit);

            var fecha = RouteSplitAreglo[10].replace(/[":""}]/g,"");
            console.log(fecha);

            var Nombre_Vehiculo_routeSplitCombinado = Nombre_Vehiculo_routeSplit +""+ fecha ;
            console.log(Nombre_Vehiculo_routeSplitCombinado);


     

            routE.Id_route = this.valoR(Nombre_Vehiculo_routeSplitCombinado);
            routE.Nombre_Vehiculo_route = this.valoR(Nombre_Vehiculo_routeSplit);
            routE.Nombre_Conductor_route = this.valoR(RouteSplitAreglo[1]);
            routE.Nombre_Copiloto_route = this.valoR(RouteSplitAreglo[2]);
            routE.Fecha_Salida_route = this.valoR(RouteSplitAreglo[3]);
            routE.Hora_Salida_route = this.valoR(RouteSplitAreglo[4]);
            routE.Lugar_Salida_route = this.valoR(RouteSplitAreglo[5]);
            routE.Lugar_Destino_route = this.valoR(RouteSplitAreglo[6]);
            routE.DistanciaKM_route = this.valoR(RouteSplitAreglo[7]);
            routE.Gasolina_Inicial_route = this.valoR(RouteSplitAreglo[8]);
            routE.Observaciones_Salida_route = this.valoR(RouteSplitAreglo[9]);



 
            

            

        //routE.Id_route = this.valoR(RouteSplitAreglo[0]);  esperando un string 
 
         //routE.Id_route = parseInt(IdRoute); // esperando un numrico
        
     
        return await this.RouteRepository.save(routE);
    }



    valoR(params:string) {
        return params;
    }



    async getAllRoutes(route:Route) : Promise <Route[]>{
        return await this.RouteRepository.find();
    }

 

    async getOnRoute(Id_route: number): Promise<Route[]> {
       const RoutE =await this.RouteRepository.find({
            select: ["Id_route","Nombre_Vehiculo_route","Nombre_Conductor_route","Nombre_Copiloto_route", "Fecha_Salida_route", "Hora_Salida_route", "Lugar_Salida_route", "Lugar_Destino_route", "DistanciaKM_route", "Gasolina_Inicial_route", "Observaciones_Salida_route", "Fecha_llegada_route", "Km_Recorridos_route", "GasolinaFina_route", "Observaciones_final_route" ],
            where: [{ "Id_route": Id_route }]
        });

        if(RoutE){
            return RoutE;
            return null;
        }
    }



    async deleteRoute(route:Route){
        this.RouteRepository.delete(route);
    }


    async updateRoute(route:Route) :Promise <UpdateResult>{
        return await this.RouteRepository.update(route.Id_route,route);
    }
   
}