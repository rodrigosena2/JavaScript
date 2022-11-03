// Factory function / Constructor functions / Classes
// Constructor functions
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this);
    // return this; // {nome: 'Luiz}
}

const p1 = new Pessoa('Luiz', 'Miranda');
delete p1.nome;
const p2 = new Pessoa('Maria', 'Miranda');

console.log(p1);
console.log(p2);




  

// Factory function
/*
function criaPessoa(nome, sobrenome) {
    return {
        nome, 
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}

const p1 = criaPessoa('Luiz', 'Otávio');
console.log(p1.nomeCompleto);
*/







/*
const pessoa1 = new Object();
pessoa1.nome = 'Luiz';
pessoa1.sobrenome = 'Otávio';
pessoa1.idade = 30;
pessoa1.falarNome = function() {
    return(`${this.nome} está falando seu nome.`)
};
pessoa1.getDataNascimento = function () {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};

for (let chave in pessoa1) {
    console.log(pessoa1[chave]);
}
*/