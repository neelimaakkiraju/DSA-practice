// find duplicate characters in string


function findDuplicate(str){
     let count = 0;
     let letter = []
     for(let i= 0;i<str.length;i++){
        for(let j=i+1; j<str.length;j++){
           if(str[i]===str[j]){
            letter.push(str[i])
            count++
            return letter
           }
        }
     }
     
}

console.log(findDuplicate("geeksforgeeks"))


function findDuplicate(str) {
  let freq = {}; 
  let result = [];

  
  for (let ch of str) {
    freq[ch] = (freq[ch] || 0) + 1;
  }

  
  for (let key in freq) {
    if (freq[key] > 1) {
      result.push([key, freq[key]]);
    }
  }

  return result;
}

console.log(findDuplicate("geeksforgeeks"));
