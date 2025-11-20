// count negative numbers in an array


function countNumbers(arr){
      let count = 0;
      for(let i = 0; i<arr.length;i++){
        if(arr[i]<0){
            count++
           
        }
      }
       return count
}

console.log(countNumbers([-3,5,-6,-7,-3,9,6]))


//using while loop

function countNagatives(arr){
    let count = 0;
    let i= 0;
    while(i<arr.length){

        if(arr[i]<0){
            count++
        }
        i++
    }
    return count
}

console.log(countNagatives([-3,5,-7,-3,9,6]))