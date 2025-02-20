/*
 * Crea un programa que calcule quien gana más partidas al piedra,
 * papel, tijera, lagarto, spock.
 * - El resultado puede ser: "Player 1", "Player 2", "Tie" (empate)
 * - La función recibe un listado que contiene pares, representando cada jugada.
 * - El par puede contener combinaciones de "🗿" (piedra), "📄" (papel),
 *   "✂️" (tijera), "🦎" (lagarto) o "🖖" (spock).
 * - Ejemplo. Entrada: [("🗿","✂️"), ("✂️","🗿"), ("📄","✂️")]. Resultado: "Player 2".
 * - Debes buscar información sobre cómo se juega con estas 5 posibilidades.
 */
enum Opciones {
  "🗿" = 0,
  "📄" = 1,
  "✂️" = 2,
  "🦎" = 3,
  "🖖" = 4,
}

const rules = {
  "🗿": ["🦎", "✂️"],
  "📄": ["🗿", "🖖"],
  "✂️": ["📄", "🦎"],
  "🦎": ["🖖", "📄"],
  "🖖": ["✂️", "🗿"],
};

// Funcion pricipal
function main(values: Array<any>): void {
  let player1Count: number = 0;
  let player2Count: number = 0;
  // rules
  for (let i = 0; i < values.length; i = i + 2) {
    let player1 = values[i];
    let player2 = values[i + 1];
    // console.log(player1, player2, player1 == player2); // debugger
    if (rules[player1].includes(player2)) {
      player1Count++;
    } else if (rules[player2].includes(player1)) {
      player2Count++;
    }
    // console.log(player1Count, player2Count); // debugger
  }
  if (player1Count > player2Count) console.log("Player 1");
  else if (player1Count < player2Count) console.log("Player 2");
  else console.log("Draw");
}

for (let i = 0; i < 10; i++) {
  let plays: Array<string> = [];
  for (let x = 0; x < 6; x++) {
    plays.push(Opciones[randomGenerator(0, 4)].toString());
  }
  console.log(plays, "\n");
  main(plays);
}

// Generador de numeros aleatorios
function randomGenerator(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
