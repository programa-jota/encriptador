// captura de lo que esta en el campto del textarea

mensaje = document.getElementById("dseencriptar");


//captura del evento click en boton encriptar
var botonEncriptar = document.getElementById("btn-encriptar");
botonEncriptar.onclick = encriptar;

//captura del evento click en boton desencriptar
var botonDesencriptar = document.getElementById("btn-desencriptar");
botonDesencriptar.onclick = desencriptar;


//Funcion encriptar
function encriptar(){
    var texto = document.getElementById("encriptar").value;

    var nuevotextoe = texto.replace(/e/igm, "enter")// utilizo expresiones regulares --> /x/igm 
    var nuevotextoi = nuevotextoe.replace(/i/igm, "imes"); 
    var nuevotextoa = nuevotextoi.replace(/a/igm, "ai");
    var nuevotextoo = nuevotextoa.replace(/o/igm, "ober");
    var nuevotextou = nuevotextoo.replace(/u/igm, "ufat");
    
    document.getElementById("desencriptar").value = nuevotextou;
    document.getElementById("encriptar").value = "";
    
    
    
}


//Funcion desencriptar
function desencriptar(){
    var texto = document.getElementById("encriptar").value;

    nuevotextoe = texto.replace(/enter/igm, "e");// utilizo expresiones regulares --> /x/igm 
    nuevotextoi = nuevotextoe.replace(/imes/igm, "i"); 
    nuevotextoa = nuevotextoi.replace(/ai/igm, "a");
    nuevotextoo = nuevotextoa.replace(/ober/igm, "o")
    nuevotextou = nuevotextoo.replace(/ufat/igm, "u")

    document.getElementById("desencriptar").value = nuevotextou;
    document.getElementById("encriptar").value = "";
    
}

