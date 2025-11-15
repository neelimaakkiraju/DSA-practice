// valid parentheses in js


function isValid(s) {
  const map = {
    ')': '(',
    ']': '[',
    '}': '{'
  };

  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];

    // If it's a closing bracket
    if (map[ch]) {
      // Pop and check if top matches expected opening bracket
      const top = stack.length ? stack.pop() : null;
      if (top !== map[ch]) return false;
    } else {
      // It's an opening bracket -> push onto stack
      stack.push(ch);
    }
  }

  // If stack is empty, all opened brackets were closed properly
  return stack.length === 0;
}
