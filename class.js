// class Pessoa {
//   constructor(nome, sobrenome) {
//     this.nome = nome;
//     this.sobrenome = sobrenome;
//   }

//   falar() {
//     console.log(`${this.nome} está falando.`);
//   }
// }

// function Pessoa2(nome, sobrenom) {
//   this.nome = nome;
//   this.sobrenome = sobrenome;
// }

// Pessoa2.prototype.falar() = {

// }

// const p1 = new Pessoa('Fulano', 'de Tal');

// Getters and Setters

const _velocidade = Symbol('velocidade');

class Carro {
  constructor(nome) {
    this.nome = nome;
    this[_velocidade] = 0;
  }

  get velocidade() {
    return this[_velocidade];
  }

  set velocidade(valor) {
    if (typeof valor !== 'number') return;
    if (valor >= 100 || valor <= 0) return;
    this[_velocidade] = valor;
  }

  acelerar() {
    if (this[_velocidade] >= 100) return;
    this[_velocidade]++;
  }

  freiar() {
    if (this[_velocidade] <= 0) return;
    this[_velocidade]--;
  }
}

const c1 = new Carro('Fusca');

for (let i = 0; i <= 200; i++) {
  c1.acelerar();
}

class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  get nomeCompleto() {
    return this.nome + ' ' + this.sobrenome;
  }

  set nomeCompleto(valor) {
    valor = valor.split(' ');
    this.nome = valor.shift();
    this.sobrenome = valor.join(' ');
  }
}

const p1 = new Pessoa('Fulano', 'de Tal');
p1.nomeCompleto = 'Fulano Ciclano de Tal';
console.log(p1.nome);