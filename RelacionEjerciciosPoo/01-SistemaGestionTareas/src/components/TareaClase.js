/**
 * @author Ismael Carballo Martin
 * @description Clase Tarea
 */

export default class Tarea{
    //crear el contador 
    static #contadorId = 0;
    
    //propiedades privadas
            #id;
    
    //constructor de la tarea
    constructor(nombre, completada = false){
        //verificación de nombre y completado
        if(typeof nombre !== 'string') throw new Error("El nombre debe ser string");
        if(typeof completada !== 'boolean') throw new Error("El campo completado debe ser booleano");
        //Su función es sumar 1 al id ya existente para crear uno nuevo
        this.#id = ++Tarea.generarId();
        this.nombre= nombre;
        this.completada = completada;
    }

    //Devolver el id de la tarea
    getId() {
        return this.#id;
    };

    //Función statica que genera el id en el contador
    static generarId() {
        return ++this.#contadorId;
    };

    //Método qe alterna entre completada y no completada
    toggleCompletada() {
       return this.completada = !this.completada;
    }

}