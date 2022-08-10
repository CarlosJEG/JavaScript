// Condicional IF

if ("si la condicion se cumple, por ejemplo: true") { // se le indica la condicion que tiene que cumplir
    console.log("haz esto"); // para que luego haga esto
} 

// Ejemplo:

let username = "CoderHouse";

if (username == "CoderHouse") {
    console.log("Bienvenido", username);
}

// debugger = Se usa para ver como se ejecuta el codigo linea por linea

// Condicional IF - ELSE

let usernametwo = prompt("Cual es tu Nombre?");

if (usernametwo == "Carlos"){ // si username es igual a Carlos ejecuta Bienvenido
    console.log("Bienvenido", usernametwo);
} else { // en tal caso de que no sea Carlos el usuario no sera valido
    console.log("Usuario no valido");
}

// Condicional IF - ELSE IF - ELSE

let numero = prompt("escribe un numero del 1 al 10:")

if (numero <= 3) {
    console.error("Es muy bajo");
} else if (numero <= 5) {
    console.warn("you can be better than that");
} else {
    console.log("Ganaste el sorteo");
}

// Al usar prompt se genera un valor tipo string y para convertirlo en valor tipo number se usa:
parseInt() / parseFloat()

//Ejemplo:
// parseInt(prompt("Ingrese un valor:"));


// Operadores logicos:

// == Evalua si los valores son iguales
// === Evalua si los valores son iguales pero mas estricto
// != Evalua si los valores son distintos
// !== Evalua si los valores son distintos pero mas estricto
// <, <=, >, >= Evalua si el valor es menor o mayor que
// && Operador and
// || Operador or
// ! Operador not
