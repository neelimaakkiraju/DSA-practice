// search target element in rotated sorted array

// using binary search
var search = function(arr, target) {
    let l = 0;
    let r = arr.length - 1;
    while (l <= r) {
        let m = l + Math.floor((r - l) / 2);
        if (target === arr[m]) {
            return m;
        }
        
        if (arr[l] <= arr[m]) {
            if (target >= arr[l] && target < arr[m]) {
                r = m - 1;
            } else {
                l = m + 1;
            }
        } else {
            if (target > arr[m] && target <= arr[r]) {
                l = m + 1;
            } else {
                r = m - 1;
            }
        }
    }
    return -1;
};

console.log(search([1,5,8,9,4,3], 8))


// brute force approach

function searchNum(nums, target) {
    for(let i = 0;i<nums.length;i++){
        if(nums[i]===target){
            return i
        }
    }
    return +"-1"
};

console.log(searchNum([2,6,5,9,4,5],9))