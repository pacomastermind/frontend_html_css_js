function comprobar() {
    console.log("RComprobando ...");
}
function ejecutar() {
    console.log("Ejecutando ...");
}
//Añadimos el listener sobre el click del ipunt/submit
const jugar = document.getElementById("jugar");
jugar.addEventListener('click', comprobar);
jugar.addEventListener('click', ejecutar);