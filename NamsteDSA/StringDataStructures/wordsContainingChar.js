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