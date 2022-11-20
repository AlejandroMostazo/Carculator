

// esta funcion encuentra el ultimo operando que haya en la pantalla
function entontar_ultimo_operando (string) {
    for (let i = string.length-1; i > 0; i--) {
        if (isNaN(parseFloat(string[i])) && string[i] != '.') {
            return i+1;
        }
    }
    return 0;
}


const log = document.getElementById("log");

log.addEventListener("click", event => { 

    let operacion = Math.log10(pantalla.value.slice(entontar_ultimo_operando(pantalla.value), pantalla.value.length));

    operacion = +Number(operacion).toFixed(8);

    pantalla.value = (pantalla.value.slice(0, entontar_ultimo_operando(pantalla.value)) + `${operacion}`);

    calculado = true;
    
});

const ln = document.getElementById("ln");

ln.addEventListener("click", event => { 


    let operacion = Math.log(pantalla.value.slice(entontar_ultimo_operando(pantalla.value), pantalla.value.length)) / Math.log(Math.E);

    operacion = +Number(operacion).toFixed(8);

    pantalla.value = (pantalla.value.slice(0, entontar_ultimo_operando(pantalla.value)) + `${operacion}`);

    calculado = true;

    
});


const seno = document.getElementById("sen");

seno.addEventListener("click", event => { 


    let operacion = Math.sin(pantalla.value.slice(entontar_ultimo_operando(pantalla.value), pantalla.value.length));

    operacion = +Number(operacion).toFixed(8);

    pantalla.value = (pantalla.value.slice(0, entontar_ultimo_operando(pantalla.value)) + `${operacion}`);

    calculado = true;

});

const cos = document.getElementById("cos");

cos.addEventListener("click", event => { 

    let operacion = Math.cos(pantalla.value.slice(entontar_ultimo_operando(pantalla.value), pantalla.value.length));

    operacion = +Number(operacion).toFixed(8);

    pantalla.value = (pantalla.value.slice(0, entontar_ultimo_operando(pantalla.value)) + `${operacion}`);

    calculado = true;
});

const tan = document.getElementById("tan");

tan.addEventListener("click", event => { 

    let operacion = Math.tan(pantalla.value.slice(entontar_ultimo_operando(pantalla.value), pantalla.value.length));

    operacion = +Number(operacion).toFixed(8);

    pantalla.value = (pantalla.value.slice(0, entontar_ultimo_operando(pantalla.value)) + `${operacion}`);

    calculado = true;
});

const potencia2 = document.getElementById("potenciados");

potencia2.addEventListener("click", event => { 

    let operacion = Math.pow(pantalla.value.slice(entontar_ultimo_operando(pantalla.value), pantalla.value.length), 2);

    operacion = +Number(operacion).toFixed(8);

    pantalla.value = (pantalla.value.slice(0, entontar_ultimo_operando(pantalla.value)) + `${operacion}`);

    calculado = true;
});