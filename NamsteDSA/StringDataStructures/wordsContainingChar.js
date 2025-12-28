// find the word containing the given character


function findWordChar(str, char){
    str = str.split(" ");
    let result = []
   
    for(let i = 0; i<str.length;i++){
       
        if(str[i].includes(char)){
           result.push(i)
        }else{
            return []
        }
    }

    return result;
   
}

console.log(findWordChar("luffy is still joyboy", "x"))