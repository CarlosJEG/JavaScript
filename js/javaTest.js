const btnPizzaP = document.querySelector("#pizzaP")
const btnPizzaH = document.querySelector("#pizzaH")
const btnPizzaN = document.querySelector("#pizzaN")
const btnPizzaE = document.querySelector("#pizzaE")
const btnPizzaV = document.querySelector("#pizzaV")
const btnPizzaM = document.querySelector("#pizzaM")
const pizzaCard = document.querySelector(".pizza__card")

const cargarContenido = (i) => {
    pizzaCard.innerHTML =`
    <img src="./img/${i}.jpg" alt="pizza">
    <p class="pizza__cardTitle">${pizzas[i].pizza}</p>
    <p class="pizza__cardDescription" >Pizza with homemade spicy beef sausage</p>
    <p class="pizza__price">$ ${precio}</p>
    <select>
        <option selected disabled value="0">--- Tamaño de la pizza ---</option>
        <option value="${sizePizza[0].factor}">${sizePizza[0].size}</option>
        <option value="${sizePizza[1].factor}">${sizePizza[1].size}</option>
        <option value="${sizePizza[2].factor}">${sizePizza[2].size}</option>
    </select>
    <div class="selectCont">
        <label for="">Cantidad</label>
        <input type="number" id="cantidad" max="20" min="1">
        <label for="">delivery</label>
        <input type="checkbox" id="Delivery">
    </div>
    <a href="./cart.html">
        <button class="addToCart">Añadir al carrito</button> 
    </a>` 
}

btnPizzaP.addEventListener("click", () => {
    cargarContenido(0)
    const precio = precioFinal(1)
})
btnPizzaH.addEventListener("click", () => {
    cargarContenido(1)
})
btnPizzaN.addEventListener("click", () => {
    cargarContenido(2)
})
btnPizzaE.addEventListener("click", () => {
    cargarContenido(3)
})
btnPizzaV.addEventListener("click", () => {
    cargarContenido(4)
})
btnPizzaM.addEventListener("click", () => {
    cargarContenido(5)
})

/* ________________________________________ */

// Recorrer un array 

const cargarListado = (sizes, sizePizza) => {
    for (let i = 0; i < sizes.length; i++){
        const listado = sizes[i]
        listado.innerHTML +=`
        <option value="${sizePizza[0].factor}">${sizePizza[0].size}</option>
        <option value="${sizePizza[1].factor}">${sizePizza[1].size}</option>
        <option value="${sizePizza[2].factor}">${sizePizza[2].size}</option>`
    }
}
cargarListado(sizes, sizePizza)

const precioFinal = (i) => {
    return total = pizzas[i].cost + sizePizza[0].factor + iva
}