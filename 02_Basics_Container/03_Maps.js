// *Maps:
//A Map holds key-value pairs where the keys can be any datatype.
//A Map remembers the original insertion order of the keys.
// Create a Map
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);
console.log(fruits) //Map(3) { 'apples' => 500, 'bananas' => 300, 'oranges' => 200 }
const map = new Map()
//.set('key' , 'value') 
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('IN', "India") //override the first value
map.set('Fr', "France")
console.log(map);
fruits.get("USA");

