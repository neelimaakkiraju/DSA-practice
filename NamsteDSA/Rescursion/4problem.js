
// find sum of odd numbers in array 


let arr2 = [2,3,7]
function findSum(n){
   let isOdd = ((arr2[n]%2)!== 0)
   if(n===0){
    return isOdd? arr2[n] : 0
   }

   return ((isOdd? arr2[n] : 0) + findSum(n-1))

}

console.log(findSum(arr2.length-1))