// Escreva um algoritmo que faça a tabuada de um número e
// apresente o resultado de acordo com o modelo a seguir, sabendo
// que o multiplicando deverá ser fornecido pelo usuário (n) e a
// quantidade de iterações também (i).
// 1 * 2 = 2
// 2 * 2 = 4
// 3 * 2 = 6
// ...

let tabuada = Number(prompt("digite o numero a ser multiplicado"));

for (let i = Number(prompt("Digite a quantidade de iteracoes")); (i = i); i--) {
  console.log(`${i} * ${tabuada} = ${i * tabuada}`);
}
