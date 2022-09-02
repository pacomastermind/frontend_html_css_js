// var edadgato=1; __Primer__ejemplo sobre variables y JS
// console.log("Edad del gato: "+edadgato);
var edadhumano=0;
console.log("GATO   HUMANO");
console.log("____   ______");
for (let edadgato = 1; edadgato < 22; edadgato++) {
    if(edadgato==1){
        edadhumano=15;
    }else if(edadgato==2){
        edadhumano=24;
    }else{
        edadhumano=edadhumano+4;
    }
    console.log(" "+edadgato+"      "+edadhumano);
  }

