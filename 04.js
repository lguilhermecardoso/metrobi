function isValidBrackets(str) {
  let stack = [];
  let map = {
    '(': ')',
    '{': '}',
    '[': ']'
  };

  for (let char of str) {
    if (map[char]) {
      stack.push(char);
    } else if (Object.values(map).includes(char)) {
      if (char !== map[stack.pop()]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

console.log(isValidBrackets('{[]}')); // true
console.log(isValidBrackets('()[]{}')); // true
console.log(isValidBrackets('{(])}')); // false