const pessoas = [
  { id: 1, nome: 'Fulano'},
  { id: 1, nome: 'Ciclano'},
  { id: 1, nome: 'Triclano'},
];

// const novasPessoas = {}
//   for (const pessoa of pessoas) {
//     const { id } = pessoa;
//     novasPessoas[id] = {...pessoa}; 
// }

const novasPessoas = new Map();
  for (const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas.set(id, {...pessoa});
}

console.log(novasPessoas.get(2));