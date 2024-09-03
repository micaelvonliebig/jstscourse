function rand(min = 0, max = 3) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function wait(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== 'string') {
        reject('ERRO');
        return;
      }

      resolve(msg.toUpperCase() + ' - Promise OK');
      return;
    }, tempo);
  });
}

// wait('Fase 1', rand())
//   .then((valor) => {
//     console.log(valor);
//     return wait('Fase 2', rand());
//   })
//   .then((fase) => {
//     console.log(fase);
//     return wait('Fase', rand());
//   })
//   .then((fase) => {
//     console.log(fase);
//   })
//   .catch(error => console(error));

async function executar() {
  try {
    const fase1 = await wait('Fase 1', rand());
    console.log(fase1);

    const fase2 = await wait('Fase 2', rand());
    console.log(fase2);

    const fase3 = await wait('Fase 3', rand());
    console.log(fase3);
  } catch (error) {
    console.log(error);
  }
}
executar();
