import { Controller, Post, Get,Put, Delete, Res, HttpStatus, Body , Param, Logger, HttpException} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { Orders } from './orders.entity';
import {ApiResponse} from "@nestjs/swagger";



@Controller('orders')
export class OrdersController {

  constructor(private ordersService: OrdersService) { }

    
    @Post('/create')
    create(@Body() orders , @Res() res) {
        console.log(orders);
      return this.ordersService.createOrders(orders).then(mensaje => {
        res.status(HttpStatus.OK).json({ mensaje })
      }).catch(error => { 
        res.status(HttpStatus.BAD_REQUEST).json({ ERROR: error })
       });
        
    }
    


   
     @Get()
     async getOrders(@Res()res) {
       const Orders= await this.ordersService.getOrders( );
         return  res.status(HttpStatus.OK).json({Orders})
     }


  
     @Get(':id')
     async getOneOrders(@Param('id')  id) {
         Logger.log('opteniendo orders , controlador orders');
         const OrderS = await this.ordersService.getoneOrders(id);
         if(OrderS)
         return OrderS;
         throw new HttpException('Orders no encontrado', HttpStatus.NOT_FOUND);
      }



      @Delete(':id')
      deleteOrders(@Param() params) {
          return this.ordersService.deleteOrder(params.id);
      }




      @Put(':id')
      async updateOrders(@Param('id') number_order, @Body() orders: Orders): Promise<any> {
        orders.number_order = String(number_order);          
        return this.ordersService.updateOrders(orders);
      }

 
}
