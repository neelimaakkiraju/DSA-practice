// find target element in an array


function findElement(arr , target){
    for(let i =0 ; i<arr.length; i++){
         if(arr[i] === target){
            return i
         }
    }return -1
}

console.log(findElement([2,4,6,7,2], 2))