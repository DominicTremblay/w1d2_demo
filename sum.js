// - Write a node program that takes in an unlimited number of command line arguments, goes through each and prints out the sum of them. If any argument is not a whole number, skip it. Do support negative numbers though. If any argument is not a number, output an error message. We need at least 2 arguments.

// create a function that goes through the steps.

// grab the numbers from the command-line (command-line arguments)
// process.argv
const args = process.argv.slice(2);
// We need at least 2 arguments

if (args.length < 2) {
  console.log(`Error: please enter at least 2 arguments`);
  process.exit();
}

console.log('args:', args);

const allNums = function(numbers) {

  for (let num of numbers) {
    if (isNaN(Number(num))) {
      console.log(`Error: please enter only numbers`);
      // break or return
      // return => returning a value from a function => exit the function
      process.exit();
    }

  }

  return numbers;

}




//  goes through each

// c-style
// for of
// for in
// for each

// single reponsibility principle
// a function should do a single thing

const sum = function (numbers) {
  // accumulator
  let total = 0;

  for (let nb of numbers) {
    // sum them up
    //  edge case: If any argument is not a whole number, skip it
    //  edge case: If any argument is not a number, output an error message.

    if (Number.isInteger(Number(nb))) {
      total += Number(nb);
    }

    console.log('nb:', nb, 'total:', total);
  }
  return total;
};

// print the sum
const result = sum(allNums(args));
console.log('Total:', result);
