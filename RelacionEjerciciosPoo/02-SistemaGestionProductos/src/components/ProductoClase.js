/**
 * @author Ismael Carballo Martin
 */

export default class Producto {
    
    constructor(nombre, precio, stock){
        
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    };

    actualizarStock(cantidad){
        if(typeof cantidad !== 'number') throw new Error("cantidad debe ser un número");
            return  this.stock += cantidad;
    };

};