/* 
&& -> Todas as expressôes precisam ser verdadeiras para dar true -> false && true -> false " o valor mesmo" 
|| -> Apenas uma expressão precisa ser verdadeira para dar true -> 

FALSY
false
0
"" '' ``
null / undefined
NaN

*/

function falaOi () {
    return 'Oi';
}

let vaiExecutar = undefined;

console.log(vaiExecutar && falaOi());