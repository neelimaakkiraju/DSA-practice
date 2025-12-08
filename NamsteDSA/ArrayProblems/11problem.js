// remove element in an array

function removeElement(arr,target){
    let n = 0;
    for(let i = 0; i< arr.length; i++){
        if(arr[i] !== target){
             arr[n] = arr[i]
             n = n+1
        }
    }
    return n
}

console.log(removeElement([2,3,4,5,8,2,1], 4))