// find jewels and stones in given string


function findJewels(str,stones){
    
    let count = 0

    for(let i = 0; i< stones.length;i++){
      for(let j= 0; j< str.length;j++){
         if(stones[i].includes(str[j])){
            
             count++
       }
      }
    }

    return count;
}

console.log(findJewels("aA","aAAbbbb"))

console.log(findJewels("z",  "ZZ"))


console.log(findJewels("badc",  "ccc"))