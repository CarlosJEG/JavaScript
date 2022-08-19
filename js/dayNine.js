// QuerySelector y QuerySelectorAll

document.querySelector("#titulo") // "#" si es ID y "." en tal caso de que sea class.

document.querySelectorAll("") // es para seleccionar todos los elementos de una etiqueta
                              // HTML en especifico, por ejemplo la etiqueta button.


// Eventos:

const botonListar = document.querySelector(".button")

botonListar.addEventListener("click", ()=> {  // .addEventListener recibe 2 parametros, el primero el
    console.log("Listar paises")              // evento, en este caso click y la segunda una funcion a
})                                            // a la cual quiera invocar o crearla como esta en el ejemplo.

botonListar.addEventListener("click", funcion) // esta seria la otra forma sin crear una funcion.

// Eventos con el Mouse:

// mousedown -- mouseup
// mouseover -- mouseout
// mousemove


// Eventos con el Teclado:

// keydown -- keyup -- keypress


// El evento Change se activa cuando se detecta un cambio en el elemento.

// El evento Focus es cuando se enfoca en un elemento.

// El evento Blur es lo contrario a focus.




