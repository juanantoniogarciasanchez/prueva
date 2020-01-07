import { Controller, Post, Body, Get, Put, Delete,Param,Logger, HttpException, HttpStatus} from '@nestjs/common';import {RouteService} from './route.service';
import { Route } from './route.entity';


@Controller('Route')
export class RouteController {

constructor (private service: RouteService){}



@Post('/createRoute')
create(@Body() route: Route) {
    console.log(route);
    return this.service.createRoute(route);
}



@Get()
getAllRoute(@Param() params){
    return this.service.getAllRoutes(params);
}

@Get(':id')
async getOneRoute(@Param('id') id){

    const RoutE = await this.service.getOnRoute(id);

    if(RoutE)
    return RoutE;
    throw new HttpException('usuario no encontrado', HttpStatus.NOT_FOUND);
}




@Delete(':id')
deleteRoute(@Param() Params ){
    return this.service.deleteRoute(Params.id);
}


@Put(':id')
async updateRoute(@Param('id') Id_route, @Body() route : Route ) :Promise<any>{

    route.Id_route = String(Id_route);

    return this.service.updateRoute(route);

}




}
