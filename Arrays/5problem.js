//find kth smallest element in array

function findElement(arr, elem){
    let arrSort = arr.sort()
    console.log(arrSort)
    let result = arrSort[elem]

    return result
}


console.log(findElement([10, 5, 4, 3, 48, 6, 2, 33, 53, 10],4))