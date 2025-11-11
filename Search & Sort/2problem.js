// Value equal to index value

function findValueIndex(arr){
    let result = []
    for(let i=0; i<arr.length;i++){
        if(arr[i]=== i+1){
            result.push(arr[i])
        }
    }
    return result
}

console.log(findValueIndex([15, 2, 45, 4 , 7]))

console.log(findValueIndex([15]))