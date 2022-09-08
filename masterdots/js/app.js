/*
JS PÁGINA PRINCIPAL

COMPROBACION DE FORMULARIO
*/
//Recogemos todos los objetos que necesitaremos para interactuar posteriormente
const form_entrada = document.getElementById("form_entrada");
const nick = document.getElementById("nick");
const tamano = document.getElementById("tamano");
const email = document.getElementById("email");
const error = document.getElementById("error");
const avatarImg = document.getElementById("error");

function comprobar(event){
    //Comprobación campo nick
    //Antigua comprobación sobre longitud
    //if(nick.value.length==0){
    if(nick.value.match(/\d\w/g)){
        event.preventDefault();
        //Ponemos el foco en la caja del nick
        nick.focus();
        //Escribimos el error
        error.innerText="El campo nick no puede comenzar con numeros";
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
    //Los datos son correctos. Guardamos en la sesión los datos de usuario
    datosUsuario(nick,tamano,email);
    historicoUsuarios(nick);
    return true;
}
function capturarElem(event){
    console.log("Objetos del DOM cargados");
}
function avantarDrag(event){
   console.log("Movemos");
}
document.addEventListener('DOMContentLoaded', capturarElem);
document.addEventListener("dragstart", avantarDrag);
//Añadimos el listener para el submit del formulario
form_entrada.addEventListener('submit', comprobar);
//Comprobamos si hay un error de la sesion
getDatosUsuario();
checkErrorSession(error);