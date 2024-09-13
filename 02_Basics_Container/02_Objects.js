// console.log("hello from object file")
//#01
const myobj = ({
    name: "Harshita",
    class: "btech",
    rollno: "05001172022",
    subject: "cse-ai"
})
console.log(myobj)
console.table([myobj.name, myobj.class, myobj.rollno, myobj.subject])

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
//Object.freeze(JsUser) //restrict adding or changing anything in the object after this
JsUser.email = "hitesh@chatgpt.com"
console.log(JsUser);
console.log(JsUser);

// * Adding function explicitly:
JsUser.greeting = function () {
    console.log("Hello JS user");
};

JsUser.greetingTwo = function () {
    console.log(`Hello JS user, ${this.name}`);
};


JsUser.greeting();
JsUser.greetingTwo();

// * There are 2 ways to make objects in JS: objects literals and singleton objects
/*
*  Object literals are the most common way to create objects in JavaScript. They are created using a simple and declarative syntax , can be created multiple times by simply defining the object literal structure each time you need a new instance
*  Singleton objects is an object that is instantiated exactly once. It is a design pattern that ensures a class has only one instance and provides a global point of access to it.
*/

//object literal:
let Person1 = {
    Name: 'Harshita1',
    age: 21,
    print: function () {
        console.log(`name is ${Person1.Name} and age is ${Person1.age}`);
    }
};
let Person2 = {
    Name: 'Harshita2',
    age: 21,
    print: function () {
        console.log(`name is ${Person2.Name} and age is ${Person2.age}`);
    }
};
console.log(Person1)
console.log(Person1.print())
console.log(Person2)
console.log(Person2.print())



// * 2 ways:
let TinderUser = new Object();
let InstagramUser = {}
// * addition of objects parameters:
 TinderUser = {}
TinderUser.id = 123456
TinderUser.Followers = 50000
TinderUser.UserName = "HarshitaRajoria022"
TinderUser.Activity = ["Monday", "Thursday", "Sunday"]
console.log(TinderUser)


console.log(Object.keys(TinderUser)); //[ 'id', 'Followers', 'UserName', 'Activity' ]
console.log(Object.values(TinderUser));
/**
 * [
  123456,
  50000,
  'HarshitaRajoria022',
  [ 'Monday', 'Thursday', 'Sunday' ]
]
 */
console.log(Object.entries(TinderUser));

/**
 * [
  [ 'id', 123456 ],
  [ 'Followers', 50000 ],
  [ 'UserName', 'HarshitaRajoria022' ],
  [ 'Activity', [ 'Monday', 'Thursday', 'Sunday' ] ]
]
 */
console.log(TinderUser.hasOwnProperty('isLoggedIn'));




// * Nested Objects:
InstagramUser = ({
    id: 1234567,
    Name: {
        FirstName: "Harshita",
        LastName: "Rajoria",
        id: {
            idName: "theycallmeharshita",
            userName: " Harshii"
        }
    },
    Password: "***********"
})
console.log(InstagramUser)
console.log(InstagramUser.Password)
console.log(InstagramUser.Name)
console.log(InstagramUser.Name.id)
console.log(InstagramUser.Name.id.userName)

// * Concatenating 2 objects:
const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }
const obj4 = { 5: "a", 6: "b" }
const obj3 = { obj1, obj2 }
console.log(obj3)
const obj6 = Object.assign(obj1, obj2, obj4)
console.log(obj6 == obj1)
console.log(obj6)
const obj5 = Object.assign({}, obj1, obj2, obj4)
console.log(obj5)
console.log(obj5 == obj1)
const obj7 = { ...obj1, ...obj2, ...obj4 }
console.log(obj7);


// * Access with the help of index: Start from 0 to n-1
const users = [
    {
        id: 1,
        email: "h1@gmail.com"
    },
    {
        id: 2,
        email: "h2@gmail.com"
    },
    {
        id: 3,
        email: "h3@gmail.com"
    },
]
console.log(users[1].email)
console.log(users[2].email)

const Course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

console.log(Course.courseInstructor)


// * API:
// {
//     "Name":"Harshita",
//     "Class":"UKG",

// }
// * API as an array:
[
    {},
    {},
    {}
]






// advance topic:
// for making  your own library:
const describe = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(describe)
{
    value: 3.141592653589793;
    writable: false;
    enumerable: false;
    configurable: false
}

InstagramUser = {
    id: 1234567,
    Name: {
        FirstName: "Harshita",
        LastName: "Rajoria",
        id: {
            idName: "theycallmeharshita",
            userName: " Harshii"
        }
    },
    Password: "***********"
}


console.log(InstagramUser)
console.log(Object.getOwnPropertyDescriptor(InstagramUser, "Password"))
Object.defineProperty(InstagramUser, "Password", {
    writable: false, //won't display
    enumerable: false, //can't apply loops
    configurable: true,
    value: "HarshitaRajoria"
})
console.log(Object.getOwnPropertyDescriptor(InstagramUser, "Password"))
for (const [key, value] of Object.entries(InstagramUser)) {
    console.log(`${key} : ${value}`)
}
