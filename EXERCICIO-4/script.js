// Escreva um algoritmo que percorra os números inteiros entre 1 e 250
// e verifique quais números são múltiplos de 3 e quais são múltiplos
// de 5.

let numeros = 250;

for (let i = 0; i <= 250; i++) {
  if (i % 5 == 0) {
    console.log(`numero multiplo de 5: ${i}`);
  }
  if (i % 3 == 0) {
    console.log(`numero multiplo de 3: ${i}`);
  }
}
