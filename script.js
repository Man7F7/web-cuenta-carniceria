const botonAg = document.getElementById('botonAg');
const botonCa = document.getElementById('botonCa');
const productos = document.getElementById('productos');
const cantidad = document.getElementById('cantidad');
const productosAg = document.getElementById('productosAg');
const totalFinal = document.getElementById('totalFinal');
const producto = {
    Lomo: 10000,
    Espaldilla: 9000,
    Bola: 10000,
    Cadera: 9000,
    Pepino: 9000,
    Hueso: 5000,
    Costilla: 9000,
    Espinazo: 5000,
    Molida: 9000
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
  item.textContent = `${prodSeleccionado} (${cant} lb): $${total.toLocaleString()}`;
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