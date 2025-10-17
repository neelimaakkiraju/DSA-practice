// find index of two sum , tagrget index
// brute force approach

function twoSum(arr, target){
      for(let i = 0; i<= arr.length;i++){
        for(let j = i+1; j<arr.length;j++){
             if(arr[i] + arr[j] === target){
                return [i, j]
             }
        }
      }
      return [0,0]
}

console.log(twoSum([4,8,2,3,4], 9))