// Variables

const sizes = document.querySelectorAll(".sizePizza")
const cost = document.querySelectorAll(".pizza__price")
const addToCart = document.querySelectorAll(".addToCart")
const pizzaTitle = document.querySelectorAll(".pizza__cardTitle")

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

fetch('https://private-anon-ef0568314c-pizzaapp.apiary-mock.com/restaurants/restaurantId/menu?category=Pizza&orderBy=rank')
	.then(response => response.json())
	.then(data => {
        for (let i = 0; i < pizzaTitle.length; i++){
            pizzaTitle[i].innerHTML = `<p>Pizza ${data[i].name}</p>`
        }
    })
	.catch(err => console.error(err));
