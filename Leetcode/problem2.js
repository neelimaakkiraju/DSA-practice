//Reverse String

function reverseStr(str){
    let result = str.split(" ").reverse().join(" ")
    return result
}

console.log(reverseStr("Hello world new"))


//using for loop
function strReverse(str1){
    let str3 = str1.split(" ")
    let reversed = ""
    for (let i = str3.length-1;i>=0;i--){
        reversed+=str3[i];
        if (i !== 0) reversed += " "; 
    }
    return reversed
}

console.log(strReverse("Neelima new"))