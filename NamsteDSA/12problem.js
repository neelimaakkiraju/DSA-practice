// reverse a string


// swaping letters in an array
function reverseString(str){
    let strLen = str.length;
    let halfLen = Math.floor(strLen/2)

    for(let i =0 ; i<halfLen;i++){
        let temp = str[i]
        str[i] = str[strLen-1-i]
        str[strLen-1-i] = temp
       
     }
    return str
}

console.log(reverseString(["h","e","l","l","o"]))

console.log(reverseString(["N","e","e","l","i","m","a"]))