// Variables

const sizes = document.querySelectorAll('.sizePizza')
const cost = document.querySelector(".pizza__price")

const pizzas = [
    {pizza: "Pepperoni", cost: 25},
    {pizza: "Hawaiian", cost: 24.5},
    {pizza: "Neapolitan", cost: 24},
    {pizza: "Spain", cost: 25.5},
    {pizza: "Vegetarian", cost: 26},
    {pizza: "Margherita", cost: 26.5}
]

const sizePizza = [
    {size: "Regular", factor: 1},
    {size: "large", factor: 1.09},
    {size: "extra large", factor: 1.12}
]

const iva = 1.19

// Recorrer un array 

const cargarListado = (select, array) => {
    if (array.length > 0) {
        array.forEach(element => {
            select.innerHTML += `<option value="${element.factor}">${element.size}</option>`
        });
    } else {
        alert("Producto no seleccionado")
    }
}

cargarListado(sizes, sizePizza)

const cargarPrecio = (array) => {
    for (let i = 0; i <= array.length; i++){
        cost.innerText = "$ " + array[i].cost
    }
}

cargarPrecio(pizzas)


// calculo

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

const realizarCalculo = () => {
    const cal = new CalculoPrecio(pizzas[0].cost, sizes.value, iva)
        console.log(cal.calculo())
}

realizarCalculo()