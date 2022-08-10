// ARRAYS: Son un tipo de dato que sirve para almacenar valores en forma de lista.

const paises = ["Argentina", "Uruguay", "Chile", "Colombia", "Venezuela", "Mexico"] // Array
//                   0           1         2          3           4          5

// paises.[0] sirve para acceder a un elemento del array


// Recorrer un array:

function ListaPaises() {
    for(let i = 0; i < paises.length; i++) {  // paises.length sirve para saber el 
        console.log(paises[i])                // total de elemento en un array
    }
}

// Agregar y Quitar elementos a un array: se usan metodos para poder agregar elementos a un array

paises.push("Costa Rica") // Agrega un elemento al final del array
paises.unshift("Peru") // Agrega un elemento al inicio del array

paises.pop() // Quita al ultimo elemento del array
paises.shift() // / Quita al primer elemento del array

// Paises.splice(1, 2) = .splice elimina varios elementos desde hasta donde le indiques.
// .concat() = este metodo sirve para fucionar 2 arrays y crea uno nuevo.
// .indexOf() = nos permite conocer el indice de un elemento array.
// .includes() = Verifica si el elemente dentro del array esta o no
// .sort() = Ordena los elemento del array alfabeticamente


// Array de Objetos:

const productos = []

class Producto {
    constructor(id, nombre, importe) {
        this.id = id
        this.nombre = nombre
        this.importe = importe
    }
    precioFinal() {
        return parseFloat((this.importe * 1.19).toFixed(2)) // .toFixed ajusta el valor a 2 decimales
    }
}

function agregarProductos() {
    let id = 2695
    let descripcion = prompt("Ingresa el nombre del producto:")
    let importe = parseInt(prompt("Ingresa el importe:"))
        productos.push(new Producto(id, descripcion, importe))
        console.table(productos)
}

for (let producto of productos) { // Bucle FOR simplificado
    console.table(producto)
}