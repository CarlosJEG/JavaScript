const selectPizza = document.querySelector("#optionOne")
const selectCost = document.querySelector("#optionTwo")

selectPizza.innerText = localStorage.getItem("Nombre de la Pizza")
selectCost.innerText += " " + localStorage.getItem("Precio de la Pizza")