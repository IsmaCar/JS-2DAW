import { Usuario } from './Usuario.js'

/**
 * @author Ismael Carballo Martin
 * @description Crear clase llamada RedSocial que administre la red social
 * @param {Array} usuarios
 */

export default class RedSocial {
    constructor() {
        this.usuarios = [];
    }

    agregarUsuario(usuario){
        if (!(usuario instanceof Usuario)) {
            throw new Error("El parámetro debe ser una instancia de la clase Usuario");
        }

        this.usuarios.push(usuario)
    }

    obtenerUsuarios(){
        return this.usuarios;
    }

    obtenerPublicacionesUsuario(username){
       return this.usuarios.map((publicacion)=> username.publicacion === publicacion)
    }

    encontrarPublicacionMasLikes() {
       return this.usuarios.find((publicacion)=> Math.max(publicacion.likes));
    }

    guardarLocalStorage() {
        localStorage.setItem("ExamenRedSocial", JSON.stringify(this.usuarios));
    }

}