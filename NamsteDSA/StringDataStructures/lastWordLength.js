// find length of last word in the string

//using javascript built in methods

function findLastWordLen(str){
    str = str.trim();
    str = str.split(" ")
    let result = str[str.length-1].length;
    return result
}


console.log(findLastWordLen("Hello world"))


// using double loop

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




// optimized code with double loop
function lengthOfLastWord(str){
    let n = str.length - 1;

    while(n>=0){
        if(str[n] !== " "){
           break;
        }
        --n
    }

    let count = 0;

    while(n>=0){
        if(str[n] === " ") break;
            --n;
            count++
        
    }

    return count;
}

console.log(lengthOfLastWord("Neelima   n"))



// using sinlge loop

function findWordLen(str){
    let n = str.length -1;

    let count = 0;

    while(n >= 0){
        if(str[n] !== " "){
            count++
        }
        else if(count > 0){
            break;
        }
        n--;
    }

    return count
}

console.log(findWordLen("hello world print"))