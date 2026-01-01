// count balanced substrings in given string



// approache 1
function balancedString(str){
    let R = 0;
    let L = 0;
     let count = 0;

     for(let i = 0 ; i < str.length; i++){
        if(str[i] === "R"){
            R++
        
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



//Approach 2 -----> Optimized method

function balancedString2(str){
     let temp = 0;
     let count = 0;

     for(let i = 0 ; i < str.length; i++){
        if(str[i] === "R"){
             temp++
        
        }else{
          temp--
        }

        if(temp === 0){
            count++;
        }
     }

     return count;
}


console.log(balancedString2("RLRRLLRLRL"))

console.log(balancedString2("RLRRRLLRLL"))