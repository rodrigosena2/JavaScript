/* 
&& -> Todas as expressôes precisam ser verdadeiras para dar true -> false && true -> false " o valor mesmo" 
|| -> Apenas uma expressão precisa ser verdadeira para dar true -> true || false -> vai retornar "o valor verdadeiro"

FALSY
false
0
"" '' ``
null / undefined
NaN

*/
const a = 0;
const b = null;
const c = false; // Aqui
const d = false;
const e = NaN;

console.log( a || b || c || d || e);