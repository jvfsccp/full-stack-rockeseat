// WHILE: executa até que a condição seja VERDADEIRA.

/*
let execute = true

while (execute) {
  let response =  window.prompt("Deseja continuar: 1 (SIM) ou 2 (NÃO)")

  if (response == "2") {
    execute = false
  }
}

console.log("Segue o fluxo...")
*/

/*
// Loop infinito
let value = true

while (value) {
  console.log("Executando while...")
}
*/

/*
// DO WHILE: repete até que a condição especificada seja VERDADEIRA. No entanto, a instrução será executada pelo menos uma vez antes da condição ser verificada.

let value = 0

do {
 value++
 console.log(value)
} while (value < 10)

console.log("Segue o fluxo...")
*/


/*
  FOR repete até que condição especificada seja FALSA.

  - variável de controle
  - condição
  - incremento ou decremento da variável de controle
*/

/*
for (step = 0; step < 10; step++) {
  console.log(step)
}

// Exemplo de tabuada.
console.log("### TABUDA ###")
console.log(`7x0 = ${7*0}`)
console.log(`7x1 = ${7*1}`)
console.log(`7x2 = ${7*2}`)
console.log(`7x3 = ${7*3}`)
console.log(`7x4 = ${7*4}`)
console.log(`7x5 = ${7*5}`)
console.log(`7x6 = ${7*6}`)
console.log(`7x7 = ${7*7}`)
console.log(`7x8 = ${7*8}`)
console.log(`7x9 = ${7*9}`)
console.log(`7x10 = ${7*10}`)

let number = 7
for (step = 0; step <= 10; step++) {
  console.log(`${number} x ${step} = ${number * step}`)
}
*/

// for...in executa iterações a partir de um objeto e percorre as propriedades.

/*
let person = {
  name: "João Victor",
  surname: "Fernandes",
  email: "joaovictor@email.com"
}


for(let property in person){
  // Exibe o nome da propriedade.
  console.log(property)

  // Exibe o conteúdo da propriedade
  console.log(person[property])

}

let students = ["João", "Rodrigo", "Amanda"]

for(let index in students) {
  // console.log(index)
  console.log(students[index])
}
*/

// for...of itera sobre valores de um objeto iterável.
/*
let students = ["João", "Rodrigo", "Amanda"]

for (let student of students){
  console.log(student)
}

let user = [
{
  name: "João",
  email: "joao@email.com"
}
]

for (let value of user) {
  console.log(value.email)
}
*/

// Break encerra a execução da repetição ou switch para seguir para a instrução seguinte.
/*
let option = 2

switch(option) {
  case 1:
    console.log("Cadastrar")
    break
  case 2:
    console.log("Atualizar")
    break
  case 3:
    console.log("Remover")
    break
  default:
    console.log("Opção inválida")
    break
}
*/

/*
// Utilizando o break para finalizar a repetição.
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break
  }

  console.log(i)
}
*/

// Continue encerra (pula) a execução das instruções na iteração atual e continua a execução do loop com a próxima iteração.

for (let i = 0; i < 10; i++) {

  if (i === 5){
    continue
  }

  console.log(i)
}