// example of object literal
const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user details from database");
        console.log(`Username: ${this.username}`);  //as current context print object.username
        console.log(this); //will access current context and print whole object.
    }

}
// console.log(user)
console.log(user.getUserDetails())
console.log(this); 

//CONSTRUCTOR FUNCTION:
function userData1( username , email_id , phone_number){
    this.username = username;
    this.email_id = email_id;
    this.phone_number = phone_number;
}
const user1 = new userData1("harshita" , 'harshitarajoria02@gmail.com' , 9654424376);
console.log(user1)
const user2 = new userData1("hitesh" , 'hitesh@gmail.com' , 9659000376);
console.log(user2);
console.log(userData1.constructor) //return about itself
//new will make new object and without new keyboard values will be override of the same object
console.log(user1 instanceof userData1)
console.log(user1 instanceof Object)

