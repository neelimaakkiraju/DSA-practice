//move negative elements to end


// brute force 
function moveNegativeToEnd(arr){
    let positive = arr.filter(num=>num>=0);
    let negative = arr.filter(num=>num<=0);

    let result = [...positive,...negative]
    return result
}

console.log(moveNegativeToEnd([-5, 7, -3, -4, 9, 10, -1, 11]))