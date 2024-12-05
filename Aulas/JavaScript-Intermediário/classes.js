/*
class Person {
  constructor(name){
    console.log("Olá", name)
  }
}

const person = new Person("João")
*/

/*
class Product {
  constructor(name){
    this.name = name
  }
}

const product1 = new Product("Teclado")
console.log(product1.name)

const product2 = new Product("Mouse")
console.log(product2.name)
*/

/*
class User {
  constructor(name, email){
    this.name = name
    this.email = email
  }

  sendEmail(){
    console.log(
      "Email enviada para", 
      this.name, 
      "no endereço eletrônico", 
      this.email)
  }
}

const user = new User("João", "joao@email.com")
user.sendEmail()
*/

/*
class User {
  static showMessage(message){
    console.log(message)
  }
}

//const user = new User()
//user.showMessage()

User.showMessage("Essa é uma mensagem")
*/

/*
class Animal {
  constructor(name){
    this.name = name
  }

  makeNoise(){
    console.log("Algum som genérico do animal")
  }
}

class Dog extends Animal {
  makeNoise(){
    console.log("Woof! Woof! Woof!")
  }
}

const dog = new Dog("Belu")
console.log(dog.name)
dog.makeNoise()

class Cat extends Animal {
  makeNoise(){
    console.log("Miau... Miau... Miau...")
  }
}

const cat = new Cat("Mel")
console.log(cat.name)
cat.makeNoise()
*/

/*
const address = {
  city: "São Paulo",
  country: "Brazil"
}

console.log(address)

const users = ["Rodrigo", "João", "Maria"]
console.log(users)

const userName = "João Victor"
console.log(userName.__proto__)
*/

/*
let obj = [17]
let index = 300

try{
  // obj.execute()
  
  if (!obj.includes(17)){
    throw new Error("O número 17 não está disponível.")
  }

  if (index > 99){
    throw new RangeError("Número está fora do intervalo. Escolha um número de 0 a 99")
  }
} catch(error) {
  if(error instanceof TypeError){
    console.log("Método indisponível.")
  }else if (error instanceof RangeError){
    console.log(error.message)
  } else {
    console.log("Não foi possível realizar a ação.")
  }
 
}
*/

class MyCustomError {
  constructor(message){
    this.message = "CLASSE DE ERRO CUSTOMIZADA: " + message
  }
}

try {
  // throw new Error("Erro genérico")

  throw new MyCustomError("Erro personalizado lançado!")
} catch (error) {
  if (error instanceof MyCustomError) {
    console.log(error.message)
  } else {
    console.log("Não foi possível executar!")
  }
}