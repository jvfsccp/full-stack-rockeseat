// setTimeout() executa uma função após um intervalo de tempo especificado.

/*
setTimeout(() => {
  console.log("Olá, tudo bem?")
}, 3000) // tempo em milissegundos
*/

// setInterval() executa uma função após um intervalo de tempo especificado.

/*
let value = 10

const interval = setInterval(() => {
  console.log(value)
  value--

  if (value === 0) {
    console.log("Feliz ano novo!!!")

    // Interrompe o intervalo de execuções.
    clearInterval(interval)
  }
}, 1000)
*/

/*
// Função que retorna uma Promise.
function asyncFunction() {
  return new Promise((resolve, reject) => {
    // Simula uma operação assíncrona.
    setTimeout(() => {
      const isSucess = true

      if (isSucess) {
        resolve("A operação foi conclúida com sucesso!")
      } else {
        reject("Algo deu errado!")
      }
    }, 3000) // Simula uma operação que leva 3 segundos.
  })
}

const fetch = async () => {
  const response = await asyncFunction()
  console.log(response)
}

async function fetch() {
  try {
    const response = await asyncFunction()
    console.log("Sucesso", response)
  } catch (error) {
    console.log("Erro:", error)
  } finally {
    console.log("Fim da execução!")
  }
}
fetch()

// Visualizando que o retorno é uma promise.
// console.log(asyncFunction())

console.log("Executando função assíncrona...")

// const response = asyncFunction()
// console.log(response)

asyncFunction()
  .then((response) => {
    console.log("Sucesso:", response)
  })
  .catch((error) => {
    console.log("Erro:", error)
  })
  .finally(() => {
    console.log("Fim da execução")
  })
*/
/* 
// (1) Executa o código de forma síncrona e o valor 1 é impresso imediatamente no console.
console.log(1)

// Microtasks são executadas antes de temporizadores e promessas.
queueMicrotask(() => {
  console.log(2)
})

// (5) Macrotask que aguarda o evento de temporizador ser acionado.
setTimeout(() => {
  console.log(3)
}, 1000)

// (2) Execução síncrona.
console.log(4)

// (4) Adiciona uma microtask.
Promise.resolve(true).then(() => {
  console.log(5)
})
*/
