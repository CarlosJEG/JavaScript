// Operadores Avanzados: son operadores que nos perminen simplificar el codigo.

// operador ++

let num = 10

num = num + 1 // aumenta el valor a uno
num = num++ // aumenta el valor a uno pero con la sintaxis simplificada


// operador ternario

let temp = 18

if (temp > 20) {
    alert("Dia Caluroso")
} else {
    alert("Dia Agradable")
}

// la condicion if se puede simplificar de la siguiente manera:

temp > 20 ? alert("Dia Caluroso") : alert("Dia Agradable") 

// el signo "?" vendria siendo if y el signo ":" vendria siendo else


// operador ternario AND

if (username !== "") {
    console.log("Bienvenido", username)
}

let bienvenida = username !== "" && `Bienvenido ${username}`

// esta es otra forma de simplificar la condicion if pero solo cuando tiene if y no else

// operador ternario OR
// operador ternario ??

// acceso condicional a un objeto: 

console.log(usuario?.nombre || "El usuario no existe") // Ejemplo


// desestructuracion: nos permite declarar variables y en esa variable guardar una propiedad de un objeto o array

let {prop1, prop2} = objeto // desestructuracion de objetos

let [prop3, prop4 ]= array // desestructuracion de array


// Spread de array y objetos

const nombres = [...array1, ...array2] // los 3 puntos es como copiar un array

const nombres2 = {...array1, ...array2} // los 3 puntos es como copiar un objeto

// rest parameters