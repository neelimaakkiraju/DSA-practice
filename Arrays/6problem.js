// find element using jump search

function jumpElem(arr){
    let result = arr[0]
    let final = arr[result]
    if(arr[0]=== 0){
        return "-1"
    }
    return final
}

console.log(jumpElem([1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9]))

console.log(jumpElem([0, 4, 3, 2, 6, 7]))