// find sum of numbers in array


let arr = [2,3,3]
function findSum(n){
   if(n===0) return arr[n];
   return arr[n] + findSum(n-1)

}

console.log(findSum(arr.length-1))


