console.log("hello from datatypes file:")
"use strict";
/*
 Primitive , by value ( copy of value)
 7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt
*/
let name = "harshita"
let age = 21
let id2 = "78abc" 
let girl = true
let married = false
let project = null
let projectname;
console.log(name)
console.log(age)
console.log(girl)
console.log(married)
console.log(project)
console.log(projectname)
console.log(typeof name)
console.log(typeof age)
console.log(typeof girl)
console.log(typeof married)
console.log(typeof project)
console.log(typeof projectname)
const score = 100
const scoreValue = 100.3 //still Number , no float , double
const isLoggedIn = false //boolean
const outsideTemp = null //object
let userEmail; //underdefined
//Static code is executed at compile time, while dynamic code is executed at runtime.
//here it's an example of dynamic coding 

const id = Symbol('123') 
const anotherId = Symbol('123')
//symbol : for uniquness of two varibles , whether they have same value or not.

console.log(id === anotherId);//false

const bigNumber = 3456543576654356754n //bigint



// Reference (Non primitive , by address refrence) 
// Array, Objects, Functions

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
console.log(typeof outsideTemp) // objcte , null


// https://262.ecma-international.org/5.1/#sec-11.4.3