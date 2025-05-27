// function isPalindrome(s) {
//   let forwardResult = [];
//   let backwardResult = [];

//   let ptr1 = 0;
//   let ptr2 = s.length - 1;

//   for (ptr1, ptr2; ptr1 <= s.length - 1 || ptr2 >= 0; ptr1++, ptr2--) {
//     forwardResult.push(s[ptr1]);
//     backwardResult.push(s[ptr2]);
//   }

//   if (forwardResult.join("") === backwardResult.join("")) {
//     return true;
//   } else {
//     return false;
//   }
// }

//My algorithm is bad even though it uses a time complexity of O(n), it uses a Space Complexity of  O(n)



// CORRECT
function isPalindrome(s) {
  let left = 0,
    right = s.length - 1;

  while (left < right) {
    if (s[left] != s[right]) {
      return false;
    }

    right--;
    left++;
  }

  return true;
}
function main() {
  const tests = ["kayak", "hello", "RACEACAR", "A", " ABCDABCD"];

  for (let i = 0; i <= tests.length - 1; i++) {
    console.log(`Input: ${tests[i]}`);
    console.log(`Output: ${isPalindrome(tests[i])}`);
    console.log("-".repeat(100));
    console.log(i);
  }
}

main();
