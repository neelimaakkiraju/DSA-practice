// search element in rotated sorted array

function searchElement(arr,target){
    for(let i = 0;i<arr.length;i++){
        if(arr[i]===target){
            return i
        }
    }
    return +"-1"
}

console.log(searchElement( [4,5,6,7,0,1,2], 8))