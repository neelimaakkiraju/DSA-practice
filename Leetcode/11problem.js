let arr1 = [2,4,6,7]
let arr2 = [4,6]
arr1.push(...arr2)


console.log(arr1)

function median(num1, num2){
    num1.push(...num2)
    let result = num1.length
    if(result %2 === 0){
        return num1[1]
    }else{
        return false
    }
}

console.log(median([1,3],[2]))