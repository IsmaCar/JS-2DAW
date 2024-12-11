/**
 * @author Ismael Carballo Martin
 * @description Sistema de gestión de Productos
 */
const url = import.meta.env.VITE_URL
const port = import.meta.env.VITE_PORT


export class Producto {
    constructor(id, nombre, precio, categoria){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
    }

    info(){
        return `
        Nombre del producto: ${this.nombre},
        Precio del producto: ${this.precio},
        Categoria del producto: ${this.categoria}
        `;
    }

    static async getProductosApi(){
        try {
            const response = await fetch(`${url}:${port}/productos`);
            if(!response.ok)
                throw new Error("Error al cargar los datos desde la API");

            const data = await response.json();

            return data.map(({ id, title, price, category })=>
                new Producto(id, title, price, category))


        } catch (error) {
            throw new Error("Error en la ejecución de la función getProductoApi");
        }
    }

   
}

export class Carrito {
    constructor(){
        this.productos = [];
    }

   
    addProduct(producto){
        this.productos.push(producto);
    }

    deleteProduct(id){
        this.productos.splice(id, 1);
    }

    calcularTotal(){
        this.productos.reduce((acc, producto)=>{
            return acc + producto.precio
        },0); 
    }
}