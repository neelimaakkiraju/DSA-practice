// remove duplicates from sorted array

function removeDuplicates(arr){
    let result = new Set(arr)
    return result
}

console.log(removeDuplicates([2,3,5,6,7,7,5,5,3,8,9,9]))


//using linked list
function removeDuplicates(nums) {
  let i = 0; // pointer for the unique position

  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }

  // Replace remaining elements with '_'
  for (let k = i + 1; k < nums.length; k++) {
    nums[k] = "_";
  }

  return i + 1; // number of unique elements
}

let nums = [1, 1, 2];
let k = removeDuplicates(nums);
console.log(k, nums); 




//example sort
let arr2  = [9,3,5,2,9,,6,7,6]

let result = arr2.sort()

console.log(result[0])