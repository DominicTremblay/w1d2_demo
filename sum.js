// - Write a node program that takes in an unlimited number of command line arguments, goes through each and prints out the sum of them. If any argument is not a whole number, skip it. Do support negative numbers though. If any argument is not a number, output an error message. We need at least 2 arguments.

// declare function
// get the arguments out of the command-line
const args = process.argv.slice(2);

// Edge case: We need at least 2 arguments.
if (args.length < 2) {
  console.log(`Error: please enter at least 2 args`);
  process.exit();
} 

console.log('args:', args);

// declare an accumulator
let total = 0;

// goes through each args
// for loop => for of, forEach, for in, for i=0...
// for of => more readable

for (let nb of args) {
  // Ensure the arguments are all numbers

  // Edge case: If any argument is not a number, output an error message.

  if (isNaN(Number(nb))) {
    console.log(`Error: please input only numbers`);
    process.exit();
  }

  // Edge case: If any argument is not a whole number, skip it.
  if (Number.isInteger(Number(nb))) {
    total += Number(nb);
  }

  console.log('nb:', nb, 'total:', total);
}

// add each arg to the accumulator

// print out the sum

console.log('Total:', total);
