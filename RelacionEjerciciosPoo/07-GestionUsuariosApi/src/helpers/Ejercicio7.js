/**
 * @author Ismael Carballo Martin
 * @description Ejercicio para practicar la gestión de usuarios desde una API
 */
const url = import.meta.env.VITE_URL
const port = import.meta.env.VITE_PORT


export class Usuario {
    
    constructor(id, nombre, email, rol){
        this.id = id;
        this.nombre = nombre;
        this.email = email;
        this.rol = rol;
    }

    info() {
        return `
        ID: ${this.id},
        Nombre: ${this.nombre},
        Email: ${this.email},
        Rol: ${this.rol}
        `;
    }
}

export class GestionUsuarios {
   
    constructor(){
        this.usuarios = [];
    }

    async fetchUsuarios() {
        try {
            const response = await fetch(`${url}:${port}/users`);
            if(!response) throw new Error("Error al recuperar la API");
            
            const data = await response.json();

            this.usuarios = data.map((usuario)=>{
                const { id, name, email } = usuario
                return new Usuario(id, name, email, "usuario");
            });
            return this.usuarios;
        } catch (error) {
            throw new Error("Error en la ejecución de la función fetchUsuarios");
            
        }
    }

    delete(id){
        this.usuarios.splice(id, 1)
    }

    guardarLocalStorage(){
        localStorage.setItem(JSON.stringify(this.usuarios));
    }

    cargarDesdeLocalStorage(){
        const usuarioLocalStorage = localStorage.getItem("Usuarios");

        if(!usuarioLocalStorage) throw new Error("No existe");

        this.usuarios = usuarioLocalStorage.map((usuario)=> 
            new Usuario(usuario.id, usuario.nombre, usuario.email, usuario.rol))
        
    }
}