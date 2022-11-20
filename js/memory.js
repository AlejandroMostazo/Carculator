const memory = document.getElementById("memory");
 const cmemory = document.getElementById("CE");
 const divm = document.getElementById("m");

 let memoria = "";

 memory.addEventListener("click", event => { 

    //solo se guarda un valor en memoria si esta está vacia, la pantalla tiene algun valor y no tiene operaciones (solo guarda resultados o numeros sueltos)
    //si ya hay un valor en memoria lo muestra en pantalla
    if (memoria == "" && pantalla.value != "" && !isNaN(pantalla.value)) {
        memoria = pantalla.value;
        divm.style.display = "block";
        divm.innerHTML += " = "+memoria;
    } else {
        pantalla.value += memoria;
    }

 });

 cmemory.addEventListener("click", event => { 
    memoria = "";
    divm.style.display = "none";
    divm.innerHTML = "M";
    pantalla.value = "";
 });