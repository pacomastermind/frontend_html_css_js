/*
JS PÁGINA JUEGO

STORAGE
*/
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
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
for (let index = 0; index < parseInt(tamanoSession)*parseInt(tamanoSession); index++) {
    if(index%2>0){
        colorRnd=getRandomInt(2);
    }
    items+=`<div class="containerItem"><div class="item ${color[colorRnd]}"></div></div>`;
}
document.getElementById('juego').innerHTML=items;
//Comprobamos que los datos no sean nulos
let comprobarDatos=checkDatosUsuario();
if(!comprobarDatos) location="index.html";
//Mostramos los datos de la sesión
mostrarDatosUsuario();