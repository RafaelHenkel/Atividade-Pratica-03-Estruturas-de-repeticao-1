// Pedro tem 1,50m de altura e cresce 2 centímetros por ano, enquanto
// Lucas tem 1,10m de altura e cresce 3 centímetros por ano.
// Construa um algoritmo que calcule e imprima quantos anos serão
// necessários para que:
// a. Lucas e Pedro tenham o mesmo tamanho;
// b. Lucas seja maior que Pedro.

let alturaPedro = 150;
let alturaLucas = 110;
let i = 0;
do {
  alturaPedro += 2;
  alturaLucas += 3;
  i++;
  console.log(`LUCAS: ${alturaLucas}`);
  console.log(`PEDRO: ${alturaPedro}`);
} while (alturaLucas != alturaPedro);
{
}
console.log(
  `Sera necessario ${i} anos para o lucas e pedro ter a mesma altura`
);
console.log(
  `Sera necessario ${i + 1} anos para o lucas ser mais alto que pedro`
);
