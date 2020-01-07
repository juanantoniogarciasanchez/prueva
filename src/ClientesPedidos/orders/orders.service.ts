import { Injectable } from '@nestjs/common';
import { Orders } from './orders.entity';
import { Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';



@Injectable()
export class OrdersService {

    constructor(@InjectRepository(Orders) private OrdersRepository: Repository<Orders>) { }

    
    async createOrders(orders: Orders ) {
        const orderS = new Orders();
        orderS.number_order = orders.number_order; 
        orderS.NombreCliente = orders.NombreCliente; 
        orderS.tipo = orders.tipo; 
        orderS.NombreEstablecimiento = orders.NombreEstablecimiento; 
        orderS.Direccion = orders.Direccion; 
        orderS.NumOrden = orders.NumOrden; 
        orderS.Total1 = orders.Total1; 
        orderS.Producto = orders.Producto; 
        orderS.Marca = orders.Marca; 
        orderS.Volumen = orders.Volumen; 
        orderS.SKU = orders.SKU; 
        orderS.Descripsion = orders.Descripsion; 
        orderS.CostoUnitario = orders.CostoUnitario; 
        orderS.Cantidad = orders.Cantidad; 
        orderS.Total2 = orders.Total2; 
        orderS.isActive = orders.isActive; 
        return await this.OrdersRepository.save(orderS);
    }

    
    
    async getOrders(): Promise<Orders[]> {
       const orders = await this.OrdersRepository.find();
        return orders;

    }

  
    async getoneOrders(number_order: number): Promise<Orders[]> {
        const OrderS =  await this.OrdersRepository.find({
            select: ["number_order", "NombreCliente", "tipo","NombreEstablecimiento", "Direccion", "NumOrden", "Total1", "Producto", "Marca", "Volumen", "SKU", "Descripsion", "CostoUnitario", "Cantidad", "Total2" ,"isActive" ],
            where: [{ "number_order": number_order }]
        });

        if(OrderS){
            return OrderS;
            return null;
        }
    }

    async deleteOrder(orders: Orders) {
        this.OrdersRepository.delete(orders);
    }

  
    async updateOrders(orders: Orders): Promise<UpdateResult> {
        return await this.OrdersRepository.update(orders.number_order, orders);

    }
 
}
