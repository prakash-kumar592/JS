// const score = 100
// const scoreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id == anotherId)//they gives false

// // non primitive

// const heros = ["shaktiman", "naagraj", "doga"]
// let myobj = {
//     name : "prakash",
//     age : 20,
// }

// const myFunction = function(){
//     console.log("hello world")
// }

// Stack(primitive) , heap(Non primitive)

let namee = "prakash"

let anothername = namee
anothername = "ashish"

console.log(namee)
console.log(anothername)

let userOne = {
    email : "prakash@gmail.com",
    upi : "prakash@bxl"
};

let userTwo = userOne

userTwo.email = "ashish@gmail.com"
console.log(userOne.email)
console.log(userTwo.email)


