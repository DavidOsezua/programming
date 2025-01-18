/*

Write a program that creates a string that represents an 8×8 grid, using newline
characters to separate lines. At each position of the grid there is either a space
or a "#" character. The characters should form a chessboard.
Passing this string to console.log should show something like this:
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
When you have a program that generates this pattern, define a binding size
= 8 and change the program so that it works for any size, outputting a grid
of the given width and height.
 */

//How will I go about this?
// Looking at the pattern, odd rows have even column as spaces while even rows have odd columns as spaces

//My step
//create a for loop runs from 1 to 8
// create a nested for loop that runs from 1 to 8
// inside the nested for loop create a variable that tracks the string and console.log it

let output = "";

for (let i = 0; i <= 7; i++) {
  for (let x = 0; x <= 7; x++) {
    if ((i + x) % 2) {
      output += " ";
    } else {
      output += "#";
    }
  }
  output += "\n";
}
console.log(output);
