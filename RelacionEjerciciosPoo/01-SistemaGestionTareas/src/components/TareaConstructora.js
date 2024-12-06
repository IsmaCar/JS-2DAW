/**
 * @author Ismael Carballo Martin
 */

export function Tarea(nombre, completada = false) {
    if(typeof nombre !== 'string') throw new Error("El campo nombre debe ser un string");
    if(typeof completada !== 'boolean') throw new Error("El campo completada debe ser un booleano");
    
    this.id = Tarea.generarId();
    this.nombre = nombre;
    this.completada = completada;



    
    this.toggleCompletada = function () {
        return this.completada = !this.completada;
    };
};

Tarea.contadorId = 0;

Tarea.generarId = function () {
    return ++this.contadorId;
};