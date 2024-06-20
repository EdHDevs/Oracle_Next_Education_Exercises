
var nivelDificultad = parseInt(prompt("Selecciona el nivel de dificultad: 1, 2 o 3"));
nivelDificultad = nivelDificultad == 1 ? 10 : nivelDificultad == 2 ? 20 : nivelDificultad == 3 ? 40 : 10;
var numeroSecreto = Math.floor(Math.random() * nivelDificultad) + 1;
var numeroUsuario = prompt("Me indicas un numero del 1 al " + nivelDificultad + " por favor:");
var maxIntentos = 3;
var intentos = 0;


while(true){
    
    if(numeroUsuario == numeroSecreto){
        alert("Felicidades, has adivinado el numero secreto");
        break;
    }
        else if(numeroUsuario != numeroSecreto && intentos < maxIntentos){
            intentos++;
            if(numeroSecreto > numeroUsuario){
                alert("El numero secreto es mayor");
            } else{
                alert("El numero secreto es menor");
            }
            numeroUsuario = prompt("Me indicas un numero del 1 al " + nivelDificultad + " por favor:");
        }
            else if(intentos == maxIntentos){
                alert("Lo siento, has superado el numero de intentos permitidos, el numero secreto era: " + numeroSecreto);
                break;
            }
    else{
        numeroUsuario = prompt("Vuelve a intentarlo, me indicas otro numero por favor:");
    }
}