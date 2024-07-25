
let numeroSecreto = generarNumeroSecreto();
let numeroIntentos = 1;

console.log(numeroSecreto);

// Función para asignar texto a un elemento HTML
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let intentoUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (intentoUsuario === numeroSecreto) {
        asignarTextoElemento('p',`¡Acertaste! Lo lograste en ${numeroIntentos} ${(numeroIntentos === 1 ? 'intento' : 'intentos')}`);
    }
    else{
        if (intentoUsuario > numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor');
        }else{
                asignarTextoElemento('p','El número secreto es mayor');
            }
        numeroIntentos++;   
    }
    
    return;
}

function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;
}

asignarTextoElemento('h1', '¡Bienvenido a mi juego!');
asignarTextoElemento('p', 'Adivina el número que está entre 1 y 100.');

    // console.log(numeroSecreto === intentoUsuario); //El tripe igual compara el tipo de dato también.