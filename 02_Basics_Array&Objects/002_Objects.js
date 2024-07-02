// * 2 ways:
const TinderUser = new Object();
let InstagramUser = { }
// * addition of objects parameters:
TinderUser.id = 123456
TinderUser.Followers = 50000
TinderUser.UserName = "HarshitaRajoria022"
TinderUser.Activity = [ "Monday" , "Thursday" , "Sunday"]
console.log(TinderUser)


console.log(Object.keys(TinderUser));
console.log(Object.values(TinderUser));
console.log(Object.entries(TinderUser));
console.log(TinderUser.hasOwnProperty('isLoggedIn'));


// * Nested Objects:
InstagramUser = ({ 
    id:1234567,
    Name: { 
        FirstName: "Harshita",
        LastName: "Rajoria",
        id:{
        idName: "theycallmeharshita",
        userName: " Harshii"
        }
    },
    Password: "***********"
})
console.log(InstagramUser)
console.log(InstagramUser.Password)
console.log(InstagramUser.Name)
console.log(InstagramUser.Name.id)
console.log(InstagramUser.Name.id.userName)

// * Concatenating 2 objects:
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}
const obj3 = { obj1, obj2 }
console.log(obj3)
const obj6 = Object.assign( obj1 , obj2 , obj4)
console.log(obj6 == obj1)
console.log(obj6)
const obj5 = Object.assign( { } , obj1 , obj2 , obj4)
console.log(obj5)
console.log(obj5 == obj1)
const obj7 = {...obj1, ...obj2 , ...obj4}
console.log(obj7);


// * Access with the help of index: Start from 0 to n-1
const users = [
   {
        id: 1,
        email: "h1@gmail.com"
    },
    {
        id: 2,
        email: "h2@gmail.com"
    },
    {
        id: 3,
        email: "h3@gmail.com"
    },
]
console.log(users[1].email)
console.log(users[2].email)

const Course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

console.log(Course.courseInstructor)

// * Destructuring of Objects:

const {price} = Course
console.log(price)
const {courseInstructor:inst} = Course
console.log(inst)


// * API:
// {
//     "Name":"Harshita",
//     "Class":"UKG",

// }
// * API as an array:
[
    {},
    {},
    {}
]



