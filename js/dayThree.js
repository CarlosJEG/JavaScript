// Ciclos por conteo

/* 
for (Desde; Hasta; Actualizacion) {
    Se ejecutara una serie de codigo hasta cierto numero de veces que le indiques
}
*/ 

//Ejemplo:

for (let i = 1; i <=10; i++){
    console.log("Iteracion Nro", i);
}

// Se le puede agregar una condicion al FOR, por ejemplo:

for (let i = 1; i <=10; i++){
    console.log("Iteracion Nro", i);
    if (i === 5) {
        break // break se utiliza para cortar el ciclo - Tambien esta la propiedad continue
    }
} 

// Ciclos condicionales

let seguimos = true;
let num = parseInt(prompt("Ingresa un numero:"));
let factor = 1

// Ciclo While

while(seguimos == true){ // Solo se ejecutara el ciclo si la condicion se cumple
    console.log("Resultado", num * factor);
    seguimos = confirm("Deseas continuar?");
    if(seguimos){ // si "seguimos" sigue valiendo true se seguira ejecutando el ciclo
        factor++
    }
}

// Ciclo do While

/* se traduce a, haz esto primero y luego evalua la condicion

do {           
    console.log("Resultado", num * factor);
    seguimos = confirm("Deseas continuar?");
    if(seguimos){ 
        factor++
    }
}while(seguimos == true) // esta parte seria la condicion
*/

// Condicional Switch

let color = prompt("Ingrese un color:");

// .toLocaleLowerCase() = Convierte todo el texto en minuscula
// .toLocaleUpperCase() = Convierte todo el texto en mayuscula

switch (color.toLocaleLowerCase()) { // Variable
    case "negro": // si la variable es "negro" ejecuta esto
        console.log("Si, tenemos el color", color);
        break
    case "rojo": // si la variable es "rojo" ejecuta esto
        console.log("Si, tenemos el color", color);
        break
    case "verde": // si la variable es "verde" ejecuta esto
        console.log("Si, tenemos el color", color);
        break
    default:
        console.warn("No trabajamos con ese color");
}
