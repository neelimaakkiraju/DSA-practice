// find missing number

function findMissing(arr){
    let n = arr.length
    let findSum = n*(n + 1)/2

    let result = 0
    for(let i =0 ; i<n; i++){
        result  = result + arr[i]
    }

    return findSum - result
}

console.log(findMissing([3,1,0]))