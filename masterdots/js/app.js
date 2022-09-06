/*
COMPROBACION DE FORMULARIO
*/
function comprobar(event){
    //Comprobación campo nick
    if(nick.value.length==0){
        event.preventDefault();
        //Ponemos el foco en la caja del nick
        nick.focus();
        //Escribimos el error
        error.innerText="El campo nick no puede estar vacío";
        //Salimos
        return false;
    }else if(tamano.value=="0"){
        event.preventDefault();
        //Ponemos el foco en la caja del nick
        tamano.focus();
        //Escribimos el error
        error.innerText="Se debe seleccionar un tamaño para nuestro panel";
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
const error = document.getElementById("error");
form_entrada.addEventListener('submit', comprobar);