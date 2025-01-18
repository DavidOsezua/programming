// LOOPING A TRIANGLE
/*
Write a loop that makes seven calls to console.log to output the following
triangle:
#
##
###
####
#####
######
#######
It may be useful to know that you can find the length of a string by writing
.length after it.
let abc = "abc";
console.log(abc.length);
// → 3
*/

//create a variable with an empty string
// use a for loop to loop the string based on the variable's length
// based on the condition of the length, console.log the "#"

// Solution
let str = "";
for (let i = 1; i <= 7; i++) {
  str = str + "#";
  console.log(str);
}

//The Book's solution
for (let line = "#"; line.length < 8; line += "#") console.log(line);
