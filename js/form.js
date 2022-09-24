const btnCancelar = document.querySelector("#cancelar")
const btnAceptar = document.querySelector("#aceptar")
const info = document.querySelectorAll("input")

btnCancelar.addEventListener("click", () => {
    cartelCancelado()
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

    info.forEach(element => {
      element.value = ""
    });
}

btnAceptar.addEventListener("click", () => {
    cartelAceptar()
  })

const cartelAceptar = () => {
  Swal.fire({
    toast: false,
    position: 'center',
    timer: 3000,
    timerProgressBar: true,
    title: 'La compra se ha realizado exitosamente',
    icon: 'success',
    showConfirmButton: false,
  })

  info.forEach(element => {
    element.value = ""
  });
}