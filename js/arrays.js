const productosParaVender = [];
const iva = 1.19;

class Producto {
    constructor(nombre, precio, stock) {
        this.nombre = nombre
        this.precio = precio
        this.stock = stock
    }
    precioConIva() {
        return parseFloat((this.precio * iva).toFixed(2));
    }
}

function nuestrosProductos() {
    let nombre = prompt("Que comida deseas vender:");
    let precio = parseInt(prompt("En que precio lo venderas:"));
    let stock = parseInt(prompt("Cuanto stock tienes disponible:"));
        productosParaVender.push(new Producto(nombre, precio, stock));
        console.table(productosParaVender);
}
