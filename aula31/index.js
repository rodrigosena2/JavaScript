const verdadeira = true;

// Let tem escopo de bloco { ... bloco}
// Var só tem escopo de função

/* let nome = 'Luiz'; // criando
var nome2 = 'Luiz'; // criando



if (verdadeira) {
    let nome = 'Otávio' // criando
    var nome2 = 'Rogério'; // Redeclarada

    if (verdadeira) {
        var nome2 = 'Ronaldo'; // Redeclarada
        let nome = 'Outra coisa';
        console.log(nome, nome2);
    }
}
console.log(nome, nome2);
*/




/* 
function falaOi () {
    var sobrenome = 'Miranda';
    
    if (verdadeira) {
        let nome = 'Luiz'
        var sobrenome = 'Miranda';

    }
    console.log(sobrenome);
}

falaOi(); 
*/

var sobrenome = 'Miranda';
console.log(sobrenome);

