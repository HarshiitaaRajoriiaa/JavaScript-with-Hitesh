
/*
  * Converting Strings to Numbers:
  * Converting Numbers to Strings:
  *Converting Dates to Numbers:
  *Converting Numbers to Dates:
  *Converting Booleans to Numbers:
  * Converting Numbers to Booleans:
 */



 // TODO : Strings to Numbers:
console.log(Number("3.14")) //3.14
console.log(Number(Math.PI)) //3.14............
console.log(Number(" ")) //0
console.log(Number("")) //0 
console.log(Number("998")) //998
console.log(Number("John")) //NAN
/**
* Number()	Returns a number, converted from its argument
* parseFloat()	Parses a string and returns a floating point number
* parseInt()	Parses a string and returns an integer
 */

// can be used to convert dates to numbers.
d = new Date();
console.log(Number(d))          // returns 1404568027739

// TODO : Numbers to Strings:
let x;
console.log(String(x))         // returns a string from a number variable x
console.log(String(123))       // returns a string from a number literal 123
console.log(String(100 + 23))  // returns a string from a number from an expression
// //* The Number method toString() does the same.
x.toString()
(123).toString()
(100 + 23).toString()
console.log(String(Date())) //Thu Jul 25 2024 11:24:11 GMT+0530 (India Standard Time)

// TODO : Booleans to Strings , Booleans to Numbers
Number(false)     // returns 0
Number(true)      // returns 1
String(false)      // returns "false"
String(true)       // returns "true"
false.toString()   // returns "false"
true.toString()    // returns "true"

 
//TODO  Automatic Type Conversion:
5 + null    // returns 5         because null is converted to 0
"5" + null  // returns "5null"   because null is converted to "null"
"5" + 2     // returns "52"      because 2 is converted to "2"
"5" - 2     // returns 3         because "5" is converted to 5
"5" * "2"   // returns 10        because "5" and "2" are converted to 5 and 2