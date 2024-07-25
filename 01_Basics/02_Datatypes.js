
/*
 * Primitive , by value ( copy of value)
 * 7types : String, Number, Boolean, null, undefined, Symbol, BigInt
*/
let name = "harshita"
let age = 21
let id2 = "78abc" 
let girl = true
let married = false
let project = null
let project_name;
console.log(name)
console.log(age)
console.log(girl)
console.log(married)
console.log(project)
console.log(project_name)
console.log(typeof name)
console.log(typeof age)
console.log(typeof girl)
console.log(typeof married)
console.log(typeof project)
console.log(typeof project_name)
const score = 100
const scoreValue = 100.3 //still Number , no float , double
const isLoggedIn = false //boolean
const outsideTemp = null //object
let userEmail; //undefined
//Static code is executed at compile time, while dynamic code is executed at runtime.
//here it's an example of dynamic coding 



// *Symbol:symbol : for uniqueness of two variables , whether they have same value or not.
const id = Symbol('123') 
const anotherId = Symbol('123')
console.log(id === anotherId);//false
const name1 = "harh"
const name2 = "harh" 
console.log(name1==name2) //true


//*bigint
const bigNumber = 3456543576654356754n 







//  ** Reference (Non primitive , by address reference) 
// * Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
//array , typeof = object
let myObj = {
    name: "hitesh",
    age: 22,
}
//object

const myFunction = function(){
    console.log("Hello world");
}
//function , typeof = function object

console.table(typeof anotherId  , typeof myFunction , typeof scoreValue , typeof heros , typeof myObj , typeof bigNumber , typeof anotherId , typeof outsideTemp );
console.log(typeof anotherId ) //symbol
console.log(typeof myFunction) // object
console.log(typeof scoreValue ) // Number
console.log(typeof heros) // object
console.log(typeof myObj) // object
console.log(typeof bigNumber) // bigint
console.log(typeof outsideTemp) // object, null


// https://262.ecma-international.org/5.1/#sec-11.4.3