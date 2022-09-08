//Capturamos los dos objetos que vamos a usar
const objeto = document.getElementById("objeto");
const contenedor = document.getElementById("contenedor");

//Eventos de objeto
/*
objeto.addEventListener('dragstart',e=>{
    console.log("Objeto comienza a moverse");
});
objeto.addEventListener('dragend',e=>{
    console.log("Objeto deja de moverse");
});
objeto.addEventListener('drag',e=>{
    console.log("Objeto se está moviendo");
});
*/
//Eventos de contenedor
/*
contenedor.addEventListener('dragenter',e=>{
    console.log("Objeto entra en contenendor");
});
contenedor.addEventListener('dragleave',e=>{
    console.log("Objeto sale de contenendor");
});
*/
contenedor.addEventListener('dragover',e=>{
    e.preventDefault();
    console.log("Objeto se mueve en contenedor");
});
contenedor.addEventListener('drop',e=>{
    console.log("Objeto se suelta en contenedor");
});