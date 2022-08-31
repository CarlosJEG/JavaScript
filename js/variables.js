// Variables

const sizes = document.querySelectorAll(".sizePizza")
const cost = document.querySelectorAll(".pizza__price")
const addToCart = document.querySelectorAll(".addToCart")

const pizzas = [
    {pizza: "Pizza Pepperoni", cost: 25},
    {pizza: "Pizza Hawaiian", cost: 24.5},
    {pizza: "Pizza Neapolitan", cost: 24},
    {pizza: "Pizza Spain", cost: 25.5},
    {pizza: "Pizza Vegetarian", cost: 26},
    {pizza: "Pizza Margherita", cost: 26.5}
]

const sizePizza = [
    {size: "Regular", factor: 1},
    {size: "large", factor: 1.09},
    {size: "extra large", factor: 1.12}
]

const iva = 1.19
