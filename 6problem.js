//valid anagram 

// function isAnagram(a, b){
//       let ans1 = a.split("").sort().join()
//       let ans2 = b.split("").sort().join()
//      return ans1 === ans2
   
// }

// console.log(isAnagram("anagram","nagaram"))


//using hash map DSA 
//space complexity O(n)
//time complexityO(n log n)

function checkAnagram(c,d){
      if (c.length!== d.length) return false;
      let obj1= {}
      let obj2 = {}

      for(let i=0; i<c.length;i++){
            obj1[c[i]] = (obj1[c[i]]||0) + 1;
            obj2[c[i]] = (obj2[c[i]]|| 0) + 1;
      }

      for(const key in obj1){
          if(obj1[key] !== obj2[key]) return false
      }
      return true
}

console.log(checkAnagram("anagram","nagarm"))