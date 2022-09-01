const selectPizza = document.querySelector("#optionOne")
const selectCost = document.querySelector("#optionTwo")
const btnAceptar = document.querySelector("#btn-aceptar")
const btnCancelar= document.querySelector("#btn-cancelar")

selectPizza.innerText = localStorage.getItem("Nombre de la Pizza")
selectCost.innerText += " " + localStorage.getItem("Precio de la Pizza")

btnAceptar.addEventListener("click", () => {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Has comprado la pizza',
        showConfirmButton: false,
        timer: 1500
      })
})

btnCancelar.addEventListener("click", () => {
    Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Has cancelado el pedido',
        showConfirmButton: false,
        timer: 1500
      })
})