// remove duplicates in an array

function removeDuplicates(arr){
     let x = 0;
    for(let i=0; i<arr.length;i++){
       
        if(arr[i]> arr[x]){
            x = x+1
            arr[x] = arr[i]
        }
    }
    return x+1
}

console.log(removeDuplicates([1,2,3,3,5,5,7,7,9,9]))


function removeDuplicates(arr) {
  let x = 0;
    for(let i=0; i<arr.length;i++){
       console.log(arr[x],arr[i])
        if(arr[i]> arr[x]){
            x = x+1
            arr[x] = arr[i]
        }
    }
    return x+1
}

console.log(removeDuplicates([1,1,2,2,4,4,5,5,6,6]))