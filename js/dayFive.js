// Los Objetos son un conjunto de valores agrupados en una misma varible

// Objetos Literales

const trabajador = {
    nombre: "Carlos",
    apellido: "Galue",
    cargo: "Web developer",
    ingreso: "2022-11-05"
}

// para acceder a un elemento del objeto se puede escribir trabajador.cargo por ejemplo

// Funciones Constructora

function Empleado(nombre, apellido, cargo, ingreso) {
    this.nombre = nombre        // this. Es un metodo que nos sirve para entender
    this.apellido = apellido    // que es un objeto y no una funcion
    this.cargo = cargo
    this.ingreso = ingreso
}

// la funcion constructora nos permite crear nuevos objetos ingresando valores de la siguiente manera:

const empleado1 = new Empleado("Carlos", "Galue", "Web developer front-end", "2022-11-02");


// Metodos: son funciones dentro de un objeto

function Producto(nombre, precio, stock) {
    this.nombre = nombre
    this.precio = precio
    this.stock = stock
    this.precioConIva = function() {   // asi se crea un metodo adentro de un objeto
        let precioFinal = this.precio * 1.19
        return "$ " + precioFinal
    }
}

const producto1 = new Producto("Notebook", 350, 20);


// Clases JS - sugar syntax: Basicamente es lo mismo que
// las funciones constructoras pero con diferente sintaxis

class Productos {
    constructor(nombre, precio, stock) {
        this.nombre = nombre
        this.precio = precio
        this.stock = stock
    }
    precioConIva() {
        let precioFinal = this.precio * 1.19
        return "$ " + precioFinal
    }
}
