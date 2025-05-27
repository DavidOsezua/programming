/* Given a string, find the length of the longest substring without repeating characters.
 */

// function lengthOfLongestSubstring(str) {
//   const strArr = str.split("");
//   const uniqueStr = [...new Set(strArr)];

//   return uniqueStr.join().length;
// }

// console.log(lengthOfLongestSubstring("abrkaabcdefghijjxxx"));

function lengthOfLongestSubstring(s) {
  const map = new Array(128).fill(0); // ASCII char frequency map
  let left = 0,
    right = 0;
  let maxLength = 0;

  while (right < s.length) {
    const rChar = s[right].charCodeAt(0); // get ASCII index
    map[rChar]++;

    while (map[rChar] > 1) {
      const lChar = s[left].charCodeAt(0);
      map[lChar]--;
      left++;
    }

    maxLength = Math.max(maxLength, right - left + 1);
    right++;
  }

  return maxLength;
}

// Example usage
const input = "abrkaabcdefghijjxxx";
console.log(lengthOfLongestSubstring(input));

function lengthOfLongestSubstrings(s) {
  let seen = new Set();
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    while (seen.has(s[right])) {
      seen.delete(s[left]);
      left++;
    }
    seen.add(s[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

console.log(lengthOfLongestSubstrings("abrkaabcdefghijjxxx")); // Output: 10

function lengthOfLongestSubstringss(s) {
  const map = new Map(); // dynamic character frequency map
  let left = 0,
    right = 0;
  let maxLength = 0;

  while (right < s.length) {
    const rChar = s[right];
    map.set(rChar, (map.get(rChar) || 0) + 1);

    while (map.get(rChar) > 1) {
      const lChar = s[left];
      map.set(lChar, map.get(lChar) - 1);
      left++;
    }

    maxLength = Math.max(maxLength, right - left + 1);
    right++;
  }

  return maxLength;
}

console.log(lengthOfLongestSubstringss("abrkaabcdefghijjxxx")); // Output: 10

let i = 0;

while (i < 10) {
  console.log(i);
  i++;
}

console.log("abrkaabcdefghijjxxx".length);
  