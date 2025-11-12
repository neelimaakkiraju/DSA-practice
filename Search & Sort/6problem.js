// find missing and repeating element

function findMissingNumber(arr){
    let numLength  = arr.length
    let sortArr = arr.sort()
    let duplicate = [];

    for(let i =0; i< arr.length;i++){
        for(let j = i+1;j<arr.length;j++){
            // console.log(arr[i],arr[j])
            if(arr[i]===arr[j]){
                duplicate.push(arr[i])
            }

        }
    }

    for(let i = 1;i<=numLength;i++){
        if(!sortArr.includes(i)){
            duplicate.push(i)
        }
    }
    return duplicate

}

console.log(findMissingNumber([1,3,3]))