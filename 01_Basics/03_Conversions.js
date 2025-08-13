
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
//*parseInt only extracts the first integer value from a string, ignoring any subsequent characters, while Number attempts to convert the entire string to a number, returning "NaN" (Not a Number) if it encounters non-numeric characters anywhere in the string;
console.log(parseInt("123abc")); // Outputs: 123
console.log(Number("123abc")); // Outputs: NaN [1, 2, 3] 

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


// String() is a constructor function that can be used as a regular function to convert any value to a string. It accepts any data type as an argument, including null and undefined, and returns its string representation.


String(123); // Returns "123"
String(true); // Returns "true"
String(null); // Returns "null"
String(undefined); // Returns "undefined"
String({ key: 'value' }); // Returns "[object Object]"


// toString() is a method available on most JavaScript objects, including numbers, booleans, objects, and arrays. It converts the object on which it is called to a string. However, it cannot be called on null or undefined directly; doing so will result in an error.
(123).toString(); // Returns "123"
true.toString(); // Returns "true"
({ key: 'value' }).toString(); // Returns "[object Object]"
[1, 2, 3].toString(); // Returns "1,2,3"
// When dealing with null or undefined, String() is the preferred choice as it handles these values gracefully. For other data types, both methods can be used, but toString() is generally preferred when working directly with an object instance.
 





// TODO : Booleans to Strings , Booleans to Numbers
Number(false)     // returns 0
Number(true)      // returns 1
String(false)      // returns "false"
String(true)       // returns "true"
false.toString()   // returns "false"
true.toString()    // returns "true"

 
//TODO  Automatic Type Conversion: also known as coercion
console.log(5 + "5"); // Output: "55" (number 5 is coerced to a string)
console.log(5 == "5"); // Output: true ("5" is coerced to a number for comparison)
console.log(true + 1); // Output: 2 (true is coerced to 1)
5 + null    // returns 5         because null is converted to 0
"5" + null  // returns "5null"   because null is converted to "null"
"5" + 2     // returns "52"      because 2 is converted to "2"
"5" - 2     // returns 3         because "5" is converted to 5
"5" * "2"   // returns 10        because "5" and "2" are converted to 5 and 2