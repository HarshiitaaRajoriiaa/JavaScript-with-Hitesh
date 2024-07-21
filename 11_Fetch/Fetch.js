const promise = fetch( 'https://api.github.com/users/harshiitaarajoriiaa')
promise.then(
    (data)=>{
        console.log(data.status)
        console.log(data.ok)
        return data.JSON
    }
).then(
    (data)=>{
        console.log(data)
    }
).catch((error)=>{
    console.log(error)
})
// promise.then().catch()