"use strict";
// //Defining a function
// const square = function (x) {
//   return x * x;
// };

// console.log(square(4));

// const makeNoise = function () {
//   console.log("Keep Quiet");
// };

// // there is a bug in this function. Fix the logic
// const roundTo = function (n, steps) {
//   let remainder = n % steps;
//   return n - remainder + (remainder < steps / 2 ? 0 : steps);
// };

// console.log(roundTo(23, 5));
// console.log(roundTo(29, 5));
// console.log(roundTo(29, 2));
// console.log(roundTo(29, 3));
// console.log(roundTo(29, 10));

// //A function that lists all the ingrident use to make jollof rice(A Nigerian Meal) for a number of people

// function ingridientsForJollofRice(numberOFPeople) {
//   function ingridient(amount, unit, recipie) {
//     const ingridientAmount = amount * numberOFPeople;
//     if (ingridientAmount > 1) {
//       unit += "s";
//     }

//     console.log(`${ingridientAmount}, ${unit}, ${recipie} `);
//   }
//   ingridient(1, "cup", "of rice");
//   ingridient(2, "bulb", "of onions");
//   ingridient(0.5, "sachet", "of Tomatoe Paste");
//   ingridient(2, "cubes", "of seasoning");
//   ingridient(0.5, "Sachet", "of thyme");
//   ingridient(0.5, "sachet", "of curry");
// }

// ingridientsForJollofRice(5);

// console.log(this);

// function calAge(birthYear) {
//   console.log(2025 - birthYear);
//   console.log(this);
// }

// calAge(1999);

// function greet(who) {
//   console.log("Hello " + who);
// }
// greet("Harry");

// function chicken(){
//   return egg()
// }

// function egg(){
//   return chicken()
// }

// console.log(chicken() + "Came first")

//Closure
function wrappedValue(local) {
  return () => local;
}

const wrap1 = wrappedValue(1);
const wrap2 = wrappedValue(10);

console.log(wrap1());
console.log(wrap2());

function multiply(n) {
  return (number) => number * n;
}

const twice = multiply(5);
console.log(twice(10));
