const args = process.argv.slice(2);

// Define the add function
const add = (a, b) => a + b;

// Convert arguments to numbers
const num1 = Number(args[0]);
const num2 = Number(args[1]);

// Print the result of add()
console.log(add(num1, num2));
