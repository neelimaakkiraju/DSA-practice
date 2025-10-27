// finding string first occurence


// Example 1:

// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.
// Example 2:

// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.


function findIndex(str, str2) {
  for (let i = 0; i <= str.length - str2.length; i++) {
    if (str.substring(i, i + str2.length) === str2) {
      return i; 
    }
  }
  return -1; 
}

console.log(findIndex("sadbutsad", "sad")); // Output: 0
console.log(findIndex("sadbutsad", "but")); // Output: 3
console.log(findIndex("sadbutsad", "xyz")); // Output: -1
