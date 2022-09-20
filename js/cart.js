const pizzaSeleccionada = document.querySelector(".carrito__nombreProducto")
const costoPizza = document.querySelector(".carrito__productoPrecio")
const aggProducto = document.querySelector(".carrito__lista")
const btnBebida = document.querySelector(".carrito__aggBebida")
const btnDelivery = document.querySelector(".carrito__aggdelivery")
const totalPrecio = document.querySelector(".carrito__totalprecio")

const bebidaText = ["Coca-Cola 2L", 1]
const devileryText = ["Delivery", 5]

pizzaSeleccionada.innerText = localStorage.getItem("Nombre de la Pizza")
costoPizza.innerText += localStorage.getItem("Precio de la Pizza")

const agregandoProd = (name, precio) => {
  aggProducto.innerHTML += `
  <div class="carrito__productoAgg">
      <div class="carrito__nombreProductoAgg">
        <p>${name}</p> 
      </div>
      <div class="carrito__PrecioProductoAgg">
        <p>$ ${precio}</p> 
      </div>
  </div>`
}

btnBebida.addEventListener("click", () => {
  agregandoProd(bebidaText[0], bebidaText[1])
  localStorage.setItem("Precio de bebida", bebidaText[1])
})

btnDelivery.addEventListener("click", () => {
  agregandoProd(devileryText[0], devileryText[1])
  localStorage.setItem("Precio de delivery", devileryText[1])
})

totalPrecio.innerText = localStorage.getItem("Precio de bebida") + localStorage.getItem("Precio de delivery")





















/* 
const btnAceptar = document.querySelector("#btn-aceptar")
const btnCancelar= document.querySelector("#btn-cancelar")

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
}) */