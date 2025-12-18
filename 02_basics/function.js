// function myname(){
//     console.log("p")
//     console.log("r")
//     console.log("a")
//     console.log("k")
//     console.log("a")
//     console.log("s")
//     console.log("h")
// }
// myname()

// function addTwoNumbers(num1, num2){
//    console.log(num1 + num2)
// }

function addTwoNumbers(num1, num2){
   let result = num1 + num2
   return result
}

const result = addTwoNumbers(3,4)
//console.log("result:", result)

// function loginUserMessage(username){
//    if(username===undefined){
//       console.log("please enter a username")
//       return 
//    }
//    return `${username} just logged in`
// }
// console.log(loginUserMessage("prakash"))

// function loginUserMessage(username="sam"){
//    return `${username} just logged in`
// }
// console.log(loginUserMessage())//without any passing any argument

// function CalculateCartPrice(...num1){//three dot represents rest operator it converts passing value in to arrays
//    return num1
// }
// console.log(CalculateCartPrice(200, 400, 500))


//passing objects in to functions

// const user = {
//    username: "prakash",
//    price: "200"
// }

// function handleObject(anyobject){
//    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
// }
//handleObject(user)
// handleObject({
//    username: "sam",
//    price: 200
// })

//passing array in to functions

const mynewarray = [200, 400, 100, 600]

function returnsecondvalue(getarray){
   return getarray[2]
}
//console.log(returnsecondvalue(mynewarray))
console.log(returnsecondvalue([200, 300, 400 ,500]))











