const btnAgregar = document.querySelector('.botonAg')
const listaProductos = document.querySelector('.productos')
const cantidad = document.querySelector('.cantidad')
const divProductosAgregados = document.querySelector('.productosAg')

// Array con los precios totales de cada producto agregado
import { listaProductosAgregados } from "./estadoPedido.js"
import { obtenerPrecios } from "./preciosService.js"

btnAgregar.addEventListener('click', async ()=>{

    // Variable para obtener el valor del producto que se escogio
   const productoSeleccionado = listaProductos.value
   // Variable para obtener el value del imput de la cantidad de producto
   const cantidadProducto = Number(cantidad.value)
  
    // Manejo para casos que el usuario no ingrese algun campo
   if (!productoSeleccionado || !cantidadProducto){
    alert('Selecciona un producto y cantidad valida')
    return
   }
    // Obtener el precio del producto seleccionado
   const precios = await obtenerPrecios()
   const precioProducto = precios[productoSeleccionado]

    // Calculo del precio total del producto agregado
    const precioTotal = precioProducto * cantidadProducto
    // Precio final del producto agregado al array
    listaProductosAgregados.push(precioTotal)

   // Agregar producto al DOM
   const productoAgregado = document.createElement('p');
   productoAgregado.classList.add('productoag')
   productoAgregado.textContent = `${productoSeleccionado.toUpperCase()} (${cantidadProducto} lb): $${precioTotal.toLocaleString()}`
   divProductosAgregados.appendChild(productoAgregado)

   // Limpiar el input de cantidad
   cantidad.value = ''
})
