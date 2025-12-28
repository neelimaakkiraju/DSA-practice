// find the word containing the given character

// using built in method

function findWordChar(str, char){
    str = str.split(" ")
    let result = []
   
    for(let i = 0; i<str.length;i++){
       
        if(str[i].includes(char)){
           result.push(i)
        }
    }

    return result;
   
}

console.log(findWordChar("luffy is still joyboy", "z"))


function findWordChar(str, char){
    str = str.split(" ")
    let result = []
   
    for(let i = 0; i<str.length;i++){
       for(let j = 0; j<str[i].length;j++){
        if(str[i][j] === char){
            result.push(i);
            break;
        }
       }
    }

    return result;
   
}

console.log(findWordChar("luffy is still joyboy", "o"))