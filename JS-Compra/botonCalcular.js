const btnCalcular = document.querySelector('.botonCa')
const totalFinal = document.querySelector('.totalFinal') 
import { listaProductosAgregados } from "./estadoPedido.js"

btnCalcular.addEventListener('click', ()=>{
    // Manejo de casos que no se haya agregado ningun producto para calcular el precio final
    if (listaProductosAgregados.length === 0){
        alert('No hay productos agregados')
        return
    }

    // Calculo del total del pedido
    const totalFinalVenta = listaProductosAgregados.reduce((acumulado, valorInicial)=> acumulado + valorInicial, 0)
    
    //Agregar el precio final del pedido en el DOM
    totalFinal.textContent = `$${totalFinalVenta.toLocaleString()}`
})
