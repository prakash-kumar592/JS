//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
     two()
     console.log("kumar")
}
//one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);//this give error
}

// console.log(username);//this give error


// // ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))//NOT GIVE ERROR

function addone(num){
    return num + 1
}

addTwo(5)//THEY GIVES ERROR

const addTwo = function(num){
    return num + 2
}

addTwo(5)//they cant give error