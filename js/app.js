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

sizes[0].addEventListener("change", () => {
    const cal = new CalculoPrecio(pizzas[0].cost, sizes[0].value, iva)
        cost[0].innerText = "$ " + cal.calculo()
    
    addToCart[0].addEventListener("click", ()=> {
        localStorage.setItem("Precio de la Pizza", JSON.stringify(cal.calculo()))

        const {pizza} = pizzas[0]
        localStorage.setItem("Nombre de la Pizza", JSON.stringify(pizza))
    })
})

sizes[1].addEventListener("change", () => {
    const cal = new CalculoPrecio(pizzas[1].cost, sizes[1].value, iva)
        cost[1].innerText = "$ " + cal.calculo()

    addToCart[1].addEventListener("click", ()=> {
        localStorage.setItem("Precio de la Pizza", JSON.stringify(cal.calculo()))

        const {pizza} = pizzas[1]
        localStorage.setItem("Nombre de la Pizza", JSON.stringify(pizza))
    })
})

sizes[2].addEventListener("change", () => {
    const cal = new CalculoPrecio(pizzas[2].cost, sizes[2].value, iva)
        cost[2].innerText = "$ " + cal.calculo()

    addToCart[2].addEventListener("click", ()=> {
        localStorage.setItem("Precio de la Pizza", JSON.stringify(cal.calculo()))

        const {pizza} = pizzas[2]
        localStorage.setItem("Nombre de la Pizza", JSON.stringify(pizza))
    })
})

sizes[3].addEventListener("change", () => {
    const cal = new CalculoPrecio(pizzas[3].cost, sizes[3].value, iva)
        cost[3].innerText = "$ " + cal.calculo()

    addToCart[3].addEventListener("click", ()=> {
        localStorage.setItem("Precio de la Pizza", JSON.stringify(cal.calculo()))

        const {pizza} = pizzas[3]
        localStorage.setItem("Nombre de la Pizza", JSON.stringify(pizza))
    })
})

sizes[4].addEventListener("change", () => {
    const cal = new CalculoPrecio(pizzas[4].cost, sizes[4].value, iva)
        cost[4].innerText = "$ " + cal.calculo()
    
    addToCart[4].addEventListener("click", ()=> {
        localStorage.setItem("Precio de la Pizza", JSON.stringify(cal.calculo()))

        const {pizza} = pizzas[4]
        localStorage.setItem("Nombre de la Pizza", JSON.stringify(pizza))
    })
})

sizes[5].addEventListener("change", () => {
    const cal = new CalculoPrecio(pizzas[5].cost, sizes[5].value, iva)
        cost[5].innerText = "$ " + cal.calculo()

    addToCart[5].addEventListener("click", ()=> {
        localStorage.setItem("Precio de la Pizza", JSON.stringify(cal.calculo()))

        const {pizza} = pizzas[5]
        localStorage.setItem("Nombre de la Pizza", JSON.stringify(pizza))
    })
})