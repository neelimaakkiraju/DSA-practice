// move zero's to end of the array

// optimized method
function moveZerosToEnd(arr){
       let x = 0
      for(let i = 0; i<arr.length;i++){
        if(arr[i] !== 0){
            arr[x]= arr[i]
            x++
           
        }
      }

      while (x < arr.length) {
    arr[x] = 0;
    x++;
  }

      return arr
}

console.log(moveZerosToEnd([0,1,0,3,12]))

console.log(moveZerosToEnd([0]))


// Two pointer swap appraoch
function moveZerosToEnd2(arr){
       let x = 0
      for(let i = 0; i<arr.length;i++){
        if(arr[i] !== 0){
           [ arr[x],arr[i]]= [arr[i],arr[x]]
            x++
           
        }
      }

      return arr
}

console.log(moveZerosToEnd2([0,1,0,3,12]))

console.log(moveZerosToEnd2([0,0,0,0,0]))












