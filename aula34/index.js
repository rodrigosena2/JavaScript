/*
console.log('Linha 1');
console.log('Linha 2');
console.log('Linha 3');
console.log('Linha 4');
console.log('Linha 5');
console.log('Linha 6');
*/

// i - index
/*for (let i = 0; i <= 5; i++) {
    console.log(`Linha ${i}`);
}
*/
/*
for (let i = 500; i >= 400; i-= 10) {
    console.log(i)
} 
*/

/* for (let i = 0; i <= 10; i++) {
    const par = i % 2 === 0 ? 'par' : 'impar';
    console.log(i, par);
}
*/
//                0       1       2
const frutas = ['Maçã', 'Pêra', 'Uva', 'Morango', 'Abacaxi', 'Kiwi'];



for (let i = 0; i < frutas.length; i++) {
    console.log(`Índice ${i}`, frutas[i]);
}