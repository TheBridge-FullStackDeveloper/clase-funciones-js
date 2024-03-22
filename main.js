// // let a = 2
// // let b = 4
// // let resultado = a + b

// function sum(a, b) {
//   return a + b;
// }

// console.log(sum(1, 2));
// console.log(sum(3, 5));
// console.log(sum(7, 5));
// console.log(sum(3, 9));

// function test() {
//   return "Hola estoy probando funciones";
// }

// console.log(test());

// function sayName(name = "Nombre ejemplo") {
//   return "Soy " + name;
// }

// console.log(sayName("Pablo"));
// console.log(sayName("Juan Carlos"));
// console.log(sayName("Daniela"));
// console.log(sayName());

// const person = {
//   firstName: "Agustín",
//   lastName: "Corrales",
// };

// function sayMyFullName(person) {
//     // Hola mi nombre completo es ...
//     // return "Hola mi nombre completo es " + person.firstName + " " + person.lastName
//     return `Hola mi nombre completo es ${person.firstName} ${person.lastName}`
// }

// console.log(sayMyFullName(person))
// console.log(sayMyFullName({firstName:"Agustin",lastName:"Erimbaue"}))

// function greet(greeting = "Hello", name) {
//     if (!name) {
//       return greeting;
//     } else {
//       return `${greeting} ${name}`;
//     }
// }

// console.log(greet("Hola","Paulo"))
// console.log(greet(undefined,"Pepito"))
// let prueba = prompt("dime numero")
// console.log(typeof +prueba)

function calculadora() {
  let num1 = +prompt("Introduce el 1º número.");
  let signo = prompt(
    "Introduce un signo aritmético entres los siguientes:\n'+' --> Suma\n'-' --> Resta\n'*'--> Multiplicación\n'/' --> División\n'^' --> Potencia\n'%' --> Módulo"
  );
  let num2 = +prompt("Introduce el 2º número.");
  switch (signo) {
    case "+":
      resultado = num1 + num2;
      break;
    case "-":
      resultado = num1 - num2;
      break;
    case "*":
      resultado = num1 * num2;
      break;
    case "/":
      resultado = num1 / num2;
      break;
    case "^":
      resultado = num1 ** num2;
      break;
    case "%":
      resultado = num1 % num2;
      break;

    default:
      break;
  }
  //   El resultado de tu operación es ...
  return `El resultado de tu operación es ${resultado}`;
}

// console.log(calculadora());

// Crea la función convierteString debe recibir un tipo number y devolver el número como string .
// Si la función no recibe un dato tipo number debe devolver el string 'Debo ser ejecutada con un número'

function convierteString(num) {
  // aquí tu código
  if (typeof num != "number") {
    return "Debo ser ejecutada con un número";
  }
  return num.toString();
}
console.log(convierteString(7));
console.log(convierteString("pepito"));

// Crea la función esPar que acepte como argumento un número y devuelva true si es par y false si es impar.
// function esPar(num) {
//   // aquí tu código
//   if (typeof num != "number") {
//     return "Debo ser ejecutada con un número";
//   }
//   if (num % 2 === 0) {
//     return true;
//   }
//   return false;
// }

function esPar(num) {
  // aquí tu código
  // if (typeof num != "number") {
  //   return "Debo ser ejecutada con un número";
  // }
  // if (num % 2 === 0) {
  //   return true;
  // }
  // return false;
  switch (true) {
    case typeof num != "number":
      return "Debo ser ejecutada con un número";
    case num % 2 === 0:
      return true;
    default:
      return false;
  }
}
console.log(esPar(4));
console.log(esPar(5));
console.log(esPar(3));
console.log(esPar("hola"));
