// console.log("hello from object file")
//#01
const myobj = ({
    name:"Harshita",
    class:"btech",
    rollno:"05001172022",
    subject:"cse-ai"
})
console.log(myobj)
console.table([myobj.name , myobj.class , myobj.rollno , myobj.subject])

const mySym = Symbol("KEY") //constructor
const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}


JsUser.email = "hitesh@microsoft.com"
Object.freeze(JsUser) //restrict adding or changing anything in the object after this
JsUser.email = "hitesh@chatgpt.com"
console.log(JsUser);
// 
console.log(JsUser);

// * Adding function explicitly:
JsUser.greeting = function() {
    console.log("Hello JS user");
};

JsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`);
};


JsUser.greeting();
JsUser.greetingTwo();

// * There are 2 ways to make objects in JS: objects literals and singleton objects
/*
*  Object literals are the most common way to create objects in JavaScript. They are created using a simple and declarative syntax , can be created multiple times by simply defining the object literal structure each time you need a new instance
*  Singleton objects is an object that is instantiated exactly once. It is a design pattern that ensures a class has only one instance and provides a global point of access to it.
*/

// object literal:
// let Person1 = {
//     Name: 'Harshita1',
//     age: 21,
//     print: function() {
//       console.log(`name is ${Person1.Name} and age is ${Person1.age}`);
//     }
//   };
//   let Person2 = {
//     Name: 'Harshita2',
//     age: 21,
//     print: function() {
//       console.log(`name is ${Person2.Name} and age is ${Person2.age}`);
//     }
//   };
// console.log(Person1)
// console.log(Person1.print())
// console.log(Person2)
// console.log(Person2.print())


//singleton object:
  