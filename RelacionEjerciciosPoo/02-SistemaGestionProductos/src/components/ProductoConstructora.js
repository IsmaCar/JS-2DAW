/**
 * @author Ismael Carballo Martin
 */

export function Producto(nombre, precio, stock = 0) {
    if (typeof nombre !== 'string') throw new Error("El nombre debe seer un string");
    if (typeof precio !== 'number') throw new Error("El nombre debe seer un number");
    if (typeof stock !== 'number') throw new Error("El nombre debe seer un number");
  
    let nombre = nombre;
    let precio = precio;
    let stock = stock;
  
    this.actualizarStock = function (cantidad) {
      
     if(typeof cantidad !== 'number') throw new Error("La cantidad debe ser un número");
      
      return this.stock += cantidad;
    };
  
  };