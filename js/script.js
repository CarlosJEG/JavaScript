let comida = prompt("Que desea comer hoy? Tenemos: pizza, hamburguesa y sushi");
let delivery = confirm("Deseas delivey?");
const iva = 250;
const deliverycost = 3000

switch (comida) {
    case "pizza":
        if (delivery){
            console.log("Buenisimo ordenaste pizza con delivery serian: " + [7000+deliverycost+iva]);
        }else {
            console.log("Buenisimo ordenaste pizza serian: " + [7000+iva]);
        }
    break;
    case "hamburguesa":
        if (delivery){
            console.log("Buenisimo ordenaste hamburguesa con delivery serian: " + [5000+deliverycost+iva]);
        }else {
            console.log("Buenisimo ordenaste hamburguesa serian: " + [5000+iva]);
        }
    break;
    case "sushi":
        if (delivery){
            console.log("Buenisimo ordenaste sushi con delivery serian: " + [6000+deliverycost+iva]);
        }else {
            console.log("Buenisimo ordenaste sushi serian: " + [6000+iva]);
        }
    break;
    default:
        console.log("La orden no es valida");
    break;
}
