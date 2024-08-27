// defineProperty - defineProperties
function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  // Object.defineProperty(this, 'estoque', {
  //   enumerable: true, // mostra a cgave
  //   value: estoque, // valor
  //   writable: false, // pode alterar
  //   configurable: true // configurável
  // });
  // É possível usar o método defineProperty() para elemento de um objeto.
}
