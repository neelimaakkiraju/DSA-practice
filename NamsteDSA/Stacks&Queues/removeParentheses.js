// Remove outer most parentheses

function removeParentheses(s) {
  let stack = [];
  let ans = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(s[i]);

      
        ans += ((stack.length > 1)? s[i] : "")
      
    } else {
      if (stack.length > 1) {
        ans = ans + s[i];
      }
      stack.pop();
    }
  }

  return ans;
}

console.log(removeParentheses("(()())(())"));

console.log(removeParentheses("(()())(())(()(()))"));

// Remove outer most parentheses without using stack

function removeParentheses2(s) {
  let level = 0;
  let ans = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
        ++level
      
        ans += ((level > 1)? s[i] : "")
      
    } else {
       ans += ((level > 1)? s[i] : "")
     --level
    }
  }

  return ans;
}

console.log(removeParentheses2("(()())(())"));

console.log(removeParentheses2("(()())(())(()(()))"));
