const pessoa = {
    nome: 'Rodrigo',
    sobrenome: 'Sena',
    idade: 23,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

// Atribuição via desestruturação
const {nome, sobrenome, ...rest} = pessoa;
console.log(nome,sobrenome, rest);