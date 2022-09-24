const tituloPizza = document.querySelectorAll(".pizza__cardTitle")
const tamanoPizza = document.querySelectorAll(".sizePizza")
const precio = document.querySelectorAll(".pizza__price")
const cantidad = document.querySelectorAll(".cantidad")
const agregarAlCarrito = document.querySelectorAll(".addToCart")
const mostrarBtn = document.querySelector(".goToCart")

const pizzas = [
    {pizza: "Pizza Pepperoni", cost: 25},
    {pizza: "Pizza Hawaiana", cost: 24.5},
    {pizza: "Pizza Napolitana", cost: 24},
    {pizza: "Pizza Española", cost: 25.5},
    {pizza: "Pizza Vegetariana", cost: 26},
    {pizza: "Pizza Margarita", cost: 26.5}
]

const sizePizza = [
    {size: "Regular", factor: 1},
    {size: "Mediana", factor: 1.08},
    {size: "Grande", factor: 1.12}
]

const deliveryCosto = 2.4
const iva = 1.19


const cargarSeleccion = () => {
    for (let i = 0; i < tamanoPizza.length; i++) {
        tamanoPizza[i].innerHTML += `
        <option value="${sizePizza[0].factor}">${sizePizza[0].size}</option>
        <option value="${sizePizza[1].factor}">${sizePizza[1].size}</option>
        <option value="${sizePizza[2].factor}">${sizePizza[2].size}</option>`
    }
}
cargarSeleccion()

class CalculoPrecio {
    constructor(pizzaCost, factorSize, iva) {
        this.pizzaC = pizzaCost
        this.factorS = parseFloat(factorSize)
        this.iva = parseFloat(iva)
    }
    calculo() {
        let resultado = (this.pizzaC * this.factorS * this.iva).toFixed(2)
        return resultado
    }
}

tamanoPizza[0].addEventListener("change", () => {
    const calculo = new CalculoPrecio(pizzas[0].cost, tamanoPizza[0].value, iva)
    resultado = precio[0].innerText = "$ " + calculo.calculo()
})

tamanoPizza[1].addEventListener("change", () => {
    const calculo = new CalculoPrecio(pizzas[1].cost, tamanoPizza[1].value, iva)
    resultado = precio[1].innerText = "$ " + calculo.calculo()
})

tamanoPizza[2].addEventListener("change", () => {
    const calculo = new CalculoPrecio(pizzas[2].cost, tamanoPizza[2].value, iva)
    resultado = precio[2].innerText = "$ " + calculo.calculo()
})

tamanoPizza[3].addEventListener("change", () => {
    const calculo = new CalculoPrecio(pizzas[3].cost, tamanoPizza[3].value, iva)
    resultado = precio[3].innerText = "$ " + calculo.calculo()
})

tamanoPizza[4].addEventListener("change", () => {
    const calculo = new CalculoPrecio(pizzas[4].cost, tamanoPizza[4].value, iva)
    resultado = precio[4].innerText = "$ " + calculo.calculo()
})

tamanoPizza[5].addEventListener("change", () => {
    const calculo = new CalculoPrecio(pizzas[5].cost, tamanoPizza[5].value, iva)
    resultado = precio[5].innerText = "$ " + calculo.calculo()
})

agregarAlCarrito[0].addEventListener("click", () => {
    localStorage.setItem("Precio de la Pizza", resultado)
    localStorage.setItem("Nombre de la Pizza", pizzas[0].pizza)
    cartel()
    showbtn()
})

agregarAlCarrito[1].addEventListener("click", () => {
    localStorage.setItem("Precio de la Pizza", resultado)
    localStorage.setItem("Nombre de la Pizza", pizzas[1].pizza)
    cartel()
    showbtn()
})

agregarAlCarrito[2].addEventListener("click", () => {
    localStorage.setItem("Precio de la Pizza", resultado)
    localStorage.setItem("Nombre de la Pizza", pizzas[2].pizza)
    cartel()
    showbtn()
})

agregarAlCarrito[3].addEventListener("click", () => {
    localStorage.setItem("Precio de la Pizza", resultado)
    localStorage.setItem("Nombre de la Pizza", pizzas[3].pizza)
    cartel()
    showbtn()
})

agregarAlCarrito[4].addEventListener("click", () => {
    localStorage.setItem("Precio de la Pizza", resultado)
    localStorage.setItem("Nombre de la Pizza", pizzas[4].pizza)
    cartel()
    showbtn()
})

agregarAlCarrito[5].addEventListener("click", () => {
    localStorage.setItem("Precio de la Pizza", resultado)
    localStorage.setItem("Nombre de la Pizza", pizzas[5].pizza)
    cartel()
    showbtn()
})

const cartel = () => {
    Swal.fire({
        toast: true,
        position: 'top-end',
        timer: 5000,
        timerProgressBar: true,
        title: 'Se ha agregado tu pizza al carrito correctamente',
        icon: 'success',
        showConfirmButton: false,
      })
}

const showbtn = () => {
    mostrarBtn.classList.remove("hide")
}

function cargarDatos () {
    fetch("datos.json")
        .then(response => response.json())
        .then(pizzaTile => {
            for (let i = 0; i < tituloPizza.length; i++) {
                tituloPizza[i].innerText = pizzaTile[i].name
            }
        })
}

cargarDatos()