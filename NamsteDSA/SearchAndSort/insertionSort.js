// sort array using insertion sort


function insertionSort(arr){
    for(let i = 0; i<arr.length;i++){
        let curr = arr[i];
        let prev = i - 1;

        while(arr[prev]> curr && prev>= 0){
            arr[prev + 1] = arr[prev];
            prev--
        }

        arr[prev + 1] = curr
    }

    return arr
}

console.log(insertionSort([4,6,2,9,1,2,8,10,-2,-8,-5]))