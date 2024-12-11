/**
 * @author Ismael Carballo Martin
 * @description Pintar el DOM
 */

import { Blog } from "./helpers/Ejercicio10"


//--------------DOM------------------


(async function(){
    function handlerBuscarUsuario(event) {
        event.preventDefault();
    
        const autor = Number(document.getElementById("buscar-autor").value);
        if(!autor)
            throw new Error("Introduce un usuario");
        
        const filtrarAutor = blog.filtrarAutor(autor);

        pintarInterfazWeb(); 
    
    }

const blog = new Blog()
console.log(await blog.fetchPublicaciones());


const app = document.getElementById("app");

const h1Element = document.createElement("h1");
h1Element.textContent = "Blog JavaScript";
app.appendChild(h1Element);

const divBuscarUsuario = document.createElement("div");
divBuscarUsuario.innerHTML = `
<form id="buscar-usuario">
<input id="buscar-autor" type="text" placeholder="Autor a buscar">
<button id="buscar" type="submit" class="btn-buscar">Buscar</button>
</form>
`;
app.appendChild(divBuscarUsuario);

const divListaPublicaciones = document.createElement("div");
divListaPublicaciones.id = "lista-publicaciones";
app.appendChild(divListaPublicaciones)

function pintarInterfazWeb(){
    divListaPublicaciones.innerHTML =
    blog.publicaciones.map((publicacion, index)=>{
        return `
        <li data-id="${index}">
        ${publicacion.info()}
        <button class="btn-eliminar" data-id="${index}">Eliminar</button>
        </li>
        `;
        }).join("");    
    }

document.getElementById("buscar-usuario")
        .addEventListener("submit", handlerBuscarUsuario)


pintarInterfazWeb();   
})()