/**
 * @author Ismael Carballo Martin
 */

import Tarea from "./TareaClase";

export default class GestorDeTareas{
    
    constructor(){
        this.tareas = [];
    }

    addTarea(nombre,completada){
        this.tareas.push(new Tarea(nombre, completada));
        //guardar en el LocalStorage
        this.guardarLocalStorage();
    }

    deleteTarea(id){
        this.tareas.splice(id,1);
        //guardar en el LocalStorage
        this.guardarLocalStorage();
    }

    pendingTareas(){
        this.tareas.filter((tarea)=>{
            return !tarea.completada;     
        })
    }
    completedTareas(){
        this.tareas.filter((tarea)=>{
            return tarea.completada;     
        })
    }

    guardarLocalStorage(){
        localStorage.setItem("Tareas", JSON.stringify(this.tareas))
    }
}