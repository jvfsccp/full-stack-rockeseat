// INTRODUÇÃO AO DOM

// Visualizar o conteúdo do document.
// console.log(document)

// Obter o title da pagina.
// console.log(document.title)

// // Acessar o elemento pelo ID
// const guest = document.getElementById("guest-2")
// console.log(guest)

// // Mostra as propriedades do objeto.
// console.dir(guest)

// ACESSANDO ELEMENTOS NO JAVASCRIPT

// // Acessar elemento com class (SELETOR class).
// const guestByClass = document.getElementsByClassName("guest")
// console.log(guestByClass)

// // Exibir o primeiro elemento da lista.
// console.log(guestByClass.item(0))
// console.log(guestByClass[1])

// // Selecionar lista de elementos pela tag
// const guestbyTag = document.getElementsByTagName("li")
// console.log(guestbyTag)

// QUERY SELECTOR

// Acessa o elemento pelo seletor ID
// const guest = document.querySelector("#guest-1")
// console.log(guest) 
// // Acessa o elemento pelo seletor class
// // const guests = document.querySelector(".guest")

// // Retorna todos os elementos encontrados pela query
// const guests = document.querySelectorAll(".guest")
// console.log(guests)

// MANIPULAÇÃO DE CONTEÚDO

// const guest = document.querySelector("#guest-1")

// // Retorna o conteúdo como texto
// // console.log(guest.textContent)
// // guest.textContent = "Maria"

// console.log(guest.textContent) // Retorna o conteúdo visível e oculto
// console.log(guest.innerText) // Retorna somente o conteúdo visível
// console.log(guest.innerHTML) // Retorna o HTML como texto.

// ALTERANDO ESTILOS

// const input = document.querySelector("#name")

// // Adiciona a classe.
// // input.classList.add("input-error")

// // Remove a classe.
// // input.classList.remove("input-error")

// Se não tiver a classe adiciona. Se tem, remove.
// input.classList.toggle("input-error")

// const button = document.querySelector("button")
// button.style.backgroundColor = "red"

// CRIANDO ELEMENTOS

// const guests = document.querySelector("ul")

// const newGuest = document.createElement("li")
// newGuest.classList.add("guest")
// const guestName = document.createElement("span")

// guestName.textContent = "Diego"

// const guestSurname = document.createElement("span")
// guestSurname.textContent = "Fernandes"

//Adiciona após o último filho.
//newGuest.append(guestName, guestSurname)
// Adiciona antes do primeiro filho.
// guestSurname.prepend("Fernandes")

// // É mais simples que o append e aceita apenas um argumento
// newGuest.appendChild(guestName)

//guests.append(newGuest)
// guests.prepend(newGuest)

// MANIPULANDO ATRIBUTOS

//const input = document.querySelector("input")
// Atualizar um atributo
// input.setAttribute("disabled", true)
// input.setAttribute("type", "file")

// Remover um atributo
// input.removeAttribute("id")

// EVENTOS
// window.addEventListener("load", () => {
//   console.log("A página foi carregada!")
// })

// addEventListener("click", (event) => {
//   e.preventDefault()

//   // Retorna todas as informações do evento
//   // console.log(event)

//   // Retorna o elemento clicado
//   console.log(event.target)

//   // Retorna o textContent do elemento clicado
//   console.log(event.target.textContent)
// })

// EVENTOS DE UM ELEMENTO ESPECIFICO
// const ul = document.querySelector("ul")
// ul.addEventListener("scroll", (event) => {
//   console.log(ul.scrollTop)

//   if (ul.scrollTop > 300) {
//     // console.log("Fim da lista")

//     ul.scrollTo({
//       top: 0,
//       behavior: "smooth"
//     })
//   }
// })

// const button = document.querySelector("button")
// button.addEventListener("click", (event) => {
//   event.preventDefault()
//   console.log("clicou!")
// })

// EVENTOS DE FORMULÁRIO
// const form = document.querySelector("form")
// form.onsubmit = (event) => {
//   event.preventDefault()
//   console.log("Você fez submit no formulário #1")
// }

// form.onsubmit = (event) => {
//   event.preventDefault()
//   console.log("Você fez submit no formulário #2")
// }

// form.addEventListener("submit", (event) => {
//   event.preventDefault()
//   console.log("Você fez submit no formulário #3")
// })

// form.addEventListener("submit", (event) => {
//   event.preventDefault()
//   console.log("Você fez submit no formulário #4")
// })


// EVENTOS EM INPUT
// const input = document.querySelector("input")

// keydown - quando uma tecla é pressionada (captura tudo, incluindo CTRL, SHIFT, etc)
/*input.addEventListener("keydown", (event) => {
  console.log(event.key)
}) */

// keypress - quando uma tecla do tipo caractere é pressionado (letras, números, pontos, etc.)
// input.addEventListener("keypress", (event) => {
//   console.log(event.key)
// })

// input.onchange = () => {
//   inputChange()
// }

// function inputChange() {
//   console.log("O INPUT MUDOU!")
// }

// MANIPULANDO VALORES DO INPUT
// const input = document.querySelector("input")
// input.addEventListener("input", () => {
//   const value = input.value
  
//   const regex = /\D+/g

//  Retorna o padrão encontrado na string.
//  console.log(value.match(regex))

//   const isValid = regex.test(value)
//   console.log(isValid)
// })

const input = document.querySelector("input")
const form = document.querySelector("form")

form.addEventListener("submit", (event) => {
  event.preventDefault()
  const value = input.value

  console.log(value)
})

