// *For-Loop:
// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if (element == 5) {
//         console.log("5 is best number");
//     }
//     console.log(element);
// }
// console.log(element); //can't access globally

// *Nested For-Loop:
// for (let i = 1; i <= 10; i++) {
//     console.log(`Outer loop value: ${i}`);
//    for (let j = 1; j <= 10; j++) {
//     console.log(`Inner loop value ${j} and inner loop ${i}`);
//     console.log(i + '*' + j + ' = ' + i*j );
//    }
// }

// printing element of array one by one.
// let myArray = ["flash", "batman", "superman"]
// console.log(myArray.length);
// for (let index = 0; index < myArray.length; index++) {
//     console.log(myArray[index]);
// }




// *Break and Continue:
// in break : come out of the loop and terminate.
// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i is ${index}`);
    
// }
// in continue: leave that iteration and continue executing the loop.
// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         continue
//     }
//    console.log(`Value of i is ${index}`);
// }



// *for of

// ["", "", ""]
// [{}, {}, {}]
//Array:
// const arr = [1, 2, 3, 4, 5]
// for (const num of arr) {
//     console.log(num);
// }
//String:
// const greetings = "Helloworld!"
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`)
// }
//Map:
// const map = new Map()
//.set('key' , 'value') 
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// console.log(map);
// for (const [key, value] of map) {
//     console.log(key, ':-', value);
// }
//Object:
//object is not iterable like maps:
// const myObject = {
//     game1: 'NFS',
//     game2: 'Spider man'
// }
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }

// *for in:
//Object:
// const myObject1 = {
//     js: 'javascript',
//     cpp: 'C++',
//     rb: "ruby",
//     swift: "swift by apple"
// }
// for (const key in myObject1) {
//     console.log(`${key} shortcut is for ${myObject1[key]}`);
// }
//Array:
// const programming = ["js", "rb", "py", "java", "cpp"]
// for (const element in programming) {
//     console.log(element , programming[element]);
//     // console.log()
// }
// //MAp:
// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")//This overwrites the previous 'IN' entry

// for (const key in map) {
//     console.log(map[key]);
// }//won't work.

// *For-Each():
//Array:
// const coding = ["js", "ruby", "java", "python", "cpp"]
// coding.forEach( function (val){
//     console.log(val);
// // } )
// coding.forEach( (item) => console.log(item);)

// function printMe(item){
//         console.log(item);
//   }
// coding.forEach(printMe)

//Object:
// const myCoding = [
//     {
//         languageName: "javascript",
//         languageFileName: "js"
//     },
//     {
//         languageName: "java",
//         languageFileName: "java"
//     },
//     {
//         languageName: "python",
//         languageFileName: "py"
//     },
// ]

// myCoding.forEach( (item) => {
//     console.log(item.languageName);
// } )

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNums.filter( (num) => {
//     return num > 4
// } )
// console.log(newNums)

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )
// console.log(newNums);
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')

  userBooks = books.filter( (bk) =>  bk.publish >= 1995 && bk.genre === "History")
  console.log(userBooks);