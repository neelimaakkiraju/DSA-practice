// find length of last word in the string

//using javascript built in methods

function findLastWordLen(str){
    str = str.trim();
    str = str.split(" ")
    let result = str[str.length-1].length;
    return result
}


console.log(findLastWordLen("Hello world"))