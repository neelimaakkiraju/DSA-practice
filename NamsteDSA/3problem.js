// find 1st largest number in an array


function findLargest(arr){

    let largest = -Infinity;
    
    for(let i = 0; i<arr.length;i++){

        
        if(arr[i]>largest){
            largest = arr[i]
            
            
        }
    }
    return largest
}


console.log(findLargest([-5,-3,-8]))


// using while loop


function largestElement(arr){
    let i = 0;

    let isLargest = arr[0]

    while(i<arr.length){
        if(arr[i] < isLargest){
            isLargest = arr[i]
        }

        i++
    }
    return isLargest
}

console.log(largestElement([3,2,6,8,9]))