const cambio = document.getElementById("cambio");

let positivo = true;

cambio.addEventListener("click", event => { 
    
    if(positivo) {
        for (let i = pantalla.value.length-1; i >= 0; i--) {
            if (isNaN(parseFloat(pantalla.value[i-1])) && pantalla.value[i] != '.' || i == 0) {
                //elimino el ultimo numero y lo cambio por el negativo
                pantalla.value = pantalla.value.slice(0, i) + (-pantalla.value.slice(i, pantalla.value.length));
                positivo=false;
                break;
            }
        }
    } else {
        for (let i = pantalla.value.length-1; i >= 0; i--) {
            if (isNaN(parseFloat(pantalla.value[i-1])) && pantalla.value[i] != '.' || i == 0) {
                //cambio el ultimo numero y su signo y so cambio por su positivo
                pantalla.value = pantalla.value.slice(0, i-1) + (-1 * pantalla.value.slice(i-1, pantalla.value.length));
                positivo=true;
                break;
            }
        }
    }
    
});
