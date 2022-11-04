/*
Object.values
Object.entries
Object.assign(des, any)
Object.getOwnPropertyDescriptor(o, 'prop')
...(spread)

// Já vimos
Objects.keys (retorna as chaves)
Objects.freeze (congela o objeto)
Objects.defineProperties (define várias propriedades)
Objects.defineProperty (define uma propriedade)
*/
const produto = {nome: 'Produto', preco: 1.8, material: 'porcelna'};

for(let valor of Object.entries(produto)) {
    console.log(valor[0], valor[1]);
}
