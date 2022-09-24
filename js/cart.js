const pizzaSeleccionada = document.querySelector(".carrito__nombreProducto")
const costoPizza = document.querySelector(".carrito__productoPrecio")
const aggProducto = document.querySelector(".carrito__lista")
const btnBebida = document.querySelector(".carrito__aggBebida")
const btnDelivery = document.querySelector(".carrito__aggdelivery")
const totalPrecio = document.querySelector(".carrito__totalprecio")
const btnAceptar = document.querySelector(".carrito__aceptar")
const btnCancelar = document.querySelector(".carrito__cancelar")
const vaciarCarrito = document.querySelector(".carrito__productoSeleccionado")

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

btnCancelar.addEventListener("click", () => {
  cartelCancelado()
  aggProducto.innerHTML = `
  <div class="carrito__listaTitulo">
    <h2>Productos Seleccionados</h2>
  </div>`

})

const cartelCancelado = () => {
  Swal.fire({
      toast: false,
      position: 'center',
      timer: 3000,
      timerProgressBar: true,
      title: 'Se ha cancelado la compra',
      icon: 'error',
      showConfirmButton: false,
    })
}