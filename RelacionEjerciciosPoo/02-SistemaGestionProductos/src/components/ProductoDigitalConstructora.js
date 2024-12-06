/**
 * @author Ismael Carballo Martin
 */

import Producto from "./ProductoClase";

export function ProductoDigital(nombre, precio){

    Producto.call(nombre, precio, 0);

    this.actualizarStock = function (cantidad) {
        console.log("Los productos digitales no tienen stock.");
        return this.stock; 
    };
}