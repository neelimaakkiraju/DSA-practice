// set mismatch


function findMismatch(arr){
     let count = 0;
     for(let i = 0;i<arr.length;i++){
        if(arr[i] === arr[count]){
            count= arr[i]
        }
     }
     return count

}

console.log(findMismatch([1,2,2,4]))