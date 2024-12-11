/**
 * @author Ismael Carballo Martin
 * @description Realizar un sistema de reservas de peliculas utilizando una API
 */
const url = import.meta.env.VITE_URL;
const port = import.meta.env.VITE_PORT;

export class Pelicula {

    constructor(titulo, año, director){
        this.titulo = titulo;
        this.año = año;
        this.director = director;
    }

    info(){
        return `
        Nombre de la película: ${this.titulo},
        Año de estreno: ${this.año},
        Director: ${this.director}
        `;
    }
    static async buscarPeliculas(titulo){
        try {
            const response = await fetch(`${url}:${port}/peliculas`);
            if(!response.ok) 
                throw new Error("Error al recuperar la API");
    
            const data = await response.json();
    
            return data.filter((pelicula)=> 
                pelicula.titulo.toLowerCase().includes(titulo.toLowerCase()));
            
        } catch (error) {
            throw new Error("Error en la función buscarPeliculas");
        }
    }
}
export class reservaPeliculas {
    constructor(cliente, diasReservados){
        this.cliente = cliente;
        this.diasReservados = diasReservados;
    }
    infoReserva(){
        return`
        Cliente: ${this.cliente},
        Días reservados: ${this.diasReservados}
        `;
    }
}


