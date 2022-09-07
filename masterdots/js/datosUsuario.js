//ALMACENAMIENTO DE DATOS DE PARTIDA MEDIANTE SESSIONSTORAGE
// Salvamos los datos de la partida
var nickSession;
var tamanoSession;
var emailSession;
var errorSession;

function datosUsuario(){
    sessionStorage.setItem('nick', nick.value);
    sessionStorage.setItem('tamano', tamano.value);
    sessionStorage.setItem('email', email.value);
}

function getDatosUsuario(){
    nickSession = sessionStorage.getItem('nick');
    tamanoSession = sessionStorage.getItem('tamano');
    emailSession = sessionStorage.getItem('email');
    errorSession = sessionStorage.getItem('error');
}

function checkDatosUsuario(){
    if(nickSession==null || tamanoSession==null){
        sessionStorage.setItem('error', 'No se ha rellenado correctamente el formulario');
        return false;
    }else if(tamanoSession==0){
        sessionStorage.setItem('error', 'No se ha rellenado correctamente el tamaño');
        return false;
    }else if(nickSession.length==0){
        sessionStorage.setItem('error', 'No se ha rellenado correctamente el nick');
        return false;
    }
    return true;
}

function checkErrorSession(errorHTML){
    if(errorSession!=null)  error.innerText=errorSession;
}

function mostrarDatosUsuario(){
    
    console.log("nick "+nickSession);
    console.log("tamano "+tamanoSession);
    console.log("email "+emailSession);
}

