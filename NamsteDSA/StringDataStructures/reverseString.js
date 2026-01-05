

//Reverse string 2

var reverseStr = function(s, k) {
    const arr = s.split('');
    for (let i = 0; i < arr.length; i += 2 * k) {
        let left = i;
        let right = Math.min(i + k - 1, arr.length - 1);
        while (left < right) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    }
    return arr.join('');
};



// approach 2


  var reverseStr = function (s, k) {
      s = s.split("")
  
      for (let x = 0; x < s.length; x = x + (2 * k)) {
          let n = Math.min(k, s.length - x)
          let mid = Math.floor(n / 2)
          for (let i = 0; i < mid; i++) {
              let temp = s[x + i]
              s[x + i] = s[x + n - 1 - i]
              s[x + n - 1 - i] = temp
          }
      }
      return s.join("")
  };    
     