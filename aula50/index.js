// argumentos que sustenta todos os argumentos enviados

const conta = function(operador, acumulador, ...numeros) {
    for(let numero of numeros) {
        if (operador === '+') acumulador  += numero;
        if (operador === '-') acumulador  -= numero;
        if (operador === '/') acumulador  /= numero;
        if (operador === '*') acumulador  *= numero;
    }
    console.log(acumulador)
};
conta('+', 1, 20, 30, 40, 50);












/*
function funcao([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3);
}
funcao(['Luiz Otávio', 'Miranda', 30]);
*/


/*
function funcao({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade);
}
let obj = { nome: 'Rodrigo', sobrenome: 'Sena', idade: 23 }
funcao(obj);
*/


/*
function funcao(a, b = 2, c = 4) {
    console.log(a + b + c);
}
funcao(2, undefined, 20);
*/


/*
function funcao(a, b, c) {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }

    console.log(total, a, b , c);
}
funcao( 1, 2, 3, 4, 5, 6, 7, 8, 9); 
*/

