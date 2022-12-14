/*
JS PÁGINA JUEGO

STORAGE
*/

//Variables necesarias para la dinámica del juego
var comienzaMarcar=false;
var classMarcada="";
var idMarcado=-1;
var idMarcados=[];
var adyacentes=[];
var nIntervId;
//PROPONER ESTE ERROR SE CAPTURA ANTES DE QUE EXISTA. NaN
//var tamano = parseInt(tamanoSession);
var tamano = -1;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function calcularAdyacentes(){
    adyacentes=[];
    //Calculamos todos los adyacentes
    //Las excepciones son la primera y última columna, ya que
    //los adyacentes izquierda y/o derecha no son válidos
    //Adyacente izquierda, columna 1(números que al dividir por tamano el resto es 0) excepcion
    if(((idMarcado-1)>=0)&&((idMarcado%tamano)>0)) adyacentes.push(idMarcado-1)
    //Adyacente arriba
    if((idMarcado-tamano)>=0) adyacentes.push(idMarcado-tamano)
    //Adyacente derecha, ultima columna (números+1 que al dividir por tamano el resto es 0) excepcion
    if(((idMarcado+1)<(tamano*tamano))&&(((idMarcado+1)%tamano)>0)) adyacentes.push(idMarcado+1)
    //Por ultimo adyacente abajo
    if((idMarcado+tamano)<(tamano*tamano)) adyacentes.push(idMarcado+tamano)

}

function comenzarMarcar(event){
    if(!comienzaMarcar) comienzaMarcar=true;
    if(event.target.classList.contains('rojo')){
        event.target.parentElement.classList.add('rojo');
        classMarcada='rojo';
    }
    else{
        event.target.parentElement.classList.add('verde');
        classMarcada='verde';
    }
    //Calculamos adyacentes
    idMarcado=parseInt(event.target.id);
    idMarcados.push(idMarcado);
    calcularAdyacentes();
}
function continuaMarcando(event){
    //Solo se activa si se ha comenzado a marcar con un elemento
    if(comienzaMarcar){
        //Solo se podrá marcar si el item sobre el que se está pasando por encima 
        //es un adyacente y es del mismo color
        let idNuevoMarcado=parseInt(event.target.id);
        if(adyacentes.includes(idNuevoMarcado)&&event.target.classList.contains(classMarcada)){
            //Un nuevo elemento se ha unido
            idMarcado=parseInt(event.target.id);
            idMarcados.push(idMarcado);
            event.target.parentElement.classList.add(classMarcada);
            calcularAdyacentes();
        }
    }
}
function finalizarMarcando(event){
    comienzaMarcar=false;
    idMarcado=-1;
    adyacentes=[];
    let color=["rojo","verde"];
    //Calculamos puntuaciones
    if(idMarcados.length>1){
        document.getElementById("puntuacion").value=parseInt(document.getElementById("puntuacion").value)+idMarcados.length;
    }
    //Cambiamos el color a los señalados
    for (let index = 0; index < idMarcados.length; index++) {
        let marcado=document.getElementById(idMarcados[index]);
        colorRnd=getRandomInt(2);
        marcado.classList.remove(classMarcada);
        marcado.parentElement.classList.remove(classMarcada);
        marcado.classList.add(color[colorRnd]);
    }
    idMarcados=[];
}
function cuentaAtras(){
    let tmpoRestante=parseInt(document.getElementById("tmpo").value)-1;
    document.getElementById("tmpo").value=tmpoRestante;
    if(tmpoRestante==0){
        clearInterval(nIntervId);
        //FIN DE LA PARTIDA
        for (let item of containerItems) {
            item.removeEventListener('mousedown',comenzarMarcar);
            item.removeEventListener('mouseover',continuaMarcando);
            document.removeEventListener('mouseup',finalizarMarcando);
            //Añadimos background al fondo del juego acabado
            document.getElementById("juegoAcabado").classList.add("juegoAcabadoColor");
            //Cambiamos los z-index
            document.getElementById("juego").style.zIndex = "1";
            document.getElementById("juegoAcabado").style.zIndex = "2";
            document.getElementById("nuevaPartida").addEventListener('click',(e)=>location.reload());
        }
    }
}
//Capturamos los datos de la sesión y colocamos nick y avatar
getDatosUsuario();
document.getElementById("nick").value=nickSession;
document.getElementById("avatarImg").src=avatarSession;
//Modificamos la propiedad del grid para que cumpla con la seleccion del usuario
document.getElementById("juego").style.gridTemplateColumns="repeat("+tamanoSession+", 1fr)"
document.getElementById("juego").style.gridTemplateRows="repeat("+tamanoSession+", 1fr)"
//Pintamos el número de elementos de acuerdo al tamano
//Vamos a usar dos colores para hacer el juego más sencillo
//Sólo en las posiciones impares haremos random
let items="";
let color=["rojo","verde"];
let colorRnd=0;
tamano=parseInt(tamanoSession);
for (let index = 0; index < tamano*tamano; index++) {
    if(index%2>0){
        colorRnd=getRandomInt(2);
    }
    items+=`<div class="containerItem"><div id="${index}" class="item ${color[colorRnd]}"></div></div>`;
}
document.getElementById('juego').innerHTML=items;
//Añadimos el evento mousedown sobre todos los containerItem
const containerItems=document.getElementsByClassName('item');
for (let item of containerItems) {
    item.addEventListener('mousedown',comenzarMarcar);
    item.addEventListener('mouseover',continuaMarcando);
}
//Reseteare cuando suelte el raton y calcular puntuaciones
document.addEventListener('mouseup',finalizarMarcando);

//Comprobamos que los datos no sean nulos
let comprobarDatos=checkDatosUsuario();
if(!comprobarDatos) location="index.html";
//Mostramos los datos de la sesión
mostrarDatosUsuario();
//Lanzamos el timer
nIntervId=setInterval(cuentaAtras, 1000);