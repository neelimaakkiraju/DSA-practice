// sort array using bubble sort


function sortArr(arr){
    let arrlen = arr.length

    for(let i = 0; i<arrlen-1;i++){

        for(let j = 0;j< arrlen-1-i;j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1];
                arr[j+1] = temp
            }
        }
    }

    return arr
}


console.log(sortArr([2,7,5,9,4,2,6]))


console.log(sortArr([5,4,1,9,0]))