/*
COMPROBACION DE FORMULARIO
*/
function comprobar(event){
    //Comprobación campo nick
    if(nick.value.length==0){
        //Ponemos el foco en la caja del nick
        nick.focus();
        //Salimos
        event.preventDefault();
        return false;
    }else if(tamano.value=="0"){
        //Ponemos el foco en la caja del nick
        tamano.focus();
        //Salimos
        event.preventDefault();
        return false;
    }
    return true;
}

//Añadimos el listener para el submit del formulario
const form_entrada = document.getElementById("form_entrada");
const nick = document.getElementById("nick");
const tamano = document.getElementById("tamano");
form_entrada.addEventListener('submit', comprobar);