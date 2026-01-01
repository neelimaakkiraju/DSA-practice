// count balanced substrings in given string


function balancedString(str){
    let R = 0;
    let L = 0;
     let count = 0;

     for(let i = 0 ; i < str.length; i++){
        if(str[i] === "R"){
            R = 1;
        
        }else{
            L++
        }

        if(L === R){
            count++;
            L = 0;
            R = 0
        }
     }

     return count;
}


console.log(balancedString("RLRRLLRLRL"))

console.log(balancedString("RLRRRLLRLL"))