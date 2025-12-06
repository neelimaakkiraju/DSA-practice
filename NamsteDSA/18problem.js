// find single number

function findSingle(arr){
    let hashMap = {}

    for(let i = 0; i<arr.length;i++){
        if(!hashMap[arr[i]]){
            hashMap[arr[i]] = 1;

        }else{
            hashMap[arr[i]]++
        }
    }

    for(let i = 0; i<arr.length;i++){
        if(hashMap[arr[i]] === 1){
            return arr[i]
        }
    }
}

console.log(findSingle([4,1,2,1,2,4,1,3]))



// using bitwise XOR


function findSingleOne(arr){
    let xor = 0;
    for(let i = 0 ; i< arr.length;i++){
        xor = xor ^ arr[i]
    }
    return xor
}

console.log(findSingleOne([4,1,2,1,2]))