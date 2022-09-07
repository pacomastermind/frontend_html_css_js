/*
JS PÁGINA JUEGO

STORAGE
*/
//Capturamos los datos de la sesión
getDatosUsuario();
//Comprobamos que los datos no sean nulos
let comprobarDatos=checkDatosUsuario();
if(!comprobarDatos) location="index.html";
//Mostramos los datos de la sesión
mostrarDatosUsuario();