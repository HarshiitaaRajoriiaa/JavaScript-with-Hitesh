
// *for of: Direct Value.
// for (const iterator of object) {    
// }

//Array:
const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    console.log(num);
}

//String:
const greetings = "Helloworld!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
}

//Map:
const map = new Map()
.set('key' , 'value') 
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
console.log(map);
for(const key of map){
    console.log(key);//printing each key-value pair as an array
}
for (const [key, value] of map) { //destructing of array
    console.log(key, ':-', value);
}

//Object:
//object is not iterable like maps:
const myObject = {
    game1: 'NFS',
    game2: 'Spider man'
}
for (const [key, value] of myObject) {
    console.log(key, ':-', value);
}



// *for in: Keys or Index
/* for (const key in object) {
    
} */
//Object:
const myObject1 = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}
for(const key in myObject1)
    {
        console.log(key)
   }
for(const key in myObject1){ //undefined
    console.log(myObject1.key)
}
for (const key in myObject1) {
    console.log(`${key} shortcut is for ${myObject1[key]}`);
}

//Array:
const programming = ["js", "rb", "py", "java", "cpp"]
for (const element in programming) {
    console.log(element , programming[element]);
    console.log()
}

//MAp://won't work.
// const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")//This overwrites the previous 'IN' entry
for (const key in map) {
    console.log(map[key]);
}



// *For-Each():
/*array.forEach(element => {
    
}); */

//Array:
const coding = ["js", "ruby", "java", "python", "cpp"]
coding.forEach( function (val){
    console.log(val);
} )
coding.array.forEach( function(){});
coding.forEach( (item) => console.log(item);)
function printMe(item){
        console.log(item);
  }
coding.forEach(printMe)
const newNums = [];
myNums.forEach( (num) => { 
    if (num > 4) {
        newNums.push(num)
    }
} )

//Object in array
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]
myCoding.forEach( (item) => {
    console.log(item.languageName);
} )




