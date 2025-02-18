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
  const NUMBERS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const SIMBOLS = ["!", "@", "#", "$", "%", "&", "(", ")", "-", ".", "/", "<", "=", ">", "?", "[", "]", "^", "_"];

  let numCharacters: Number = 16; // Insertar Numero
  let boolLowerCase: Boolean = true;
  let boolNumbers: Boolean = false;
  let boolSimbols: Boolean = true;
  
  enum TypeSelect {
    capital = 0,
    lower   = 1,
    number  = 2,
    simbol  = 3,
  }
  
  let values: object = {
    numCharacters: numCharacters,
    boolLowerCase: boolLowerCase,
    boolNumbers: boolNumbers,
    boolSimbols: boolSimbols,
  };
  
  // Funcion Principal
  function getPassword(values: any): void {
    // Validation
    if (values.numCharacters < 8 || values.numCharacters > 16)
      return console.log('Favor de seleccionar un valor entre 8 y 16');
    let count = 0,
      password = '';
  
    do {
      count++;
      let select: number = cubilete(values);
      switch (select) {
        case 0: {
          password += CAPITALCASE[randomGenerator(0, CAPITALCASE.length - 1)];
          break;
        }
        case 1: {
          password += LOWERCASE[randomGenerator(0, LOWERCASE.length - 1)];
          break;
        }
        case 2: {
          password += NUMBERS[randomGenerator(0, NUMBERS.length - 1)];
          break;
        }
        case 3: {
          password += SIMBOLS[randomGenerator(0, SIMBOLS.length - 1)];
          break;
        }
      }
      console.log(password, count);
    } while (count < values.numCharacters);
  }
  
  // Consigue que tipo de caracter sigue
  function cubilete(values: any): number {
    let randomSelect: number = 0;
    let leaveDoWhile: Boolean = true;
    do {
      randomSelect = randomGenerator(TypeSelect.capital, TypeSelect.simbol);
      if (randomSelect == 0) leaveDoWhile = false;
      if (randomSelect == 1 && values.boolLowerCase == true) leaveDoWhile = false;
      if (randomSelect == 2 && values.boolNumbers == true) leaveDoWhile = false;
      if (randomSelect == 3 && values.boolSimbols == true) leaveDoWhile = false;
    } while (leaveDoWhile);
    return randomSelect;
  }
  
  // Generador de numeros aleatorios
  function randomGenerator(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  getPassword(values);
  