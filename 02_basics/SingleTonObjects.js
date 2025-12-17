//const tinderuser = new Object()//this is singleton object

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "prakash"
tinderUser.isLoggedIn = false

//console.log(tinderUser)

//nested Object
const regularuser = {
    email: "prakash@gmail.com",
    fullname: {
        userfullname: {
            firstname: "ashish",
            lastname: "kumar"
        }
    }
}

//console.log(regularuser.fullname.userfullname.firstname)

//combination of objects
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//const obj3 = {obj1, obj2}
//console.log(obj3)

//const obj4 = Object.assign(obj1, obj2)
//OR
// const obj4 = Object.assign({}, obj1, obj2)
//console.log(obj4)

//OR
const obj5 = {...obj1,...obj2}
// console.log(obj5)

// const users = [//Objects in array
//     {
//         id: 1,
//         email: "prakash@gmail.com"
//     }
// ,
//     {
//         id: 2,
//         email: "ashish@gmail.com"
//     }
// ,
//     {
//         id: 3,
//         email: "kumar@gmail.com"
//     }
// ]
// console.log(users[1].id)

// console.log(Object.keys(tinderUser))//collections of key in the form of arrays
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('name'))


const course = {
    cousename: "js",
    price: "999",
    courseteacher: "hitesh"
}

// console.log(course.price)

// const {courseteacher} = course//without using dot operator we will print
// console.log(courseteacher)
//OR
const {courseteacher: instructor} = course//without using dot operator we will print
console.log(instructor)



