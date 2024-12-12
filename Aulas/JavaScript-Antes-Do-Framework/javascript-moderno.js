// O strict mode (modo estrito): ativando esse modo, os erros que eram silenciosos passa a gerar exceções no Javascript.
/*
"use strict";

function showMessage() {
  let personName = "João Victor";

  console.log("Olá", personName);
}

showMessage();

class Student {
  get point() {
    return 7;
  }
}

let student = new Student();
// Tenta mudar uma propriedade somente leitura.
// student.point = 10

console.log(student.point);

// Tenta deletar uma propriedade de um objeto que não posso deletar.
// delete window.document;

// Quando passamos parâmetros duplicados
function sum(a, a, c){
  return a + a + c
}

const result = sum (1,3,2) // 3 + 3 + 2 = 8
console.log("RESULTADO:", result)
*/

//destructuring assignment (desestruturação) permite extrair dados de arrays ou objetos em variáveis distintas.

/*
const data = ["João Victor", "joao@email.com"]

// Desestruturando array
const [username, email] = data
console.log("Nome:", username)
console.log("Email:", email)

const fruits = ["Banana", "Apple", "Orange"]

// Desestruturar somente o primeiro.
const [banana] = fruits
console.log(banana)

// Ignorando o primeiro na desestruturação.
const [_, apple] = fruits
console.log(apple)

// Ignorando o primeiro e o segundo na desestruturação.
const [, , orange] = fruits
console.log(orange)
*/

/*
const product = {
  description: "Teclado",
  price: 150
}

const { description, price } = product
console.log("Descrição:", description)
console.log("Preco: R$", price)

function newProduct({description, price}){
  console.log("### NOVO PRODUTO ###")
  console.log("Descrição:", description)
  console.log("Preco: R$", price)
}

newProduct({
  price: 70,
  description: "Mouse",
})
*/

// Rest params (...) permite representar um número indefinido de argumentos como um array.

/*
function values ( ...rest){
  // Mostra a quantidade de parâmetros.
  console.log(rest.length)

  // Exibindo o conteúdo do array.
  console.log(...rest)

  // Exibe o conteúdo do rest que é um array.
  console.log(rest)
}

values(2, 1, 3)
*/

// spread (espalhar) permite que um objeto iterável, como uma expressão de array ou uma string seja expandido para ser usado onde zero ou mais argumentos.

/*
const numbers = [1, 2, 3]
console.log(numbers)

// Spread
console.log(...numbers)

const data = [
  {
    name: "João",
    email: "joao@email.com",
    avatar: "j.png"
  },
  {
    name: "Rodrigo",
    email: "rodrigo@email.com",
    avatar: "r.png"
  }
]

// Utilizando o spread no array com objetos.
console.log(data)
console.log(...data)
*/