// *falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN
if(0n){
    console.log("never executed")
}
console.log("hi")
// *truthy values
// "0", 'false', " ", [], {}, function(){}
if("0"){
    console.log("alwys executed")
}
console.log("hi")


//check whether the array is empty or not:
const userEmail = [] 
if (userEmail.length === 0) {
    console.log("Array is empty");
}

//check whether the object is empty or not:
const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// *Nullish Coalescing Operator (??): null undefined
//logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.
let val1; //undefined
console.log(val1)
val1 = 5 ?? 10
val1 = null ?? 10
val1 = undefined ?? 15
val1 = null ?? null ?? 20
// console.log(val1);
const baz = 0 ?? 42;
console.log(baz); //0

// *Ternary Operator:

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")

