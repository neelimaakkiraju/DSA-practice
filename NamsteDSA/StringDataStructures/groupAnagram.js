// group the anagram word in given array

function groupAnagram(str){
    let map = {}
    
    for(let i = 0; i<str.length;i++){
      
        let sortedArr = str[i].split("").sort().join("")
          console.log(sortedArr)
        if(!map[sortedArr]){
            map[sortedArr] = [str[i]]
        }
        else{
            map[sortedArr].push(str[i])
        }
    }
    return [...Object.values(map)]
}

console.log(groupAnagram(["eat","tea","tan","ate","nat","bat"]))


// using hash key


  var groupAnagrams = function(strs) {
      let map = {};
  
      for (let i = 0; i < strs.length; i++) {
          let freqArr = Array(26).fill(0);
          let s = strs[i];
  
          for (let j = 0; j < s.length; j++) {
              let index = s[j].charCodeAt(0) - 'a'.charCodeAt(0);
              freqArr[index]++;
          }
  
          let key = "";
          for (let k = 0; k < 26; k++) {
              key += "#" + freqArr[k];
          }
  
          if (!map[key]) {
              map[key] = [s];
          } else {
              map[key].push(s);
          }
      }
  
      return Object.values(map);
  };

  console.log(groupAnagram(["eat","tea","tan","ate","nat","bat"]))