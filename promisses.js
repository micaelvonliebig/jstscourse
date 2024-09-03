function random(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function wait(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(msg);
      resolve();
    }, tempo);
  });
}

wait('Frase 1', random(1, 3)
  .then(resposta => {
    console.log(resposta);
    return wait('Frase 2', rand(1, 3))
  })
  .then(resposta => {
    
  })
  .catch());
