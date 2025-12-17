//if we constructs objects using constructor then sigleton objects will created

//objects literals

const mySym = Symbol("key1")


const jsuser = {
    name: "prakash",
    "full name": "prakash kumar",
    [mySym]: "mykey1",//useds as a symbol
    age: 20,
    location: "patna",
    email: "prakash@gamil.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "saturday"]
}

// console.log(jsuser.name)
// console.log(jsuser["email"])
// console.log(jsuser["full name"])
// console.log(jsuser[mySym])
// console.log(typeof jsuser.mySym)

// jsuser.email = "ashish@gmail.com"//updated
// Object.freeze(jsuser)
// jsuser.email = "kumar@gmail.com"//cant be updated
// console.log(jsuser)

jsuser.greeting = function(){
    console.log("Hello js user")
}
jsuser.greetingTwo = function(){
    console.log(`Hello js user, ${this.name}`)
}
console.log(jsuser.greeting())
console.log(jsuser.greetingTwo())










