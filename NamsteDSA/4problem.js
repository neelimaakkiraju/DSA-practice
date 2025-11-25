// find second largest number in an array

function findSecondLargest(arr){
    let secondLargest = []
    let count = -Infinity
    for(let i =0; i<arr.length;i++){
        if(arr[i]>count){
            count= arr[i]
            
        }
    }
    return count
}

console.log(findSecondLargest([5,6,7,3,9,2]))