//valid anagram 

function isAnagram(a, b){
      let ans1 = a.split("").sort().join()
      let ans2 = b.split("").sort().join()
     return ans1 === ans2
   
}

console.log(isAnagram("anagram","nagaram"))


