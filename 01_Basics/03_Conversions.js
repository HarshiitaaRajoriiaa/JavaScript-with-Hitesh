console.log("hello fromconersion file")
let name = "harshita"
let score = 33
let Sscore = String(33)
let Nname = Number(name)
console.table([name , score ,typeof(Sscore) ,  Sscore , typeof(Nname)  /* Nan */ ,  Nname , String(id)])

//boolean
let win = 1
let win2 = "name"
let win3 = null
let win4;
console.table([Boolean(win), Boolean(win2), Boolean(win3), Boolean(win4)])