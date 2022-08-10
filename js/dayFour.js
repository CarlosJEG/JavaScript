// Funcion

function nombreDeLaFuncion () {
    console.log("Estructura de la funcion");
}

nombreDeLaFuncion(); // Asi se llama a una funcion 

// Funcion con parametros

function multiplicar(num1, num2) { // Al momento de llamar a la funcion tendras que ingresar los valores
    console.log("resultado", num1 * num2);
}

// Funcion con retorno

function calcular(numero1, numero2) {
    return numero1 * numero2  // El return te devuelve la operacion que quieres realizar
} 

// Ejemplo y ejercicio de calculadora:

function calculartwo() {
    let primerNro = parseInt(prompt("Ingresa el primer nro:"));
    let segundoNro = parseInt(prompt("Ingresa el segundo nro:"));
    let operador = prompt("Selecciona una operacion: +, -, *, /");
    console.log("El resultado es:", realizarCalculo(primerNro, segundoNro, operador));
}

function realizarCalculo(num1, num2, ope) {
    switch(ope) {
        case "+":
            return num1 + num2
        case "-":
            return num1 - num2
        case "*":
            return num1 * num2
        case "/":
            return num1 / num2
        default:
            return "Error en el calculo"
    }
}

// Scope: Variables globales y Variables locales

// Variables Globales: Son variables que se pueden declarar afuera de una funcion, switch, etc
// y se pueden ejecutar en cualquien momento y en cualquier lugar de la aplicacion.

// Variables Locales: Son variables que se declarar adentro de una funcion por ejemplo y solo
// se puede ejecutar en dicha funcion.


// Funciones Anonimas:

const precioConIva = function() { // son funciones que se crea con la palabra reservada CONST
    return 1500 * 1.21
}

// Funciones Flecha: Simplifica la estructura de una funcion

const cualEsTuEdad = () => {  // se omite la palabra reservada function
    return 2022 - 1975  // Este tipo de funcion cuenta con un return implicito, es decir,
    }                   // se puede omitir la palabra return
