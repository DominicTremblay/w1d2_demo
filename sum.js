// - Write a node program that takes in an unlimited number of command line arguments, goes through each and prints out the sum of them. If any argument is not a whole number, skip it. Do support negative numbers though. If any argument is not a number, output an error message. We need at least 2 arguments.


// create a function that goes through the steps.

// grab the numbers from the command-line (command-line arguments)
// process.argv
const args = process.argv.slice(2);

console.log("args:", args);

//  goes through each

// c-style
// for of
// for in
// for each

// accumulator
let total = 0;

for (let nb of args) {
  // sum them up
  total += Number(nb);
  console.log("nb:", nb, "total:", total);
}




//  edge case: If any argument is not a whole number, skip it
//  edge case: If any argument is not a number, output an error message.



// print the sum
console.log("Total:", total)