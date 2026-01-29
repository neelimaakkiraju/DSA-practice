// find first and last index of target element in array


var searchRange = function(arr, target) {
    let l = 0;
    let r = arr.length - 1;
    let ans = [-1, -1];
    while (l < r) {
        let m = l + Math.floor((r - l) / 2);
        if (arr[m] < target) l = m + 1;
        else r = m;
    }
    if (arr[l] === target) ans[0] = l;

    l = 0;
    r = arr.length - 1;
    while (l < r) {
        let m = l + Math.ceil((r - l) / 2);
        if (arr[m] > target) r = m - 1;
        else l = m;
    }
    if (arr[l] === target) ans[1] = l;
    return ans;
};



console.log(searchRange([2,6,6,6,7,7,8,9],7))