"use strict"
const cien = document.getElementById("cien");

const botons = document.getElementsByClassName("btn");
const botonscien = document.getElementsByClassName("cien");

const conent = document.getElementById("botones");

let bol = false


cien.addEventListener("click", event => { 
     

    if (bol) {
        document.getElementById("m").style.top = '26%';
        document.getElementById("brillo").style.top = '14.16%';
        document.getElementById("brillo2").style.top = '14.16%';
        conent.style.justifyContent = 'center';
        for (let i = 0; i < botons.length; i++) {
            botons[i].style.width = '70px';
            botons[i].style.margin = '10px';
            botons[i].setAttribute('data-class', ''); 
        }
        for (let i = 0; i < botonscien.length; i++) {
            botonscien[i].style.display = "none";            
        }

        bol = false;
    } else {
        document.getElementById("m").style.top = '27.3%';
        document.getElementById("brillo").style.top = '15.55%';
        document.getElementById("brillo2").style.top = '15.55%';
        conent.style.justifyContent = 'space-around';
        for (let i = 0; i < botons.length; i++) {
            botons[i].style.width = '55px';
            botons[i].style.margin = '4px';
            botons[i].setAttribute('data-class', 'before'); 
        }
        for (let i = 0; i < botonscien.length; i++) {
            botonscien[i].style.display = "block";            
        }

        bol = true;
    }
    
});



    