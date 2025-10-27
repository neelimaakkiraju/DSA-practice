//common prefix


//Input: strs = ["flower","flow","flight"]
//Output: "fl"

var isCommonPrefix = function(arr) {
    if (arr.length === 0) return "";

  let prefix = arr[0]; 

  for (let i = 1; i < arr.length; i++) {
    
    while (arr[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, prefix.length - 1);
      if (prefix === "") return "";
    }
  }

  return prefix;
};
console.log(isCommonPrefix(["flower","flow","flight"]))