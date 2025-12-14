// merge and sort 2 arrays using merge sort

function mergeSort(arr){

    let mid = arr.length/2;

    let left  = mergeSort(arr.slice(0,mid))

    let right = mergeSort(arr.slice(mid))

    let result = mergeSort(...right, ...left)

    return result;
}

console.log(mergeSort([3,6,8,9,3,4,2,1]))