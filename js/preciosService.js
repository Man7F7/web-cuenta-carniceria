let preciosCache = null

export async function obtenerPrecios() {
    if(!preciosCache){
        const respuesta = await fetch('preciosCompra.json')
        preciosCache = await respuesta.json()
    }
    return preciosCache
}