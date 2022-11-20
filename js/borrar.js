const borra = document.getElementById("borrar");

borra.addEventListener("click", event => { 
    if (pantalla.value != "") {      
        pantalla.value = pantalla.value.slice(0, pantalla.value.length-1);
    }
 });


const clear = document.getElementById("C");

clear.addEventListener("click", event => {
    pantalla.value = "";
    numeros = pantalla.value;
 });