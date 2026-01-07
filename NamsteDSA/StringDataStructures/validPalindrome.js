// check given string palindrome or not

// approach1 Using built in methods

function checkStr(str){
    str = str.toLowerCase();

    let filteredStr = "";
    for(let i =0; i< str.length; i++){
        if(str[i].match(/[a-z0-9]/i)){
            filteredStr += str[i];

        }
    }

    let result = filteredStr.split("").reverse().join("")

    return result === filteredStr 
}

console.log(checkStr("A man, a plan, a canal: Panama"))

console.log(checkStr("race a car"))