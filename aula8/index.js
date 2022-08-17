/* 
Rodrigo Sena tem 23 anos, pesa 95 kg
tem 1.72 de altura e seu IMC é de 25.9259
Rodrigo Sena nasceu em 1999
*/

const nome = 'Rodrigo';
const sobrenome = 'Sena';
const idade = 23;
const peso = 95;
const altura = 1.72;
let imc; // peso / (altura * altura)
let anoNascimento; // 2022 - (idade)

imc = peso / (altura * altura);
anoNascimento = 2022 - (idade);

// template strings

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg');
console.log('tem', altura, 'de altura e seu IMC é de', imc,);
console.log(nome, sobrenome, 'nasceu em', anoNascimento,);