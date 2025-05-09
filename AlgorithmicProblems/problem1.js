/* Given a string, find the length of the longest substring without repeating characters.
 */

function lengthOfLongestSubstring(str) {
  const strArr = str.split("");
  const uniqueStr = [...new Set(strArr)];

  return uniqueStr.join().length;
}

console.log(lengthOfLongestSubstring("abrkaabcdefghijjxxx"));
