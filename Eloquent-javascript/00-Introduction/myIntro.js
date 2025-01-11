//This code was written from memory after studying the book's code "intro.js"

//The code below is a function that returns an arr of a range of numbers
function range(start, end, step = 1) {
  const arr = [];
  if (start > end) {
    for (let i = start; i >= end; i -= step) {
      arr.push(i); // 10,9,
    }
  } else {
    for (let i = start; i <= end; i += step) {
      arr.push(i);
    }
  }

  return arr;
}

//This function returns the sum of an array of numbers
function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }

  return total;
}

//puting both functions in one. Just experimenting
function sumOfRange(start, end, step = 1) {
  const arr = [];
  let total = 0;
  if (start > end) {
    for (let i = start; i >= end; i -= step) {
      arr.push(i);
    }
  } else {
    for (let i = start; i <= end; i += step) {
      arr.push(i);
    }
  }

  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }

  return total;
}

// const arr = range(10, 1);
// const sumOfNumbers = sum(arr);

// console.log(sum(range(3, 15, 2)));

//A function that gets the factorial of a number
function factorial(number) {
  let factorial = number;
  let arr = [];
  for (let i = number - 1; i >= 1; i--) {
    factorial *= i;
    arr.push(i);
  }

  return { factorial, arr };
}

console.log(factorial(5));
console.log(factorial(8));
console.log(factorial(9));
console.log(factorial(10));
console.log(factorial(-10));

//5factorial === 5*4*3*2*1
//6factorial === 6*5*4*3*2*1
