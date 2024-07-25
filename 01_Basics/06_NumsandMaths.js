

// ** numbers:
const score = 100
const score2 = new Number(7879.0980)
const score3 = new Number(-7879.0980)
console.log(score)
console.log(score2)
console.log(score2.toString())
console.log(score2.toFixed(4)) //after decimal point number 
console.log(score2.toPrecision(3))
console.log(score2.toLocaleString('en-IN'))




// **some functions:
console.log(Math);
console.log(Math.abs(score3));
console.log(Math.sqrt(score2));//^2
console.log(Math.cbrt(score2)); //^3
console.log(Math.ceil(score2));
console.log(Math.floor(score2));
console.log(Math.round(score2));
console.log(Math.fround(score2));
console.log(Math.min(score2 ,score , score3));
console.log(Math.max(score2 ,score , score3));
console.log(Math.sign(0));//1 = "+" , -1 = "-" , 0 = "0" 
console.log(Math.imul(score2 , score));
console.log(Math.pow(2 , 3 )); //2^3
console.log(Math.random())



