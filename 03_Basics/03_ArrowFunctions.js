// *Arrow functions allow us to write shorter function syntax:
// let product = (a, b) => a * b;
// console.log(product(2,3));

//Before:
hello = function() {
    return "Hello World!";
  }
console.log(hello())
  
//After:
hello2 = () =>{
    return "Hello2"
}  
console.log(hello2())

// *It gets shorter! If the function has only one statement, and the statement returns a value, you can remove the brackets and the return keyword:
hello= () =>  "Hello Harshita";
console.log(hello())


// *Parametrized AFunctions:
const fuct1 = (value) => value+2;
console.log(fuct1(2))
//Without Parentheses:
const fucnt2 = value => value+3;
console.log(fucnt2(6))
