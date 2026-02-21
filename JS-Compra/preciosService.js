let preciosCache = null
const cambioVenta = document.querySelector('.cambioVenta')
const cambioCompra = document.querySelector('.cambioCompra')
const tituloPrecio = document.querySelector('.tituloPrecio')
let precio = 'compra'

cambioCompra.addEventListener('click', ()=>{
    precio = 'compra'
    tituloPrecio.textContent = 'Precio de compra'
})

cambioVenta.addEventListener('click',()=>{
    precio = 'venta'
    tituloPrecio.textContent = 'Precio de venta'
})

export async function obtenerPrecios() {
    if(!preciosCache || precio === 'compra' ){
        const respuesta = await fetch('preciosCompra.json')
        preciosCache = await respuesta.json()
    } 
    if(precio === 'venta'){
        const respuesta = await fetch('preciosVenta.json')
        preciosCache = await respuesta.json()
    }
    return preciosCache
}