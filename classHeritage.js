class Dispositivo {
  constructor(nome) {
    this.nome = nome;
    this.ligado = false;
  }

  ligar() {
    if (this.ligado) {
      console.log(this.nome + ' já ligado');
      return;
    }
  }

  desligar() {
    if (!this.ligado) {
      console.log(this.nome + ' já desligado');
      return;
    }

    this.ligado = false;
  }
}

class Smartphone extends Dispositivo {
  constructor(nome, cor, modelo) {
    super(nome);

    this.cor = cor;
    this.modelo = modelo;
  }
}

const d1 = new Dispositivo('Smartphone');
console.log(d1)
