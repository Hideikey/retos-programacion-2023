/*
 * Escribe un programa que, dado un número, compruebe y muestre si es primo, fibonacci y par.
 * Ejemplos:
 * - Con el número 2, nos dirá: "2 es primo, fibonacci y es par"
 * - Con el número 7, nos dirá: "7 es primo, no es fibonacci y es impar"
 */

const num: number = 7;

function main(value: number) {
  let text = value.toString() + " ";
  text += esPrimo(value) + esFibonacci(value) + esPar(value);
  console.log(text);
}

function esPrimo(value: number): string {
  // casos especiales
  if (value == 0 || value == 1 || value == 4) "es primo, ";
  for (let x = 2; x < value / 2; x++) {
    if (value % x == 0) return "no es primo, ";
  }
  return "es primo, ";
}

function esFibonacci(value: number): string {
  // Función para verificar si un número es un cuadrado perfecto
  function esCuadradoPerfecto(x) {
    let raiz = Math.sqrt(x);
    return raiz === Math.floor(raiz);
  }
  if (
    esCuadradoPerfecto(5 * value * value + 4) ||
    esCuadradoPerfecto(5 * value * value - 4)
  )
    return "es fibonacci ";
  else return "no es fibonacci ";
}

function esPar(value: number): string {
  if (value % 2 == 0) return "y es par";
  else return "y es impar";
}

for (let i = 0; i < 10; i++) {
  const random = Math.floor(Math.random() * 100);
  main(random);
}
