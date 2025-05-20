/*
Given two binary strings str1 and str2, return their sum as a binary string.

Constraints:

1 ≤ str1.length , str2.length ≤ 500

str1 and str2 consist of 0 or 1 characters only.

Any string must not contain leading zeros except the string representing the binary form of 0. */

// function addBinary(str1, str2) {
//   // Replace this placeholder return statement with your code
//   const binaryNumber = parseInt(str1, 2) + parseInt(str2, 2);
//   return binaryNumber.toString(2);
// }

function addBinary(str1, str2) {
  let results = [];
  let carry = 0;

  let ptr1 = str1.length - 1;
  let ptr2 = str2.length - 1;

  while (ptr1 >= 0 || ptr2 >= 0) {
    let digit1 = ptr1 >= 0 ? parseInt(str1[ptr1]) : 0;
    let digit2 = ptr2 >= 0 ? parseInt(str2[ptr2]) : 0;

    let totalSum = digit1 + digit2 + carry;
    let currentDigit = totalSum % 2;
    carry = Math.floor(totalSum / 2);

    results.push(currentDigit);

    ptr1--;
    ptr2--;
  }

  if (carry) {
    results.push(carry);
  }

  return results.reverse().join("");
}

function main() {
  let str1_list = [
    "1",
    "11",
    "1010",
    "1100",
    "1010100",
    "10101",
    "1111",
    "10010",
    "10101100110010101",
  ];
  let str2_list = [
    "1",
    "11",
    "1110",
    "0011",
    "0100011",
    "01010",
    "11111",
    "110",
    "1011001010110010100",
  ];

  for (let i = 0; i < str1_list.length; i++) {
    console.log(i + 1 + ".\tFirst input string:  " + str1_list[i]);
    console.log("\tSecond input string: " + str2_list[i]);

    console.log(
      "\tBinary Sum:          " + addBinary(str1_list[i], str2_list[i])
    );
    console.log("-".repeat(100));
  }
}

main();
