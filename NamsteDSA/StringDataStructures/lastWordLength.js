// find length of last word in the string

//using javascript built in methods

function findLastWordLen(str){
    str = str.trim();
    str = str.split(" ")
    let result = str[str.length-1].length;
    return result
}


console.log(findLastWordLen("Hello world"))


function lengthOfLastWord(str){
    let n = str.length - 1;

    while(n>=0){
        if(str[n] === " "){
            --n;

        }else{
            break;
        }
    }

    let count = 0;

    while(n>=0){
        if(str[n] !== " "){
            --n;
            count++
        }else{
           break
        }
    }

    return count;
}

console.log(lengthOfLastWord("Neelima   n"))