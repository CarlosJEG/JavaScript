const productos = []
let carrito = []

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre
        this.precio = precio
    }
    precioFinal() {
        return parseFloat((this.precio * 1.19).toFixed(2))
    }
}

function agregandoProductos() {
    productos.push(new Producto("Pizza Pepperoni" , 11000))
    productos.push(new Producto("Pizza Hawaiana" , 11500))
    productos.push(new Producto("Pizza Napolitana" , 12500))
    productos.push(new Producto("Pizza Española" , 10000))
    productos.push(new Producto("Pizza Vegetariana" , 12000))
    productos.push(new Producto("Pizza Margarita" , 10500))
}

agregandoProductos() 

function SeleccionarProductos() {
    let pizza = prompt("Que pizza deseas comprar? - Pepperoni - Hawaiana - Napolitana - Española - Vegetariana - Margarita")
    switch (pizza) {
        case "Pepperoni":
            carrito = productos.splice(0, 1)
            alert("Ordenaste la siguiente pizza: " + carrito[0].nombre + " tiene un precio de: " + carrito[0].precio)
        break
        case "Hawaiana":
            carrito = productos.splice(1, 1)
            alert("Ordenaste la siguiente pizza: " + carrito[0].nombre + " tiene un precio de: " + carrito[0].precio)
        break
        case "Napolitana":
            carrito = productos.splice(2, 1)
            alert("Ordenaste la siguiente pizza: " + carrito[0].nombre + " tiene un precio de: " + carrito[0].precio)
        break
        case "Española":
            carrito = productos.splice(3, 1)
            alert("Ordenaste la siguiente pizza: " + carrito[0].nombre + " tiene un precio de: " + carrito[0].precio)
        break
        case "Vegetariana":
            carrito = productos.splice(4, 1)
            alert("Ordenaste la siguiente pizza: " + carrito[0].nombre + " tiene un precio de: " + carrito[0].precio)
        break
        case "Margarita":
            carrito = productos.splice(5, 1)
            alert("Ordenaste la siguiente pizza: " + carrito[0].nombre + " tiene un precio de: " + carrito[0].precio)
        break
        default:
            alert("Producto no disponible")
    }
}


const sizepizza = ["Regular", "large", "extra large"]


function agregandoElementos() {
    const selectElement = document.getElementById("sizePizza", "sizePizza2")
        selectElement.innerHTML += `
        <option>` + sizepizza[0] + `</option>
        <option>` + sizepizza[1] + `</option>
        <option>` + sizepizza[2] + `</option>`
}

agregandoElementos()

const ordernarPizza = document.querySelector("#OrdenPizza")

ordernarPizza.addEventListener("click", SeleccionarProductos)

