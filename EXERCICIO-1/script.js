// Desenvolva um algoritmo que leia a altura de 15 pessoas. Este
// programa deverá calcular e mostrar:
// a. A menor altura do grupo;
// b. A maior altura do grupo;

let maiorAltura = 0;
let menorAltura = 0;
for (let i = 1; i <= 15; i++) {
  let altura = Number(prompt("Digite a altura em centimetros"));

  if (altura > maiorAltura) {
    maiorAltura = altura;
  }
  if (altura < menorAltura || menorAltura == 0) {
    menorAltura = altura;
  }
}
console.log(`maior altura ${maiorAltura}`);
console.log(`menor altura ${menorAltura}`);
