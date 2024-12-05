/*
// Exibe a data e hora atual.
console.log(new Date())

// Exibe a data e hora de referência (considera o fuso).
console.log(new Date(0))

// Exibe o número de milissegundos.
console.log(new Date().getTime())
*/

/*
// Define com ano, mês (0-11), dia.
console.log(new Date(2024, 6, 3)) 


// Define ano, mês e dia e hora, minuto e segundo.
console.log(new Date(2024, 6, 3, 14, 30, 0))

// Definindo data e hora com String.
console.log(new Date("2024-07-03T14:30:00"))

console.log(new Date("July 3, 2032 13:30:33"))
*/

/*
let date = new Date("2024-07-02T14:30:10")

// Dia da semana de 0 a 6 (domingo é 0)
console.log(date.getDay())

// Dia do mês (0 a 30)
console.log(date.getDate())

// Mês (0 a 11)
console.log(date.getMonth() + 1)

// Ano
console.log(date.getFullYear())

// Horas
console.log(date.getHours())

// Minutos
console.log(date.getMinutes())

// Segundos
console.log(date.getSeconds())
*/

/*
let date = new Date("2024-07-02T14:30:00")

// Formata para o dia sempre ter 2 dígitos.
let day = date.getDate().toString().padStart(2, "0")
// console.log()

// Formata para o mês sempre ter 2 dígitos.
let month = (date.getMonth() + 1).toString().padStart(2, "0")
// console.log(month)

let year = date.getFullYear()
let hour = date.getHours()
let minute = date.getMinutes()

console.log(`${day}/${month}/${year} às ${hour}:${minute}`)
*/

/*
let date = new Date("2024-07-02T14:30:00")

// Converte para String.
console.log(date.toString())

// Retorna somente a data
console.log(date.toDateString())

// Retorna somente a hora.
console.log(date.toTimeString())
*/