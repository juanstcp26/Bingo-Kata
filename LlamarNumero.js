var numInicial = 1;
var numFinal = 75;
var confirm, letra;

do {
    numero = Math.round(Math.random() * (numInicial - numFinal) + numFinal);
    if (numero >= 1 && numero <= 15) letra = "B";
    if (numero >= 16 && numero <= 30) letra = "I";
    if (numero >= 31 && numero <= 45) letra = "N";
    if (numero >= 46 && numero <= 60) letra = "O";
    if (numero >= 61 && numero <= 75) letra = "O";
    console.log(letra + numero);
    confirm=prompt("Desea llamar otra bola? S/N")
} while (confirm == "s" || confirm == "S")