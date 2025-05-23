function myAtoi(s) {
  const noWhiteSpaces = s.replace(/\s+/g, "");

  let result = [];

  let ptr1 = noWhiteSpaces.length - 1;
  let ptr2 = noWhiteSpaces.length;

  while (ptr1 >= 0 || ptr2 >= 1) {
    if (ptr1 === 0 && isNaN(noWhiteSpaces[ptr1])) {
      return 0;
    }

    if (ptr1 === 0 && noWhiteSpaces[ptr1] === "-") {
      result.push("-");
    } else {
      result.push(" ");
    }

    if (isNaN(noWhiteSpaces[ptr2])) {
      break;
    } else {
      result.push(noWhiteSpaces[ptr2]);
    }

    if (ptr1 >= 1 && isNaN(noWhiteSpaces[ptr1])) {
      break;
    } else {
      result.push(noWhiteSpaces[ptr1]);
    }

    ptr1 -= 2;
    ptr2 -= 2;
  }

  return result;
}


// function myAtoi(s) {
//   // To store the final integer result
//   let result = 0;

//   // To store the sign which would determine whether the result should be positive (1) or negative (-1)
//   let sign = 1;

//   // Index for iterating through the string
//   let i = 0;

//   // Ignore any leading whitespaces
//   while (i < s.length && s[i] === " ") {
//     i++;
//   }

//   // Check for sign
//   if (i < s.length && (s[i] === "-" || s[i] === "+")) {
//     // Set sign to negative if a minus sign is found
//     if (s[i] === "-") {
//       sign = -1;
//     }

//     // Then, move to the next character
//     i++;
//   }

//   // Read the digits
//   while (i < s.length && "0" <= s[i] && s[i] <= "9") {
//     // Convert the current character to an integer
//     const digit = s[i].charCodeAt(0) - "0".charCodeAt(0);

//     // Check for overflow
//     if (result > (2 ** 31 - 1 - digit) / 10) {
//       // If there's an overflow, return the maximum or minimum 32-bit integer value
//       return sign === 1 ? 2 ** 31 - 1 : -(2 ** 31);
//     }

//     // Update the result by multiplying it by 10 and adding the current digit
//     result = result * 10 + digit;

//     // Move to the next character
//     i++;
//   }

//   // Return the final result, adjusted for the sign
//   return sign * result;
// }

// Driver code
function main() {
  const inputStrings = [
    "25",
    "   -25",
    "999 with words",
    "words and 567",
    "-91283472332",
    "91283472332",
  ];

  for (let i = 0; i < inputStrings.length; i++) {
    console.log(i + 1 + '.\tInput string     : "' + inputStrings[i] + '"');

    const stoi = myAtoi(inputStrings[i]);

    console.log("\tConverted integer: " + stoi);
    console.log("-".repeat(100));
  }
}

main();

// function main() {
//   let tests = [
//     "2147  483648",
//     "1.8",
//     "  -000453   ",
//     "33 is best",
//     "97 and 79",
//   ];

//   for (let i = 0; i < tests.length; i++) {
//     console.log(` Input : ${tests[i]}  \n Output: ${myAtoi(tests[i])}`);
//     console.log("-".repeat(100));
//   }
// }

// main();
