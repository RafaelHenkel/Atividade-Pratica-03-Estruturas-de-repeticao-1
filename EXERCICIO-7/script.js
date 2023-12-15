// Desenvolva um algoritmo que leia 10 números, calcule e escreva a
// média aritmética dos valores lidos, a quantidade de valores
// positivos, a quantidade de valores negativos e o percentual de
// valores negativos e positivos.

let somaNumeros = 0;
let media = 0;
let numeros = 0;
let negativos = 0;
let positivos = 0;
let percentualNegativos = 0;
let percentualPositivos = 0;
for (let i = 0; i < 10; i++) {
  numeros = Number(prompt("Digite um numero"));
  somaNumeros += numeros;
  media = somaNumeros / 10;
  if (numeros > 0) {
    positivos++;
  } else if (numeros < 0) {
    negativos++;
  }
  percentualPositivos = (positivos / 10) * 100;
  percentualNegativos = (negativos / 10) * 100;
}
console.log(`Media aritmetica: ${media}`);
console.log(`Numeros positivos: ${positivos}`);
console.log(`Numeros negativos: ${negativos}`);
console.log(`Percentual numeros positivos: ${percentualPositivos}%`);
console.log(`Percentual numeros negativos: ${percentualNegativos}%`);
document.write(`Media aritmetica: ${media} <br>`);
document.write(`Numeros positivos: ${positivos}<br>`);
document.write(`Numeros negativos: ${negativos}<br>`);
document.write(`Percentual numeros positivos: ${percentualPositivos}%<br>`);
document.write(`Percentual numeros negativos: ${percentualNegativos}%<br>`);