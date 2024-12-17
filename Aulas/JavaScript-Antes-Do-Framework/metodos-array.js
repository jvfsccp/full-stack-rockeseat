// O método map() chama a função callback recebida por parâmetro para cada elemento do Array original, em ordem, e constrói um novo array com base nos retornos de cada chamada. E no final, devolve o novo array.

/*
const products = ["Teclado", "Mouse", "Monitor"]

// Percorrendo os itens do Array
products.map((product) => {
  console.log(product)
})

// Sintaxe reduzida
products.map((product) => console.log(product))

// Utilizando o novo objeto retornado.
const formatted = products.map((product) => {
  // return product.toUpperCase()

  return {
    id: Math.random(),
    description: product,
  }
})

console.log(formatted)
*/

// O método filter () cria um novo array com todos os elementos que passaram na condição.

/*
const words = ["Javascript", "HTML", "CSS", "Web"]

// Filtrando palavras que tenham mais do que 3 letras.
const result = words.filter((word) => word.length > 3)
console.log(result)

const products = [
  {
    description: "Teclado", price: 150, promotion: true
  },
  {
    description: "Mouse", price: 70, promotion: false
  },
  {
    description: "Monitor", price: 900, promotion: true
  }
]

// Exemplo de um filtro de produtos na promoção.
const promotion = products.filter((product) => product.promotion === true)

console.log(promotion)
*/

// O método findIndex() retorna o índice no array do primeiro elemento que satisfazer a condição. Caso contrário, retorna -1, indicando que nenhum elemento passou no teste.

/*
const values = [4, 6, 8, 12]

// Obtendo o primeiro índice do elemento que o valor é maior do que 4.
const index = values.findIndex((value) => value > 4)
console.log(index)
console.log(values[index])

// Exemplo de quando não encontra.
console.log(values.findIndex((value) => value > 12))
*/

// O método find() retorna o valor do primeiro elemento do array que satisfazer a condição. Caso contrário, undefined é retornado.

/*
const values = [5, 12, 8, 130, 44]

// Retorna o primeiro elemento que o valor é maior que 10.
const found = values.find((value) => value > 10)
console.log(found)

// Exemplo com objetos.
const fruits = [
  {name: "apple", quantity: 23},
  {name: "banana", quantity: 25},
  {name: "orange", quantity: 52},
]

const result = fruits.find((fruit) => fruit.name === "orange")
console.log(result)
*/


// O método every() testa se todos os elementos do array passam na condição e retorna um valor Boolean.
/*
// Exemplo de array de idades.
const ages = [15, 30, 39, 29]

// Verificando se todas as idades são maiores ou igual a 18.
const result = ages.every((age) => age >= 18)
console.log(result)
*/

// O método some() testa se ao menos um dos elementos no array passa na condição e retorna um valor true ou false.
/*
// Exemplo de arrays de idades
const ages = [15, 30, 39, 29]

const result = ages.some((age) => age < 18)
console.log(result)
*/

/*
  O método reduce é utilizado para reduzir um array a um único valor.

  Parâmetros:
  - Array original (values)
  - Acumulador (accumulator)
  - Valor da iteração (currentValue)
  - Valor Inicial (0)
  - Index (index da iteração atual - opcional)
*/

/*
const values = [1, 2, 3, 4, 5]

const sum = values.reduce((accumulator, currentValue, index) => {
  
  console.log("ACUMULADOR", accumulator)
  console.log("CURRENT VALUE", currentValue)
  console.log("INDEX", index)

  console.log("SOMA", accumulator + currentValue)
  console.log("##########")

  return accumulator + currentValue
}, 0)

console.log("RESULTADO DA SOMA FINAL:", sum)
*/
