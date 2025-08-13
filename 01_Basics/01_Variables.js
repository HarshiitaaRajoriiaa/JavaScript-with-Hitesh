//* Const:
const accountid = 1234
//accountid = 1234221 can't be re-assign
//const accountid = 1234 can't redeclare
const blank = "must be initialized"
console.log("About Const Variable:")
console.table([accountid , typeof accountid , blank , typeof blank])


//* Let:
console.log("About let Variable:")
let accountEmail = "harshita@google.com"
console.table([accountEmail , typeof accountEmail])

//output
// ┌─────────┬───────────────────────┐
// │ (index) │ Values                │
// ├─────────┼───────────────────────┤
// │ 0       │ 'harshita@google.com' │
// │ 1       │ 'string'              │
// └─────────┴───────────────────────┘
//let accountEmail =  "xyz@google.com" can't redeclare
accountEmail = "wxy@google.com" //can re assign
console.log(`after re-assinging the value of accountid ${accountEmail} ,  and type of account email is ${typeof accountEmail}`)
let accountState; //no need to initialize
console.log(accountState , typeof accountState)


//* Var:
console.log("About var Variables:")
var accountPassword = "23445"  
console.log(accountPassword)
var accountPassword = "12321" //can re-declare
console.log("after re-declare")
console.log(accountPassword)
accountPassword = "98" //can re-assign
console.log("after re-assign")
console.log(accountPassword)
var blank2; //no need to initialise
console.log(blank2 , typeof blank2)


//* without any prefix:
console.log("About variables without any prefix")
name = "Harshita Rajoria"
roll_no = 123
 // class; can't initialize like this
console.log(name , roll_no , typeof name , typeof roll_no)

/*
Variables:-
LET: can re-declare , re-assign ,create block scoping problem, Hoisted and initialized to undefined by default.
CONST: can’t re-declare , can re-assign , Hoisted and initialized to undefined by default.
VAR:can’t re-declare , can’t re-assign ,  Hoisted and  must be initialized and will result in a ReferenceError.
console.table([ , , , , ]):
 */