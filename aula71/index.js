// defineProperty - defineProperties

function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  Object.defineProperty(this, 'estoque', {
    enumerable: true, // mostra a chave quando true
    value: estoque, // valor
    writable: false, // pode alterar o valor se for true e não se for false
    configurable: true, // configurável
  });

}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);

for(let chave in p1) {
  console.log(chave);
}
/*
function Produto(nome, preco, estoque) {

  Object.defineProperty(this, 'estoque', {
    enumerable: true, // mostra a chave quando true
    value: estoque, // valor
    writable: false, // pode alterar o valor se for true e não se for false
    configurable: true, // configurável
  });

  Object.defineProperties(this, {
    nome: {
      enumerable: true, // mostra a chave quando true
      value: nome, // valor
      writable: true, // pode alterar o valor se for true e não se for false
      configurable: true, // configurável
    },
    preco: {
      enumerable: true, // mostra a chave quando true
      value: preco, // valor
      writable: true, // pode alterar o valor se for true e não se for false
      configurable: true, // configurável
    },
  });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);

for(let chave in p1) {
  console.log(chave);
}
*/