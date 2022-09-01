// (condicao) ? 'Valor para verdadeiro' : 'Valor para falso';
const pontuacaoUSuario = 922;
const nivelUsuario = pontuacaoUSuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';

const corUsuario = null;
const corPadrao = corUsuario || 'Preta';

console.log(nivelUsuario, corPadrao);




//              ^
//              |
//              |
//
// if (pontuacaoUSuario >= 1000) {
//     console.log('Usuário VIP');
// 
// } else {
//     console.log('Usuário normal');
// }