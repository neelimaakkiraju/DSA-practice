// find index of two sum , tagrget index
// brute force approach

// function twoSum(arr, target){
//       for(let i = 0; i<= arr.length;i++){
//         for(let j = i+1; j<arr.length;j++){
//              if(arr[i] + arr[j] === target){
//                 return [i, j]
//              }
//         }
//       }
//       return [0,0]
// }

// console.log(twoSum([4,8,2,3,4], 9))


//optimized approach

function twoSum(arr, target){
    let obj1 = {};
    for(let i = 0; i<=arr.length;i++){
        var n = arr[i]
        if(obj1[target-n]>=0){
            return [obj1[target - n],i]
        }else{
            return obj1[n] = i
        }
    }
}

console.log(twoSum([4,4,3,7,4], 9))