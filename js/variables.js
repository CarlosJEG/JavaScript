// Variables

const sizes = document.querySelectorAll(".sizePizza")
const cost = document.querySelectorAll(".pizza__price")
const addToCart = document.querySelectorAll(".addToCart")

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

const iva = 1.19

