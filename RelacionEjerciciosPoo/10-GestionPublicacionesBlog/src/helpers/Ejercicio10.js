const url = import.meta.env.VITE_URL
const port = import.meta.env.VITE_PORT


/**
 * @author Ismael Carballo Martin
 * @description Crear clase Publicación
 * @param {Number} id
 * @param {String} titulo
 * @param {string} contenido
 * @param {Number} autor
 */

export class Publicacion {
    constructor(id, titulo, contenido, autor){
        this.id = id;
        this.titulo = titulo;
        this.contenido = contenido;
        this.autor = autor;
    }

    info(){
        return `
        Titulo: ${this.titulo},
        contenido: ${this.contenido},
        autor del contenido: ${this.autor}
        `;
    }
}

/**
 * @author Ismael Carballo Martin
 * @description Crear clase Blog
 * @param {Array} publicaciones
 */

export class Blog {
    constructor(){
        this.publicaciones = [];
    }

    async fetchPublicaciones() {
        try {
            const response = await fetch(`${url}:${port}/publicaciones`);
            if(!response.ok)
                throw new Error("Error al obtener la API publicaciones");
            
            const data = await response.json();

            this.publicaciones = data.map((publicacion)=>{
                const { id, title, body, autor } = publicacion
                return new Publicacion(id,title,body,autor)
            })
            return this.publicaciones

        } catch (error) {
            throw new Error("Error en la ejecución de fetchPublicaciones");
            
        }
    }

    addProducto(id, titulo, contenido, autor){
        this.publicaciones.push(new Publicacion(id, titulo, contenido, autor))
    }

    filtrarAutor(autor){
       return this.publicaciones.filter((publicacion)=> 
            publicacion.autor === autor);
    }

    buscarPorPalabraClave(palabra) {
        return this.publicaciones.filter(
            (publicacion) =>
                publicacion.titulo.toLowerCase().includes(palabra.toLowerCase()) ||
                publicacion.contenido.toLowerCase().includes(palabra.toLowerCase())
        );
    }

    cargarLocalStorage(){
        localStorage.setItem(JSON.stringify(this.publicaciones));
    }

    cargarDesdeLocalStorage(){
        const publicacionLocalStorage = localStorage.getItem("Publicaciones");

        if(!publicacionLocalStorage) throw new Error("No existe");

        this.publicaciones = publicacionLocalStorage.map((publicacion)=> 
            new Publicacion(publicacion.id, publicacion.titulo, publicacion.contenido, publicacion.autor))
        
    }
}