console.log("hello from  operators file")

let value = 3
let negValue = -value
console.log(negValue);
// Arithmetic Operators: 
let text = "Hello"; text += " World" // text = "Hello World"
let x = 10 //letting x =10 for every example,
x += 5 // x =15
x -= 5 // x = 10
x *= 5 // x = 50
x **= 5 // 10^5
x /= 5 //x=2
x %= 5 //x=0
x &= 5 // x = 0
x |= 5 // x = 15
x ^= 5 // x = 15
x &&= 5 // x = 
x ||= 5 // x =
x ??= 5 // x =5 

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
console.log(str3)
//Adding Strings and Numbers
let x1 = 5 + 5
let y = "5" + 5
let z = "Hello" + 5


//terenary , condition ? expressionIfTrue : expressionIfFalse;
let x2= 10;
let result = (x > 5) ? "x is greater than 5" : "x is not greater than 5"; //"x is greater than 5"
// Should'nt use these types of way: they are confusing and unpredictable.
/*
console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");
console.log(+true);
console.log(+"");
let num1, num2, num3
num1 = num2 = num3 = 2 + 2
*/



// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion