"use strict";
let count_clicks = 0;
let my_button =  document.getElementById("clickBtn");


my_button.addEventListener('click',upgradeDisplay);
function upgradeDisplay(){
    count_clicks++;
    
    let my_Display = document.getElementById("counterDisplay");
    my_Display.innerText = `Click: ${count_clicks}`//actualziamos el display queindica el numero de clicks

    //requisito cada 10 clicks cambia de color el boton
    if((count_clicks%10) == 0){
        let num1 = Math.floor(Math.random()*256); //numeros aleatorios entre 0 y 255
        let num2 = Math.floor(Math.random()*256);
        let num3 = Math.floor(Math.random()*256);
        my_button.style.backgroundColor = `rgb(${num1},${num2},${num3})`; //y luego hacemos los cambios en javascript 
    }
}

//test
