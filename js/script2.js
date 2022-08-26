// Variables

const sizes = document.querySelectorAll(".sizePizza")
const cost = document.querySelectorAll(".pizza__price")

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

const cargarListado = (sizes, sizePizza) => {
    for (let i = 0; i < sizes.length; i++){
        const listado = sizes[i]
        listado.innerHTML += `
        <option value="${sizePizza[0].factor}">${sizePizza[0].size}</option>
        <option value="${sizePizza[1].factor}">${sizePizza[1].size}</option>
        <option value="${sizePizza[2].factor}">${sizePizza[2].size}</option>`
    }
}
cargarListado(sizes, sizePizza)

const cargarPrecio = (cost) => {
    for (let i = 0; i < cost.length; i++){
        const precio = cost[i]
        precio.innerText = "$ " + pizzas[i].cost
    }
}
cargarPrecio(cost)

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
    const cal = new CalculoPrecio(pizzas[1].cost, sizes[1].value, iva)
        cost[1].innerText = "$ " + cal.calculo()
        console.log(cal)
}

realizarCalculo()

