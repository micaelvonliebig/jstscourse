function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  Object.defineProperty(this, 'estoque', {
    enumerable: true,
    configurable: true,
    get: function() {
      return estoque;
    },
    set: function(valor) {
      if (typeof valor !== 'number') {
        throw new TypeError('Mensagem');
      }

      estoquePrivado = valor;
    }
  })
}

function criarProduto(nome) {
  return {
    get nome() {
      return nome;
    },
    set nome(valor) {
      nome = valor;
    }
  }
}