const args = process.argv.slice(2);

// Define the factorial function using the `function` keyword
function factorial(x) {
  if (x <= 1) {
    return 1;
  }
  return x * factorial(x - 1);
}

// Get and validate input
const input = args[0];
const n = isNaN(input) ? 1 : Math.floor(Number(input));

// Print result
console.log(factorial(n));
