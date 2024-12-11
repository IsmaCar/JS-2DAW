/**
 * @author Ismael Carballo Martin
 * @description Pintar en la interfaz web el DOM
 */

import { Carrito } from "./helpers/Ejercicio9";

//---------------------DOM-----------------------------

    function handlerBuscarUsuario(event) {
        event.preventDefault();
        alert("Buscando el usuario");
    }

(async function () {

    const gestorProductos = new Carrito()

    const app = document.getElementById("app");
    
    const h1Element = document.createElement("h1");
    h1Element.textContent = "Productos POO";
    app.appendChild(h1Element);
    
    const divBuscarUsuario = document.createElement("div");
    divBuscarUsuario.innerHTML = `
    <form id="buscar-usuario">
    <input type="text" name="nombre-buscar" placeholder="Nombre a buscar">
    <button type="submit" id="buscar">Buscar</button>   
    </form>
    `;
    app.appendChild(divBuscarUsuario);
    
    const divListaUsuario = document.createElement("div");
    divListaUsuario.id= "lista-usuarios";
    app.appendChild(divListaUsuario);
    
    function pintarCarrito() {
        divListaUsuario.innerHTML = gestorProductos.productos.map((producto, index) => {
            return `
                <li data-id="${index}">
                    ${producto.info()}
                    <button class="btn-borrar" data-id="${index}">Borrar</button>
                </li>
            `;
        }).join('');
    }

    document.getElementById("buscar-usuario")
        .addEventListener("submit", handlerBuscarUsuario);
    
    pintarCarrito();
})()