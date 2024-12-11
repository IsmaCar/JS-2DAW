/**
 * @author Ismael Carballo Martin
 * Pintamos la interfaz web con el DOM
 */

import { GestionUsuarios } from "./helpers/Ejercicio7";

//------------------ DOM -----------------------

function handlerBuscarUsuario(event) {
    event.preventDefault();
    alert("Buscar Usuario");
}

(async function() {

    function handlerDeleteUsuario(event) {
        const indice = event.target.dataset.id
        
        gestorUser.delete(indice)

        pintarListaUsuarios();
    }

    
   const gestorUser = new GestionUsuarios(); 
    console.log("Usuarios-->",await gestorUser.fetchUsuarios());



    //Pintar el DOM
    const app = document.getElementById("app");
    
    const h1Element = document.createElement("h1");
    h1Element.textContent="Buscador de usuarios"
    app.appendChild(h1Element)

    const divBuscarUsuario = document.createElement("div")
    divBuscarUsuario.id = "buscar-usuarios"
    divBuscarUsuario.innerHTML =`
    <form id="buscar-usuario">
    <input id="nombre-buscar" type="text" placeholder="Nombre a buscar">
    <button id="buscar" type="submit" class="btn-buscar">Buscar</button>
    </form>`;
    app.appendChild(divBuscarUsuario)

    const divListaUsuarios = document.createElement("div")
    divListaUsuarios.id="lista-usuarios"
    app.appendChild(divListaUsuarios);


    function pintarListaUsuarios(){
    divListaUsuarios.innerHTML= gestorUser
    .usuarios.map((user, index)=>{
        return`
        <li data-id="${index}">
        ${user.info()}
        <button data-id="${index}" class="btn-borrar">Eliminar</button>
        </li>
        `;
    }).join("")
    }

    document.getElementById("buscar-usuario")
            .addEventListener("submit", handlerBuscarUsuario);

    document.getElementById("lista-usuarios")
             .addEventListener("click", handlerDeleteUsuario);
             
    pintarListaUsuarios();
})()