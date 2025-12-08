// find index of an elemnt in array using loops


//using for loop 

function searchElement(arr,num){

    let result = []
    for(let i = 0; i<arr.length; i++){
        if(arr[i]===num){
            result.push(i)
            return result
        }
    }
    return +"-1"
}

console.log(searchElement([1,3,5,7,9,4,6,9], 7))


// using while loop


function findElement(arr,num){
    let final = [];
    let i = 0
    while(i<arr.length){
        if(arr[i]===num){
           final.push(i)
           return final;
        }
         i++
    }
    return +"-1"
}
console.log(findElement([1,3,5,7,9,4,6,9], 16))