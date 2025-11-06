// sorting 0s , 1s and 2s


//brute force
function letterSort(arr){
    let result = arr.sort()
    return result
}

console.log(letterSort([0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1]))

//result [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2]