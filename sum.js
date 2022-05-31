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

// Single Responsibility principle
// => each function should do a single thing
//['1','2','3'] => [1, 2, 3]
//['1','2','hello'] => [1,2,NaN]

const convertToNums = function (numbers) {
  const outputArr = [];

  for (let num of numbers) {
    outputArr.push(Number(num));
  }

  return outputArr;
};

// [1, 2, 3] => [1, 2, 3]
// [1,2,NaN] => process.exit()
const allNums = function (numbers) {
  for (let num of numbers) {
    // Edge case: If any argument is not a number, output an error message.

    if (isNaN(num)) {
      console.log(`Error: please input only numbers`);
      process.exit();
    }
  }

  return numbers;
};

const sum = function (numbers) {
  // declare an accumulator
  let total = 0;

  // goes through each args
  // for loop => for of, forEach, for in, for i=0...
  // for of => more readable

  for (let nb of numbers) {
    // Ensure the arguments are all numbers

    // Edge case:If any argument is not a whole number, skip it.
    if (Number.isInteger(nb)) {
      total += nb;
    }

    console.log('nb:', nb, 'total:', total);
  }

  // print out the sum

  return total;
};

// const conversion = convertToNums(args)
// const checkNumbers = allNums(conversion)
// const result = sum(checkNumbers)

const result = sum(allNums(convertToNums(args)));
console.log("Total:", result);

// O(N) => linear complexity

