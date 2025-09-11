//Opciones
const productosAg = document.getElementById("productosAgregados");
const total = document.getElementById("pagoTotal");
const botones = document.getElementById("botones");
const borrar = document.getElementById("borrar");
let suma = [];
let historial = [];

// Productos
const lomo = document.getElementById("lomo");
const espaldilla = document.getElementById("espaldilla");
const bola = document.getElementById("bola");
const cadera = document.getElementById("cadera");
const pepino = document.getElementById("pepino");
const hueso = document.getElementById("hueso");
const costilla = document.getElementById("costilla");
const espinazo = document.getElementById("espinazo");
const molida = document.getElementById("molida");

// Contadores
let contadorLomo = 0;
let contadorEspaldilla = 0;
let contadorBola = 0;
let contadorCadera = 0;
let contadorPepino = 0;
let contadorHueso = 0;
let contadorCostilla = 0;
let contadorEspinazo = 0;
let contadorMolida = 0;

//Boton borrar
borrar.addEventListener("click", () => {
  if (historial.length > 0) {
    let ultimo = historial.pop();
    suma.pop();

    if (ultimo === "espaldilla") {
      contadorEspaldilla--;
      document.getElementById("espaldillaItem").innerText = 
        contadorEspaldilla > 0 ? `Espaldilla - ${contadorEspaldilla}` : "";
    }
    if (ultimo === "lomo"){
        contadorLomo--;
        document.getElementById("lomoItem").innerText =
        contadorLomo > 0 ? `Lomo - ${contadorLomo}` : "";
    }
    if (ultimo === "bola"){
        contadorBola--;
        document.getElementById("bolaItem").innerText=
        contadorBola > 0 ? `Bola - ${contadorBola}` : "";
    }
    if (ultimo === "cadera"){
        contadorCadera--;
        document.getElementById("caderaItem").innerText = 
        contadorCadera > 0 ? `Cadera - ${contadorCadera}` : "";
    }
    if (ultimo === "pepino"){
        contadorPepino--;
        document.getElementById("pepinoItem").innerText = 
        contadorPepino > 0 ? `Pepino - ${contadorPepino}` : "";
    }
    if (ultimo === "hueso"){
        contadorHueso--;
        document.getElementById("huesoItem").innerText = 
        contadorHueso > 0 ? `Hueso - ${contadorHueso}`: "";
    }
    if (ultimo === "costilla"){
        contadorCostilla--;
        document.getElementById("costillaItem").innerText = 
        contadorCostilla > 0 ? `Costilla - ${contadorCostilla}`: "";
    }
    if (ultimo === "espinazo"){
        contadorEspinazo--;
        document.getElementById("espinazoItem").innerText = 
        contadorEspinazo > 0 ? `Espinazo - ${contadorEspinazo}`: "";
    }
    if (ultimo === "molida"){
        contadorMolida--;
        document.getElementById("molidaItem").innerText = 
        contadorMolida > 0 ? `Carne molida - ${contadorMolida}` : "";
    }
  }
});


//Boton resultado final
botones.addEventListener('click',() =>{
    let valores = suma.reduce((acumulado,valorActual)=>acumulado + valorActual,0);
    total.innerHTML = `Total: $${valores.toLocaleString("es-ES")}`
});
 
//Botones productos
lomo.addEventListener('click', ()=>{
    let p = document.getElementById("lomoItem");
    contadorLomo++;
    if(!p){
        p = document.createElement("p");
        p.id = "lomoItem";
        productosAg.appendChild(p);
    }
    p.textContent = `Lomo - ${contadorLomo}` 
    suma.push(10000)
    historial.push("lomo")
});

espaldilla.addEventListener('click',()=>{
    let p = document.getElementById("espaldillaItem");
    contadorEspaldilla++;
    if(!p){
        p = document.createElement("p")
        p.id = "espaldillaItem";
        productosAg.appendChild(p);
    }
    p.textContent = `Espaldilla - ${contadorEspaldilla}`;
    suma.push(9000);
    historial.push("espaldilla");
});

bola.addEventListener('click', ()=>{
   let p = document.getElementById("bolaItem");
   contadorBola++;
   if(!p){
    p = document.createElement("p");
    p.id = "bolaItem";
    productosAg.appendChild(p);
   }
   p.textContent = `Bola - ${contadorBola}`;
    suma.push(10000);
    historial.push("bola");
});

cadera.addEventListener('click', ()=>{
    let p = document.getElementById("caderaItem");
    contadorCadera++
    if(!p){
        p = document.createElement("p");
        p.id = "caderaItem"
        productosAg.appendChild(p)
    }
    p.textContent = `Cadera - ${contadorCadera}`;
    suma.push(9000)
    historial.push("cadera");
});

pepino.addEventListener('click', ()=>{
    let p = document.getElementById("pepinoItem");
    contadorPepino++;
    if(!p){
        p = document.createElement("p");
        p.id = "pepinoItem"
        productosAg.appendChild(p)
    }
    p.textContent = `Pepino - ${contadorPepino}`;
    suma.push(9000);
    historial.push("pepino");
});

hueso.addEventListener('click', ()=>{
    let p = document.getElementById("huesoItem");
    contadorHueso++;
    if(!p){
        p = document.createElement("p");
        p.id = "huesoItem";
        productosAg.appendChild(p);
    }
    p.textContent = `Hueso - ${contadorHueso}`;
    suma.push(5000);
    historial.push("hueso");
});

costilla.addEventListener('click', ()=>{
    let p = document.getElementById("costillaItem");
    contadorCostilla++;
    if(!p){
        p = document.createElement("p");
        p.id = "costillaItem";
        productosAg.appendChild(p);
    }
    p.textContent = `Costilla - ${contadorCostilla}`;
    suma.push(9000);
    historial.push("costilla");
});

espinazo.addEventListener('click', ()=>{
    let p = document.getElementById("espinazoItem");
    contadorEspinazo++;
    if (!p){
        p = document.createElement("p");
        p.id = "espinazoItem";
        productosAg.appendChild(p);
    }
    p.textContent = `Espinazo - ${contadorEspinazo}`;
    suma.push(5000);
    historial.push("espinazo");
});

molida.addEventListener('click', ()=>{
    let p = document.getElementById("molidaItem");
    contadorMolida++;
    if(!p){
        p = document.createElement("p");
        p.id = "molidaItem";
        productosAg.appendChild(p);
    }
    p.textContent = `Carne molida - ${contadorMolida}`;
    suma.push(9000);
    historial.push("molida")
});