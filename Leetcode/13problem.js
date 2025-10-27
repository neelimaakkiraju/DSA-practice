// //longest substring

// function longestSubStr(str){
//     let result = str.split("")
//     let final = new Set(result)
//     return final
// }


// console.log(longestSubStr("abccddd"))

function longestSubStr(str) {
  let seen = new Set();      // to store unique characters
  let left = 0;
  let maxLen = 0;

  for (let right = 0; right < str.length; right++) {
    // if duplicate, shrink window from left
    while (seen.has(str[right])) {
      seen.delete(str[left]);
      left++;
    }
    seen.add(str[right]);
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}

console.log(longestSubStr("abccddrrwwwwod"));




function longestRepeatingSubStr(str) {
  let maxCount = 1;
  let currentCount = 1;
  let longestChar = str[0];

  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i - 1]) {
      currentCount++;
      if (currentCount > maxCount) {
        maxCount = currentCount;
        longestChar = str[i];
      }
    } else {
      currentCount = 1;
    }
  }

  return `${longestChar.repeat(maxCount)} (length: ${maxCount})`;
}

console.log(longestRepeatingSubStr("abccddrrwwwwod"));
