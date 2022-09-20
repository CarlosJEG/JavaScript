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