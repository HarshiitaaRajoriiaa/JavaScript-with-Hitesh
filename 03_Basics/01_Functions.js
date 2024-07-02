function name(){
    console.log("Harshita");
}
console.log("harshita")


// function addTwoNumbers1(number1, number2){

//     console.log(number1 + number2);
// }
// addTwoNumbers( 1,2)


// // * Return keyword need console.log() Statement:
// function addTwoNumbers2(number1, number2){//paraetera

//     let result = number1 + number2
//     return result
//     //return number1 + number2
// }
// // console.log(addTwoNumbers2(1,2))


// // * Function with condition:
// function loginUserMessage(username ){
//     if(!username){ //if nothing passed as argument then this will execute
//         console.log("PLease enter a username");
//         return
//     }
//     return `${username} just logged in`
// }
// // console.log(loginUserMessage()) //underfined
// // console.log(loginUserMessage("Harshita"))

// function loginUserMessage1(username = " Default value" ){
//     if(!username){ //if nothing passed as argument then this will execute
//         console.log("PLease enter a username");
//         return
//     }
//     return `${username} just logged in`
// }
// console.log(loginUserMessage1())
// console.log(loginUserMessage1("Harshita Rajoria"))

// // * playing with parameters:
// function calculateCartPrice1(num1){
//     return num1
// }
// function calculateCartPrice2(...num1){ // * Rest Operator:
//     return num1
// }
// // console.log(calculateCartPrice2(200 ,300,1000))

// function calculateCartPrice3(value1 , value2, ...num1){
//     return [value1,value2 , num1]
// }// considering first 2 argument as value1 and value2
// console.log(calculateCartPrice3(200 ,300,1000 , 90, 700090))


// // * Passing Array as argument in Function:
// const array1 = ["a" , "b" , " c"]
// function printArray(array){
//     console.log(array[2]);
// } 
// printArray(array1)
// printArray([200,300,400,500])

// // * Passing Objects as an arguments in function:
// const object = {
//     Name : "harshita",
//     Class :"ukg",
//     Rollno :1234
// }
// function objectPrint(object){ // This is not general but need some more things to make it general:
//     console.log(`Username is ${object.Name} and class is ${object.Class}`);
// }
// objectPrint(object)