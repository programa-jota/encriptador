// captura de lo que esta en el campto del textarea

mensaje = document.getElementById("desencriptar");


//captura del evento click en boton encriptar
var botonEncriptar = document.getElementById("btn-encriptar");
botonEncriptar.onclick = encriptar;

//captura del evento click en boton desencriptar
var botonDesencriptar = document.getElementById("btn-desencriptar");
botonDesencriptar.onclick = desencriptar;

//captura del evento click en boton copiar
var botonCopiar = document.getElementById("btn-copiar");
botonCopiar.onclick = copiar;

function validar (){
    var texto = document.getElementById("encriptar").value;
    var coincidencia = /^[a-z, ]+$/g;
    if (texto.match(coincidencia)){
    }else{
        alert("Hay una mayuscula o acento. Por favor intente de nuevo");
        document.getElementById("encriptar").value = "";
        return
    }
}

//Funcion encriptar
function encriptar(){
    validar();
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

function copiar(){   

    var contenido = document.getElementById("desencriptar").value;
    document.querySelector
    
    navigator.clipboard.writeText(contenido)
        .then(() => {
        alert("mensaje copiado");
    })
        .catch(err => {
        console.log('Something went wrong', err);
    })
}

