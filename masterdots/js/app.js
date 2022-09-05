//Recogemos el nick del usuario
const nick = document.getElementById("nick");
console.log(nick.nodeType); //Tipo de nodo
console.log(nick.value);
nick.value="Tetsuo";
//Recogemos el tamanyo de la ventana
const tamano = document.getElementById("tamano");
console.log(tamano.nodeType); //Tipo de nodo
console.log(tamano.value);
tamano.value="4";
console.log(tamano.options[tamano.selectedIndex].text);