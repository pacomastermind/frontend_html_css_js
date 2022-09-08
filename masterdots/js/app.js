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
const avatarItems=document.getElementsByClassName('avatarImgItem');
const avatarImg=document.getElementById('avatarImg');
const avatarCont=document.getElementById('avatarContainer');
//Item que almacenará la imagen que se está moviendo
var itemImg;

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
    datosUsuario(nick,tamano,email,avatarImg);
    historicoUsuarios(nick);
    return true;
}
function capturarElem(event){
    console.log("Objetos del DOM cargados");
}
function avantarDrag(event){
   console.log("Movemos");
}

function moverImg(event){
    itemImg=event.target;
}

function cambiarImg(event){
    event.target.src=itemImg.src;
}


document.addEventListener('DOMContentLoaded', capturarElem);
//Añadimos el listener para el submit del formulario
form_entrada.addEventListener('submit', comprobar);
//Añadimos los dragstart a los elementos y la gestión del elemento seleccionado
for (let item of avatarItems) {
    item.addEventListener('dragstart',moverImg);
}
//Añadimos el evento del drop al container
avatarCont.addEventListener('dragover',e=>{e.preventDefault()});
avatarCont.addEventListener('drop',cambiarImg);
//Comprobamos si hay un error de la sesion
getDatosUsuario();
checkErrorSession(error);