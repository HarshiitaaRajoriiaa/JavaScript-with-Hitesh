// *if:
if(true){
    //Statement execute:
}
if(1==1) console.log("true")
if(1==1) console.log("true") , console.log("equals") //not advised! 


// *if-else:
const isUserloggedIn = true
const temperature = 90
if ( temperature === 40 ){
    console.log("less than 50");//Run conditionally 
} else {
    console.log("temperature is greater than 50");//Run conditionally
}
console.log("Execute");//run globally every time

// * Comparison Operators:
// <, >, <=, >=, ==, !=, === Check data type also, !== check whether a and  have same thing and same datatype

// *if-elseif:
const balance = 1000
if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
    
} else if (balance < 900) {
    console.log("less than 750");
    
} else {
    console.log("less than 1200");
}


// *or and And
const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) { //all should be true.
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) { //any one of condition should be true.
    console.log("User logged in");
}