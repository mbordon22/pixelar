/* 1. Armar grilla de 20 columnas.
2. Al hacer click en un cuadro que cambie de color (elegir alguno)
3. Armar la grilla con tamaños variables, de acuerdo a un input donde diga la cantidad de columnas. */

const container = document.getElementById("container");
const colorCaja = document.getElementById("color-input");
const columnas = document.getElementById("columnas-input");
const filas = document.getElementById("filas-input");
const botonGenerar = document.getElementById("boton-generar");

botonGenerar.addEventListener("click", function(){

    container.innerHTML = "";

    container.style.gridTemplateColumns = `repeat(${columnas.value}, 1fr)`; //Genera la cantidad de columnas de la grilla

    for(let i = 0; i < columnas.value; i++){
        for(let j = 0; j < filas.value; j++){

            const caja = document.createElement("div"); //Creamos los div
            caja.classList.add("caja"); //Le añado la clase

            container.appendChild(caja); //Guardamos en el container

            caja.addEventListener("click", function(){
                caja.style.backgroundColor = colorCaja.value;   //Añade el color
            })
            
            caja.addEventListener("dblclick", function(){
                caja.style.backgroundColor = "#FFFFFF";     //Quita el color
            })
            
        }
    }
    
});
