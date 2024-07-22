// Default javascript behavior is "PROTOTYPAL"
/**
 * In JavaScript, prototypes are fundamental to its object-oriented nature. 
 * Prototypes allow objects to inherit properties and methods from other objects. 
 * This concept is key to understanding how JavaScript handles inheritance and object creation.
 */
function UserData(username, email_id, phone_number) {
    this.username = username;
    this.email_id = email_id;
    this.phone_number = phone_number;
}

UserData.prototype.displayInfo = function () {
    return `Username: ${this.username}, Email: ${this.email_id}, Phone: ${this.phone_number}`;
};

const user1 = new UserData("harshita", 'harshitarajoria02@gmail.com', 9654424376);
console.log(user1);
console.log(user1.displayInfo());

/**
 * Prototype Property: Every JavaScript function has a prototype property, which is an object.
This object is used to share properties and methods among all instances created by the constructor function.
 * Inheritance: When you add a method to the constructor's prototype, all instances inherit this method. 
In the example above, displayInfo is added to UserData.prototype, so all instances of UserData can access it.
 */

/**
 * array , string and functions are basically function which have property of objects
 */



//prototype is used to inject new functions and any instance of that particular function constructor can access injected function
function createUser(username, score) {
    this.username = username
    this.score = score
}

createUser.prototype.increment = function () {
    this.score++
}
createUser.prototype.printMe = function () {
    console.log(`price is ${this.score}`);
}

const chai = new createUser("chai", 25)
const tea =  new createUser("tea", 250)

chai.increment();
chai.printMe();


//if i want any new property in specific function i will inject it using .prototype and can do 
//if i want to inject a new property to my full window i will target higher one from  the hierarchy and inject new property their


// my task is to find the length of the string after the trailing spaces  @ the end of the string
let string  = "harshita            ";
// Attach the actualLength method to String.prototype
String.prototype.actualLength = function () {
    const stringWithOutSpaces = this.trim(); // Call trim() correctly
    const actualLengthString = stringWithOutSpaces.length;
    return actualLengthString; // Return the length instead of console logging
};

// Create a string instance
const stringInstance = new String(string);

// Call the actualLength method
const lengthWithoutSpaces = stringInstance.actualLength();
console.log(`Actual length of string without trailing spaces is ${lengthWithoutSpaces}`);




//adding prototype directly to object
let myHeros = ["thor", "spiderman"]//array
let heroPower = { //object
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

heroPower.hitesh()
myHeros.hitesh()
myHeros.heyHitesh()

//link two objects 
const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
}
Object.setPrototypeOf(TeachingSupport, Teacher) //Teacher had all properties of TeachingSupport
