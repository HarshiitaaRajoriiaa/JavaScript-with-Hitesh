/*
*In JavaScript, the this keyword refers to an object.
*The this keyword refers to different objects depending on how it is used:
*/

//In an object method, this refers to the object:
const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
}
console.log(person.fullName())

const person2 = {
    firstName  : "John",
    lastName   : "Doe",
    id         : 5566,
    myFunction : function() {
      return this;
    }
  }
console.log(person2.myFunction()) //details of the object , work as content displayer of current scope.



//Alone, this refers to the global object.
console.log(this) //empty object rn

//In a function, the global object is the default binding for this.
//In a function, the global object is the default binding for this.
function myFunction() {
    return this;
  }
console.log(myFunction())

//JavaScript strict mode does not allow default binding. So, when used in a function, in strict mode, this is undefined.
"use strict";
function myFunction() {
    return this;
  }
console.log(myFunction())