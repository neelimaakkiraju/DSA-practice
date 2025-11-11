// First and Last Occurrences

function firstOccurence(arr, target){

    let resultIndex = []
    
    for(let i = 0; i<arr.length;i++){
       
        if(arr[i]===target){
            resultIndex.push(i);
            
           
        }
        
    }
     if (resultIndex.length === 0) return [-1, -1];
    return [resultIndex[0], resultIndex.at(-1)]
}

console.log(firstOccurence([1, 3, 5, 5, 5, 5, 67, 123, 125], 67))