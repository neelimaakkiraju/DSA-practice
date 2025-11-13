// Search array with adjacent diff at most k

// using linear search
function findNumIndex(arr, k , num){

    
    for(let i = 0; i<arr.length;i++){
        if(arr[i]===num){
           return i;
           
        }
    }
    return -1
}

console.log(findNumIndex([20,40,50],20,60))


//using jump search

// Search in Step Array where adjacent diff ≤ k
function findNumIndex(arr, k, num) {

    let i = 0;

    while (i < arr.length) {
        if (arr[i] === num) {
            return i; // found the number
        }

        // calculate how far we can jump
        let diff = Math.abs(arr[i] - num);
        let jump = Math.max(1, Math.floor(diff / k));

        // move i by the jump distance
        i += jump;
    }

    return -1; // not found
}

console.log(findNumIndex([20, 40, 50, 60, 70], 20, 60)); // Output: 3
