//  Sum - All Quadruples


function findSum(arr,num){

    let sum = 0
    let final = []
    for(let i = 0; i<arr.length;i++){
         sum += arr[i]
        if(sum === num){
            final.push(arr[i])
        }
    }
    return final
}

console.log(findSum([2,4,6,7,8,9],8))