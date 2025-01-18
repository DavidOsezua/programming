/*
FizzBuzz
Write a program that uses console.log to print all the numbers from 1 to 100,
with two exceptions. For numbers divisible by 3, print "Fizz" instead of the
number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
When you have that working, modify your program to print "FizzBuzz" for
numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz"
for numbers divisible by only one of those).
(This is actually an interview question that has been claimed to weed out
a significant percentage of programmer candidates. So if you solved it, your
labor market value just went up.)
*/

//This is a for loop question
//First, I will console .log all numbers from 1 to 100
//secondly, I will modify the code to console.log numbers 1 to 100 but numbers divisible by only 3 will be printed as Fizz instead of the number
//Thirdly, I will modify the code to console.log numbers 1 to 100 but numbers divisible by only 5 will be printed as Buzz instead of the number
//Lastly, I will modify the code to console.log numbers 1 to 100 but numbers divisible by  3 and 5 will be printed as FizzBuzz instead of the number

//An Example is
// if a number is divisible by 3 but not divisible by 5 print Fizz e.g 21 is divisible by 3 but not divisible by 5
// if a number is divisible by 5 but not divisible by 3 print Buzz e.g 25 is divisible by 5 but not divisible by 3
// if a number is divisible by 3 and 5 print FizzBuzz e.g 15 is divisible by 3 and 5

//My Solution => Incorrect
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 !== 0) console.log(i, "Fizz");
  if (i % 3 !== 0 && i % 5 === 0) console.log(i, "Buzz");
  if (i % 3 === 0 && i % 5 === 0) console.log(i, "FizzBuzz");
  //   else console.log(i);
}

// The book's solution
for (let i = 1; i <= 100; i++) {
  let output = "";
  if (i % 3 === 0) output += "Fizz";
  if (i % 5 === 0) output += "Buzz";
  console.log(output || i)
}
