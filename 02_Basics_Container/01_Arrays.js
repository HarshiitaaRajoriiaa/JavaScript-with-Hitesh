
// *Different datatype allowed:
const arr12 = [1,2,3,4,"harshita"]
console.log(arr12)
console.log(arr12.reverse())

// *Can declare it like a object:
const arr2 = new Array(1,2,3)
console.log(arr2)

// *Accessing element with index (0 to n-1), where n = no. of elements in array
console.log(arr12[2])





// *?Array methods:
console.log("About array in_build methods:")


// TODO every element =1.
arr12.fill(1) 
console.log(arr12)

// TODO add element at the end:
arr12.push(0)
arr12.push('chickens', 'cats', 'dogs');
console.log(arr12)

// TODO return last element of array:
console.log(arr12.pop())

// TODO delete  last element of array:
arr12.pop()

// TODO add element in the beginning:
arr12.unshift(7 , 10)
console.log(arr12)

// TODO delete element from the beginning:
arr12.shift()
console.log(arr12)

// TODO boolean return true or false according to the existence of element:
console.log(arr12.indexOf(8))

// TODO new string by concatenating all of the elements in this array,
console.log(arr12.join())
console.log(typeof arr12.join())
const elements = ['Fire', 'Air', 'Water'];
console.log(elements.join());
console.log(elements.join(' '));
console.log(elements.join('-'));



// *Slice vs Splice:
console.log("About Splice and slice:")


// *?Slice: range excluded
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2));
console.log(animals.slice(2, 4)); 
console.log(animals.slice(1, 5));
console.log(animals.slice(-2));  //-1 to -2
console.log(animals.slice(2, -1));
console.log(animals.slice(2, -2)); //*! Doubt



// *?Splice: range included:
// *?Splice: overwrite the array
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 1,  'Feb'); // TODO  at position 1 add feb and remove position 1 
console.log(months);
months.splice(0,2,'May'); //returning the deleted elements.
console.log(months);
months.splice(2,1);// TODO at position 2 remove 1 element
console.log(months);





// *some more functions:
const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]
marvel_heros.push(dc_heros)
console.log(marvel_heros) //[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]



const allHeros = marvel_heros.concat(dc_heros) //concat
const all_new_heros = [...marvel_heros, ...dc_heros , ...arr] //TODO spread
console.log(allHeros);
console.log(all_new_heros)
const arr1 = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5 , [1,2,3,4] , 9 , 0 ] , 9 , 7 ] , [ 9 , 7 , 6 , 6 ] , 7 , 8]
console.log(arr1.flat(3))// TODO deepen
console.log(arr1.flat(2))
console.log(arr1.flat(1))


console.log(Array.isArray("Hitesh")) // TODO typeof
console.log(Array.from("Hitesh")) // TODO change any data to array
console.log(Array.from({name: "hitesh"})) // TODO interesting //objectification
console.log(typeof(Array.from({name: "hitesh"})))


// *Bunch of things into array:
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));