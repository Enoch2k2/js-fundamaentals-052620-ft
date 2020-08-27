// Fundamentals of JSs

// DataTypes Of Ruby
/*
  1. Strings
  2. Integers
  3. Boolean
  4. Float
  5. Nil
  6. Array
  7. Hash
  8. Symbol
  9. Object / Instance


  An Object
*/
// VS

// DataTypes of JS

/*
   Primitive Datatypes are not an object.
   Objects - Arrays are Objects
   Integers  are Primitive

   1. Strings
   2. Numbers which are integers
   3. Booleans
   4. Float
   5. null
   6. undefined
   7. array
   8. object
   9. class
   10. Function Definitions
*/

/*
  Variables
  ------

  Variables are defined with a keyword. This is called declaring a variable. let, const, or var is used as declarations. We don't use var.

  Hoisting - Predefines, declares but doesn't define. Var gets hoisted.

  var is hoisted, can be re-declared
  let is not hoisted, cannot be re-declared, can be re-assigned
  const is not hoisted, cannot be re-declared, cannot be re-assigned

  safe to use - let and const
*/


let name = "Bob" // what scope? global

function greeting(name) {
  // arguments are what scope? local
  // name = "Sam" // what scope is this variable? local
  // console.log(`hello ${name}`)

  switch (name) {
    case "Bob":
      console.log("My name is Bob")
      break;
    case "Sarah":
      console.log("My name is Sarah")
      break;
    default:
      console.log("My name is Batman")
      break;
  }

}

greeting("Sarah");


// let greeting = function () {
//   console.log('hello world')
// }

// const greeting = (name, age) => {
//   // multiple lines of
//   // logic
//   return `hello ${name}, I am ${age} years old.`
// };

// console.log(greeting("Bob", 24))