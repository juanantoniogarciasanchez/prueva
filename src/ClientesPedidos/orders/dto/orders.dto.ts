import { Double } from "typeorm";

export class CreateOrdersDTO{

  
  readonly number_order:string;
  readonly NombreCliente:string;
  readonly tipo:string;
  readonly NombreEstablecimiento:string;
  readonly Direccion:string;
  readonly NumOrden:string;
  readonly Total1:string;
  readonly Producto:string;
  readonly Marca:string;
  readonly Volumen:string;
  readonly SKU:string;
  readonly Descripsion:string;
  readonly CostoUnitario:string;
  readonly Cantidad :string;
  readonly Total2:string;
  readonly isActive:string;


}