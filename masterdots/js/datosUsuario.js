//ALMACENAMIENTO DE DATOS DE PARTIDA MEDIANTE SESSIONSTORAGE
// Salvamos los datos de la partida
function datosUsuario(){
    console.log(nick.value);
    sessionStorage.setItem('nick', nick.value);
    sessionStorage.setItem('tamano', tamano.value);
    sessionStorage.setItem('email', email.value);
}

function mostrarDatosUsuario(){
    let nick = sessionStorage.getItem('nick');
    console.log("nick "+nick);
    let tamano = sessionStorage.getItem('tamano');
    console.log("tamano "+tamano);
    let email = sessionStorage.getItem('email');
    console.log("email "+email);
}

