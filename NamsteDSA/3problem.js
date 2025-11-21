// find 1st largest number in an array


function findLargest(arr){

    let largest = 0
    
    for(let i = 0; i<arr.length;i++){

        
        if(arr[i]>largest){
            largest = arr[i]
            
            
        }
    }
    return largest
}


console.log(findLargest([4,8,3,9,2,1,6]))


// using while loop


function largestElement(arr){
    let i = 0;

    let isLargest = 0

    while(i<arr.length){
        if(arr[i]> isLargest){
            isLargest = arr[i]
        }

        i++
    }
    return isLargest
}

console.log(largestElement([4,6,8,2]))