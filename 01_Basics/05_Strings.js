console.log("hello from string file")
const firstname = "Harshita" 
//objectify string
const lastname = new String("Rajoria") //[String: 'Rajoria']
console.log(firstname)
console.log(lastname)
//string interpolation:
console.log(`My  name is ${firstname} and my lastname is ${lastname}`) 
console.log(lastname.__proto__)//{ }


// IN BUILD - FUNCTIONS:
const test = new String("                string , for    , testing / different different inbuild functions!!             ")
//at() like charAt() but take positive and negative value both:
console.log(test.at(7)) // 0, 1, 2, 3, .............
console.log(test.at(-9)) // .........-3, -2, -1 
console.log(lastname.charAt(5))
console.log(lastname.charCodeAt(5)) //return unicode #ascyll code
//indexOf()  = return index simply vs search()= can perform more complex practices: 
console.log(lastname.indexOf('i'))  //return index
console.log(test.lastIndexOf("different")) //return index of last element if more than one present in string
console.log(test.search("string"))  //return index -1 if not present
console.log(test.includes("kaka")) //boolean , presence
console.log(test.big()) //bigger in display #html
console.log(test.toLowerCase())
console.log(test.toUpperCase())
console.log(test.trim()) // trimLeft() , trimStart() = remove white spaces , spaces from string initial.
//trimEnd() , trimright() spaces from end 
const nstring = test.trim().substring(0 , 12)  // substring from 0 to 11 , 12 excluded
console.log(test.split(',')) //splitting string into array by input element.
console.log(test.replace( ',' ,'@'  )) //replace , by @ / only first ","
console.log(test.replaceAll( ',' ,'@'  )) //all ", " by "@"