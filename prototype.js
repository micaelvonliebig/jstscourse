/*
JavaScript é uma linguagem baseada em protótipos usados para passar propriedades e métodos de um objeto para outro.

Definição de protótipo:
Protótipo é o termo usado para se referi ao que se foi criado pela primeira vez, servindo de modelo ou molde para futuras produções.

Todos os objetos têm uma referência interna para um protótipo (__proto__) que vem da propriedade prototype da função construtora que foi usada para criá-lo. Quando tentamos acessar um membro de um objeto, primeiro, o motor do JS vai tentar encontrar este membro no próprio objeto e depois a cadeia de protótipos é usada até o topo (null) até encontrar (ou não) tal membro.
*/

// Construtora -> molde da classe
function Pessoa(nome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}

// Instância -> criação do objeto
const p1 = new Pessoa('Fulano', 'de Tal');
const p2 = new Pessoa('Ciclano', 'de Tales');
