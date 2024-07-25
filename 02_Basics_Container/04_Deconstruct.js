// TODO Destructuring:

// **Object Destructuring
// Create an Object
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50
  };

console.log(person)
// let {firstName, lastName, country = "US"} = person;
console.log(lastName)
console.log(country)
let {lastName : name} = person;
console.log(name)


// **String Destructuring: One use for destructuring is unpacking string characters.
// Create a String
let name2 = "W3Schools";
// Destructuring
// let [a1, a2, a3, a4, a5] = name2;
// console.log(a5)
// console.log(name2.charAt(7))
// ** swapping:
let firstName = "John";
let lastName = "Doe";

// Destructing
[firstName, lastName] = [lastName, firstName];


// ** Array Destructuring: We can pick up array variables into our own variables:
// Create an Array
let  fruits = ["Bananas", "Oranges", "Apples", "Mangos"];

// Destructuring
let [fruit1, fruit2 , fruit4] = fruits;
// let [fruit1,,,fruit2] = fruits;
console.log(fruit2)  //Mangos
console.log(fruits)
// let {[0]:fruit1 ,[1]:fruit2 , [3]:mango} = fruits
console.log(mango)


// *? Rest Property:
// Create an Array
const numbers = [10, 20, 30, 40, 50, 60, 70];

// Destructuring
const [a,b, ...rest] = numbers
console.log(a)
console.log(rest) //store left in rest :[ 30, 40, 50, 60, 70 ]
console.log(f)
console.log(z)

// ** Destructuring Maps:
// Create a Map
 fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  
  // Destructing
  let text = "";
  for (const [key, value] of fruits) {
    text += key + " is " + value + " ";
  }
  console.log(text)