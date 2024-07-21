/**
 * The Promise object represents the eventual completion or failure of an asynchronous operation and its resulting value.
 * A Promise is in one of these states:
    pending: initial state, neither fulfilled nor rejected.
    fulfilled: meaning that the operation was completed successfully.
    rejected: meaning that the operation failed.
    * application : cryptography , networking , data request , data calculation.
    
 */

//creating promises 
const promisee  = new Promise(  (resolve , reject)=>{
    //data base call 
    //cryptography 
    // networking
    //and data calculation etc etc....
    resolve()
    reject()

}) .then().catch().finally()

resolve()
const promise1 = new Promise((resolve , reject)=>{

    //thing i need to be execute:
     const add = setTimeout((a ,b) => {
        console.log("function called")
        return a+b;
        resolve();
    }, 1000);
});
promise1.then(()=>{
    console.log("promised consumed and resolve called")
})

new Promise( ( resolve , reject )=>{
    setTimeout( ()=>{
        console.log("new Promised produced")
        resolve();
    } , 1000)
}).then(()=>{
    console.log("Promise resolved")
})


// .then() returning value from: as resolve();
new Promise((resolve , reject)=>{
    setTimeout(() => {
        console.log("promise produced")
        resolve("harshita") //whatever thing we passed here will be print in then

    }, 1000);
}).then((name)=>{
    console.log(name)
    console.log("promise consumed")
})

new Promise((resolve , reject)=>{
    setTimeout(() => {
        console.log("promise produced")
        resolve({ //if we know what we asked {it can be [api request , networking , cryptography , data calculation.]} we can access it in then as per need 
            name : "harshita rajoria",
            username : " theycallme_harshita",
            password : "harshitaarajoriaa"
        }) //whatever thing we passed here will be print in then

    }, 1000);
}).then((user)=>{
    console.log(user.name)
    console.log("promise consumed")
})

// can be done by chaining also:
new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "hitesh", password: "123"})
    }, 1000)
}).then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
})
// .then chaining......


// reject().
new Promise((resolve , reject)=>{
    setTimeout(() => {
        console.log("promise produced")
        let error1;
        // error1 = false;
        error1 = true;
        if( !error1){
            resolve()
        }
        else{
            reject()
         }

    }, 1000);
}).then(()=>{
    console.log("no error got it ")
}).catch(()=>{
    console.log("error found")
})


// finally()
new Promise((resolve , reject)=>{
    setTimeout(() => {
        console.log("promise produced")
        let error1;
        // error1 = false;
        error1 = true;
        if( !error1){
            resolve()
        }
        else{
            reject()
         }

    }, 1000);
}).then(()=>{
    console.log("no error got it ")
}).catch(()=>{
    console.log("error found")
}).finally(()=>{
    console.log("promised produced , consumed and very much understood ");
    })



// promised with async await.
  const promise2 = new Promise((resolve , reject)=>{
    setTimeout(() => {
        console.log("promise produced")
        let error1;
        // error1 = false;
        error1 = true;
        if( !error1){
            resolve()
        }
        else{
            reject("error")
         }

    }, 1000);
})
async function asyncAwait (){
    try {
        console.log(await  promise2)
    } catch (error) {
        console.log(error)
    }
}
asyncAwait ()

