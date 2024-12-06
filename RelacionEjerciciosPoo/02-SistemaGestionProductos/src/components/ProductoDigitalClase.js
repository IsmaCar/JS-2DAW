/**
 * @author Ismael Carballo Martin
 */

import Producto from "./ProductoClase";

export default class ProductoDigital extends Producto {

    constructor(nombre, precio){
        super(nombre, precio, 0)
    }

    actualizarStock(cantidad){

        console.log("El producto digital no tiene stock");
        return this.stock
    }

}