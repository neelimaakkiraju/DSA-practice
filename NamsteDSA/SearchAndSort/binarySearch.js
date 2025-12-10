// find target element in sorted array


function findElement(arr, target){
    let left = 0;
    let right = arr.length - 1;

    while(right >= left){
        let middle = Math.floor((left + right)/2)
        if(target === arr[middle]){
            return middle
        }
        else if(target< arr[middle]){
           right = middle - 1;
        }
        else{
           left = middle + 1  
        }

    }

    return -1
}

console.log(findElement([3,5,7,8,9,12,14], 4))