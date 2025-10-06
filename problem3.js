//checking palindrome

const inputStr = "racecard"

let str2 = inputStr.split("").reverse().join("")

if(str2 === inputStr){
    console.log("true")
}else{
    console.log("false")
}


//using for loop

let str3 = inputStr.split("")
let result = ""

for(let i = str3.length-1;i>=0;i--){
    result+= str3[i];
    
}

if(result === inputStr){
        return console.log("true")
    }else{
        return console.log("false")
    }