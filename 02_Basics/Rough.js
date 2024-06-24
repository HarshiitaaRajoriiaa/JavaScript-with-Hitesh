console.log("Harshita ")
const mySym = Symbol('mykey1'); // Define the symbol first
const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
};

// Add the greeting methods to the JsUser object
JsUser.greeting = function() {
    console.log("Hello JS user");
};

JsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`);
};

// Call the methods
JsUser.greeting(); // This will print "Hello JS user"
JsUser.greetingTwo(); // This will print "Hello JS user, Hitesh"
