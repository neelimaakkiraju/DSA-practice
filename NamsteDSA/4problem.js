// find second largest number in an array

function findSecondLargest(arr){

    if(arr.length<2) return null

    let secondLargest = -Infinity
    let firstLargest = -Infinity
    for(let i =0; i<arr.length;i++){
        if(arr[i]>firstLargest){
            secondLargest = firstLargest;
            firstLargest = arr[i]
            
        } else if(arr[i]>secondLargest && arr[i] !== firstLargest){
            secondLargest = arr[i]
        }
    }
    return secondLargest
}

console.log(findSecondLargest([5,6,7,3,9,2,9]))
console.log(findSecondLargest([2]))