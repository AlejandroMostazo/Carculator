const botones = document.getElementsByClassName("btn");

const pantalla =  document.getElementById("screen");

//recorre los botones, coge sus valores y los pone en el input
for (var i=0; i< botones.length; i++) {
    let valor = botones[i].value;
    botones[i].addEventListener("click", event => {     
        //si ya se ha hecho un calculo cuando el resultado esté en pantalla y pulsemos otra tecla este desaparecerá a no ser que sea un operando
        if (calculado && !isNaN(parseFloat(valor))) {
            pantalla.value = "";
            numeros = "";
        }
        calculado = false
       pantalla.value += valor;
    });
}

