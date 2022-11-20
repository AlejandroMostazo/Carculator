const historial = document.getElementById("verhistorial");

const calcular = document.getElementById("igual");

let calculado = false;


calcular.addEventListener("click", event => { 

    //hacemos un do while por si quieres hacer varias operaciones con caracteres especiales por ejemplo pi + E
    do {
        
    

    let encontrado;
    let rango = [];
    let operacion;
    //esto es un switch de includes, esta función comprueba si en un array o string existe el elemento pasado por parámetro
    // esto porque hay excepciones
    switch(true) {
        case pantalla.value.includes('%'):
            //identificamos donde está el %
            encontrado = pantalla.value.indexOf("%", 0); 
            //busca a partir de % hacia atras hasta encontrar un operador
            for (let i = encontrado-1; i > 0 && rango.length != 2; i--) {
                // isNaN comprueba si un valor es NaN 
                // escoge el rango de los operadores que va a necesitar % es decir por ejemplo 5-55+120% = [3, 6] 
                // esos numeros referencian donde estan los operandos, luego cortamos donde nos interese y hacemos el calculo
                if (isNaN(parseFloat(pantalla.value[i])) && pantalla.value[i] != '.') {
                    rango.push(i);
                }
            }
            
            //en función del operando hace un calculo u otro
            switch (pantalla.value[rango[0]]) {
                case '+':
                    operacion = parseFloat(pantalla.value.slice(rango[1]+1, rango[0])) + (parseFloat(pantalla.value.slice(rango[1]+1, rango[0])) * parseFloat(pantalla.value.slice(rango[0]+1, encontrado)/100));
                    break;
                case '-':
                    operacion = parseFloat(pantalla.value.slice(rango[1]+1, rango[0])) - (parseFloat(pantalla.value.slice(rango[1]+1, rango[0])) * parseFloat(pantalla.value.slice(rango[0]+1, encontrado)/100));
                    break;
                case '*':
                    operacion = parseFloat(pantalla.value.slice(rango[1]+1, rango[0])) * (parseFloat(pantalla.value.slice(rango[0]+1, encontrado)/100));
                    break;
            }
                operacion = +Number(operacion).toFixed(14);
            //hacemos el porcentaje y luego introducimos el numero en el input para que sigua calculando lo que siga por delante y/o detras
             pantalla.value = pantalla.value.slice(0, rango[1]+1) + `${operacion}` + pantalla.value.slice(encontrado+1, pantalla.value.length);
            break;

        case pantalla.value.includes('V'):
            encontrado = pantalla.value.indexOf("V", 0);
            //buscamos cuando termina el numero de la raiz cuadrada
            for (let i = encontrado+1; i <= pantalla.value.length; i++) {
                if (isNaN(parseFloat(pantalla.value[i])) && pantalla.value[i] != '.' || i == pantalla.value.length) {
                    rango.push(i);
                    break;
                }
            }
            //raiz cuadrada
            operacion = Math.sqrt(pantalla.value.slice(encontrado+1, rango[0]));
            operacion = +Number(operacion).toFixed(14);
            //hacemos el calculo y luego introducimos el numero en el input para que sigua calculando lo que siga por delante y detras
             pantalla.value = (pantalla.value.slice(0, encontrado) + `${operacion}` + pantalla.value.slice(rango[0], pantalla.value.length));
            break;

            //casos de cientifica --------------------------------------------------------------------------------------
        case pantalla.value.includes('n'):
            encontrado = pantalla.value.indexOf("n", 0);
            operacion = Math.PI;
            operacion = +Number(operacion).toFixed(14);
            // introducimos el numero en el input para que sigua calculando lo que siga por delante y detras
                pantalla.value = (pantalla.value.slice(0, encontrado) + `${operacion}` + pantalla.value.slice(encontrado+1, pantalla.value.length));
            break;

        case pantalla.value.includes('E'):
            encontrado = pantalla.value.indexOf("E", 0);
            operacion = Math.E;
            operacion = +Number(operacion).toFixed(14);
            // introducimos el numero en el input para que sigua calculando lo que siga por delante y detras
                pantalla.value = (pantalla.value.slice(0, encontrado) + `${operacion}` + pantalla.value.slice(encontrado+1, pantalla.value.length));
            break;

        case pantalla.value.includes('R'):
            encontrado = pantalla.value.indexOf("R", 0);
            operacion = Math.random();
            operacion = +Number(operacion).toFixed(14);
            // introducimos el numero en el input para que sigua calculando lo que siga por delante y detras
            pantalla.value = (pantalla.value.slice(0, encontrado) + `${operacion}` + pantalla.value.slice(encontrado+1, pantalla.value.length));
            break;
        case pantalla.value.includes('!'):
            encontrado = pantalla.value.indexOf("!", 0);
            let operador;
            for (let i = pantalla.value.length-2; i > 0; i--) {
                if (isNaN(parseFloat(pantalla.value[i])) && pantalla.value[i] != '.') {
                    operador = i;
                    break;
                }
            }
            let n = pantalla.value.slice(operador, encontrado);
            operacion = 1; 
            for (i=1; i<=n; i++) {
                operacion = operacion * i; 
            }
            operacion = +Number(operacion).toFixed(14);
            // introducimos el numero en el input para que sigua calculando lo que siga por delante y detras
            pantalla.value = (pantalla.value.slice(0, encontrado-1) + `${operacion}` + pantalla.value.slice(encontrado+1, pantalla.value.length));
            break;

        case pantalla.value.includes('m'):
            encontrado = pantalla.value.indexOf("m", 0);
            operacion = +Number(operacion).toFixed(14);
            // introducimos el numero en el input para que sigua calculando lo que siga por delante y detras
            pantalla.value = (pantalla.value.slice(0, encontrado) + '%' + pantalla.value.slice(encontrado+1, pantalla.value.length));
            break;

        case pantalla.value.includes('^'):
            encontrado = pantalla.value.indexOf("^", 0);
            //encuentra el primer operando a partir del ^
            for (let i = encontrado+1; i <= pantalla.value.length; i++) {
                if (isNaN(parseFloat(pantalla.value[i])) && pantalla.value[i] != '.' || i == pantalla.value.length) {
                    rango.push(i);
                    break;
                }     
            }
            //encuentra el segundo operando a partir del ^
            for (let i = encontrado-1; i >= 0; i--) {
                if(i == 0) {
                    rango.push(i);
                    break; 
                }
                if (isNaN(parseFloat(pantalla.value[i])) && pantalla.value[i] != '.') {
                    rango.push(i+1);
                    break;
                }     
            }
            operacion = Math.pow(pantalla.value.slice(rango[1], encontrado), pantalla.value.slice(encontrado+1, rango[0]));
            operacion = +Number(operacion).toFixed(14);
            // introducimos el numero en el input para que sigua calculando lo que siga por delante y detras
            pantalla.value = (pantalla.value.slice(0, rango[1]) + `${operacion}` + pantalla.value.slice(rango[0], pantalla.value.length));
            console.log(pantalla.value);
            break;
    }

} while (isNaN(+Number(eval(pantalla.value)).toFixed(14)));


    //antes de hacer el calculo lo introducimos en el historial
    //y el if discrimina si se ha hecho una operación o no para que no puedas dar al = infinitamente
    //para ello buscamos que haya algun operando en la pantalla
    for (let i = 0; i < pantalla.value.length; i++) {
        if (isNaN(parseFloat((pantalla.value[i]))) && pantalla.value[i] != ".") {
            historial.innerHTML += `<p>${pantalla.value} = ${+Number(eval(pantalla.value)).toFixed(14)}</p>`;
            break;
        }        
    }
    
    

    //para hacer que puedas intercalar cualquier otra operación antes o despues de las excepciones igualmente se ejecutará la funcion

    //calcula lo que pases por pantalla de forma automatica teniendo en cuenta los decimales
    pantalla.value = +Number(eval(pantalla.value)).toFixed(14);
    calculado = true;

    

});

