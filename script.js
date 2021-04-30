/* 1. Armar grilla de 20 columnas.
2. Al hacer click en un cuadro que cambie de color (elegir alguno)
3. Armar la grilla con tamaños variables, de acuerdo a un input donde diga la cantidad de columnas. */

document.addEventListener("DOMContentLoaded", function(){

    const columnas = 20;
    const filas = 20;
    const container = document.getElementById("container");
    const colorCaja = document.getElementById("color-input");

    for(let i = 0; i < columnas; i++){
        for(let j = 0; j < filas; j++){

            const caja = document.createElement("div"); //Creamos los div
            caja.classList.add("caja"); //Le añado la clase

            container.appendChild(caja); //Guardamos en el container

            caja.addEventListener("click", function(){
                
                caja.style.backgroundColor = colorCaja.value;

                /* if(caja.style.backgroundColor === "#FFFFFF"){
                    caja.style.backgroundColor = colorCaja.value;
                }
                else{
                    caja.style.backgroundColor = "#FFFFFF";
                } */
            })
            
            caja.addEventListener("dblclick", function(){
                caja.style.backgroundColor = "#FFFFFF";
            })
        }
    }
    
});
