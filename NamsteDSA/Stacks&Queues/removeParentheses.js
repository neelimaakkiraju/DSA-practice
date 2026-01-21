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
