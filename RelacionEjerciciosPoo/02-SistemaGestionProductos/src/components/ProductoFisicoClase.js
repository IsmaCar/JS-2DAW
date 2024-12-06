/**
 * @author Ismael Carballo Martin
 */

import Producto from "./ProductoClase";

export default class ProductoFisico extends Producto {
    
    constructor(nombre, precio, stock = 0, dimensiones){
        super(nombre, precio, stock);

        if(typeof dimensiones !== 'object' 
            || alto < 0 
            || ancho < 0 
            || profundo < 0) 
                throw new Error(`Error al introducir los datos de las 
                                dimensiones del objeto, revisalo`);
        
        this.dimensiones = dimensiones;
    };

    calcularVolumen() {
        return this.dimensiones.alto * this.dimensiones.ancho * this.dimensiones.volumen;
    }
}