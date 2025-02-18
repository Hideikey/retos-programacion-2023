/*
 * Escribe un programa que sea capaz de generar contraseñas de forma aleatoria.
 * Podrás configurar generar contraseñas con los siguientes parámetros:
 * - Longitud: Entre 8 y 16.
 * - Con o sin letras mayúsculas.
 * - Con o sin números.
 * - Con o sin símbolos.
 * (Pudiendo combinar todos estos parámetros entre ellos)
 */

const CAPITALCASE = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","U","V","W","X","Y","Z"];
const LOWERCASE = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w","x","y","z"];
const NUMBERS = ["0","1","2","3","4","5","6","7","8","9"];
const SIMBOLS = ["!", "@", "#", "$", "%", "&", "(", ")", "-", ".", "/", "<", "=", ">", "?", "[", "]", "^", "_"];

let numCharacters: Number = 8; // Insertar Numero
let boolLowerCase: Boolean = true;
let boolNumbers: Boolean = true;
let boolSimbols: Boolean = true;

enum TypeSelect {
    capital = 0,
    lower   = 1,
    number  = 2,
    simbol  = 3 
}
let values : object = {
    numCharacters: numCharacters,
    boolLowerCase: boolLowerCase,
    boolNumbers: boolNumbers,
    boolSimbols: boolSimbols,
}

function getPassword(values:any): void {

    let select: number = cubilete(values);
    console.log(select)
}

function cubilete(values:any): number {
    let selected: number = 0; 
    if(boolLowerCase == false || boolNumbers == false || boolSimbols == false) return 0;
    
    let leaveDoWhile:Boolean = false;
    do {
        let randomSelect:number = randomGenerator(TypeSelect.capital,TypeSelect.simbol);
        if(randomSelect == 0) leaveDoWhile = true;
        if(randomSelect == 1 && values.boolLowerCase == true) leaveDoWhile = true;
        if(randomSelect == 2 && values.boolNumbers == true) leaveDoWhile = true;
        if(randomSelect == 3 && values.boolSimbols == true) leaveDoWhile = true;
    } while (leaveDoWhile);
    return selected;
}

function randomGenerator(min:number,max:number):number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

getPassword(values)