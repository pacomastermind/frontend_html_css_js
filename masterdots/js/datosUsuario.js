/*
*   Funciones relacionadas con el almacenamiento de información en SessionStorage/LocalStorage
*   @author Paco Gomez <paco@mastermind.ac>
*/

// ALMACENAMIENTO DE DATOS DE PARTIDA MEDIANTE SESSIONSTORAGE
// Salvamos los datos de la partida
var nickSession;
var tamanoSession;
var emailSession;
var errorSession;
var avatarSession;
var geolocalizacionTxt="";

/**
 * Almacena en sessionStorage nick,tamano e email
 * @constructor
 * @param {HTMLElement} nick - nick
 * @param {HTMLElement} tamano - tamño del panel
 * @param {HTMLElement} email - email
 */
function datosUsuario(nick,tamano,email,avatarImg){
    sessionStorage.setItem('nick', nick.value);
    sessionStorage.setItem('tamano', tamano.value);
    sessionStorage.setItem('email', email.value);
    sessionStorage.setItem('avatar', avatarImg.src);
}

function getDatosUsuario(){
    nickSession = sessionStorage.getItem('nick');
    tamanoSession = sessionStorage.getItem('tamano');
    emailSession = sessionStorage.getItem('email');
    errorSession = sessionStorage.getItem('error');
    avatarSession = sessionStorage.getItem('avatar');
        //Incorporamos geolocalización
        if (!navigator.geolocation) {
            geolocalizacionTxt = 'El navegador no soporta geolocalizacion';
          } else {
            navigator.geolocation.getCurrentPosition(
                //Exito
                (position)=>{geolocalizacionTxt = 'Latitud:'+position.coords.latitude+'Longitud:'+position.coords.longitude},
                //Error 
                ()=> {geolocalizacionTxt = 'El navegador ha dado un error obteniendo posicion'}
            );
        }
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

function historicoUsuarios(nick){
    
    //Incorporamos geolocalización
    /* OJO CON LAS PETICIONES ASINCRONAS
    if (!navigator.geolocation) {
        geolocalizacionTxt = 'El navegador no soporta geolocalizacion';
      } else {
        navigator.geolocation.getCurrentPosition(
            //Exito
            (position)=>{geolocalizacionTxt = 'Latitud:'+position.coords.latitude+'Longitud:'+position.coords.longitude},
            //Error 
            ()=> {geolocalizacionTxt = 'El navegador ha dado un error obteniendo posicion'}
        );
    }*/
    let usuario={
        nick:nick.value,
        fecha:Date.now(),
        posicion:geolocalizacionTxt
    }
    if(localStorage.getItem('historico')==null){
        //Primera vez
        let historico=[];
        historico.push(usuario);
        localStorage.setItem('historico',JSON.stringify(historico));
    }else{
        historico=JSON.parse(localStorage.getItem('historico'));
        historico.push(usuario);
        localStorage.setItem('historico',JSON.stringify(historico));
    }
}

