// Find Pair Given Difference

// Input: arr[] = [5, 20, 3, 2, 5, 80], x = 78
// Output: true

function findPair(arr,num){

       for(let i = 0;i<arr.length;i++){
            for(let j = i+1;j<arr.length;j++){
                let sum = Math.abs(arr[i]-arr[j])
                if(sum===num){
                   return true
                }
            }
       }
       return false
    
}

console.log(findPair([5, 20, 3, 2, 5, 80],78))


//using hash mapping

function findPair(arr, x) {
  let set = new Set();

  for (let num of arr) {
    if (set.has(num + x) || set.has(num - x)) {
      return true;
    }

    set.add(num);
  }


  return false;
}

console.log(findPair([5, 20, 3, 2, 5, 80], 78)); 
