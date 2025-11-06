//find kth smallest element in array

function findElement(arr, elem){
    let arrSort = arr.sort((a,b)=>a-b)
    console.log(arrSort)
    let result = arrSort[elem - 1]

    return result
}


console.log(findElement([10, 5, 4, 3, 48, 6, 2, 33, 53, 10],4))