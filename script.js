//Opciones
const productosAg = document.getElementById("productosAgregados");
const total = document.getElementById("pagoTotal");
const botones = document.getElementById("botones");
const borrar = document.getElementById("borrar")
let suma = []

// Productos
const lomo = document.getElementById("lomo");
const espaldilla = document.getElementById("espaldilla");
const bola = document.getElementById("bola");
const cadera = document.getElementById("cadera");
const pepino = document.getElementById("pepino");
const hueso = document.getElementById("hueso");
const costilla = document.getElementById("costilla");
const espinazo = document.getElementById("espinazo");

//Boton borrar
borrar.addEventListener('click', ()=>{
    if(productosAg.lastChild){
    productosAg.lastChild.remove();
    suma.pop()
    }
});

//Boton resultado final
botones.addEventListener('click',() =>{
    let valores = suma.reduce((acumulado,valorActual)=>acumulado + valorActual,0);
    total.innerHTML = `Total: $${valores.toLocaleString("es-ES")}`
});

//Botones productos
lomo.addEventListener('click', ()=>{
    let lomo = document.createElement("p")
    lomo.textContent = "Lomo de res o cerdo"
    productosAg.appendChild(lomo)
    suma.push(10000)
});

espaldilla.addEventListener('click',()=>{
    let espaldilla = document.createElement("p")
    espaldilla.textContent = "Espaldilla"
    productosAg.appendChild(espaldilla)
    suma.push(9000)
});

bola.addEventListener('click', ()=>{
    let bola = document.createElement("p")
    bola.textContent = "Bola de res"
    productosAg.appendChild(bola)
    suma.push(10000)
});

cadera.addEventListener('click', ()=>{
    let cadera = document.createElement("p")
    cadera.textContent = "Cadera de res"
    productosAg.appendChild(cadera)
    suma.push(9000)
});

pepino.addEventListener('click', ()=>{
    let pepino = document.createElement("p")
    pepino.textContent = "Pepino de res"
    productosAg.appendChild(pepino)
    suma.push(9000)
});

hueso.addEventListener('click', ()=>{
    let hueso = document.createElement("p")
    hueso.textContent = "Hueso cogote"
    productosAg.appendChild(hueso)
    suma.push(5000)
});

costilla.addEventListener('click', ()=>{
    let costilla = document.createElement("p")
    costilla.textContent = "Costilla de res o cerdo"
    productosAg.appendChild(costilla)
    suma.push(9000)
});

espinazo.addEventListener('click', ()=>{
    let espinazo = document.createElement("p")
    espinazo.textContent = "Espinazo de cerdo"
    productosAg.appendChild(espinazo)
    suma.push(5000)
});