// Remove nth node from array

// function removeNode(arr, ind){
//     if(ind >=0 && ind<arr.length){
//         arr.splice(ind+1,1)
//         return arr
//     }else{
//        return "[]"
//     }
// }

// console.log(removeNode([1], 2))



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




// let arr = [10, 20, 30, 40, 50];

// // suppose this index comes as user input
// let index = 2; // remove element at index 2 (i.e., 30)

// // check if index is valid
// if (index >= 0 && index < arr.length) {
//   arr.splice(index, 1);
// } else {
//   console.log("Invalid index");
// }

// console.log(arr); // [10, 20, 40, 50]
