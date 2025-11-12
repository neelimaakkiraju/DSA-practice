// Maximum and minimum of an array using minimum number of comparisons

// Input: arr[] = [3, 5, 4, 1, 9]
// Output: [1, 9]



//brute force method
function findNumber(arr){
    let result = arr.sort()
    return [result[0],result.at(-1)]
}

console.log(findNumber([3, 5, 4, 1, 9]))

// ---------->

//comparing elements using bubble sort


function findNum(inputArr){

    for(let i =0; i<inputArr.length-1;i++){
        for(let j = 0;j<inputArr.length-i-1;j++){
            if(inputArr[j]> inputArr[j+1]){
                let final = inputArr[j]
                inputArr[j]=inputArr[j+1]
                inputArr[j+1]= final

            }
        }
    }
    return inputArr
}

console.log(findNum([3, 5, 4, ]))
