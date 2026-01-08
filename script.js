const botonAg = document.getElementById('botonAg');
const botonCa = document.getElementById('botonCa');
const productos = document.getElementById('productos');
const cantidad = document.getElementById('cantidad');
const productosAg = document.getElementById('productosAg');
const totalFinal = document.getElementById('totalFinal');
const producto = {
    lomo: 10000,
    espaldilla: 9000,
    bola: 10000,
    cadera: 9000,
    pepino: 9000,
    hueso: 5000,
    costilla: 9000,
    espinazo: 5000,
    molida: 9000
};
// Array para guardar los productos agregados
const listaProductos = [];

botonAg.addEventListener('click', () => {
  const prodSeleccionado = productos.value;
  const cant = Number(cantidad.value);

  if (!prodSeleccionado || !cant) {
    alert('Selecciona un producto y una cantidad válida');
    return;
  }

  const precio = producto[prodSeleccionado];
  const total = precio * cant;
  
  // Guardar en el arreglo
    listaProductos.push(total);

  // Agregamos el producto a la lista
  const item = document.createElement('p');
  item.classList.add('productoag')
  item.textContent = `${prodSeleccionado.toUpperCase()} (${cant} lb): $${total.toLocaleString()}`;
  productosAg.appendChild(item);

  // Limpia el input cantidad
  cantidad.value = '';
});

botonCa.addEventListener('click', () => {
    if (listaProductos.length === 0) {
        alert('No hay productos agregados');
        return;
    }

    // Sumar todos los totales
    const totalFinalVenta = listaProductos.reduce((acc, val) => acc + val, 0);

    // Mostrar total en pantalla
    totalFinal.textContent = `$${totalFinalVenta.toLocaleString()}`;
});