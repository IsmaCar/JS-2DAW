/**
 * @author Ismael Carballo Martin
 */

import Producto from "./ProductoClase";

export function ProductoFisico(nombre, precio, stock = 0, dimensiones){
    Producto.call(this,nombre, precio, stock);

    if(typeof dimensiones !== 'object' 
        || alto < 0 
        || ancho < 0 
        || profundo < 0) 
            throw new Error(`Error al introducir los datos de las 
                            dimensiones del objeto, revisalo`);

    this.calcularVolumen = function () {
        
       return this.dimensiones.alto * this.dimensiones.ancho * this.dimensiones.profundo;
       
    }     
};