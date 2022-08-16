// El objeto "document" es un objeto predeterminado en JavaScript que nos permite editar el HTML.

// document.getElementById() - obtiene un elemento html mediante el ID.

// document.getElementsByClassName() - obtiene un elemento html mediante la clase.

// document.getElementsByTagName() - obtiene un elemento html mediante tags, ejemplo: div.

// Ejemplos:

const titulo = document.getElementById("titulo")

const body = document.getElementsByTagName("body")

function cambiarTexto() {
    titulo.innerText = "Dom con JavaScript" // .innerText nos permite modificar el texto
}                                           // del elemento html.


function cambiarFondo() {
    titulo.className = "cambiarElFondo"  // className nos permite cambiar o crear el nombre
}                                        // de la clase que tenga el tag HTML.

// document.createElement() nos permite crear elementos HTML desde JavaScript.

// .remove() elimina elementos HTML.

