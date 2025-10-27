// Remove nth node from array

function removeNode(arr, ind){
    if(ind >=0 && ind<arr.length){
        arr.splice(ind+1,1)
        return arr
    }else{
       return "[]"
    }
}

console.log(removeNode([1], 2))



var removeNthFromEnd = function(arr, ind) {
    let newArr = []
     if(ind >=0 && ind<arr.length){
        arr.splice(ind+1,1)
        return arr
    }else{
       return newArr
    }
};
console.log(removeNthFromEnd([1,2,3,4,5],2))



