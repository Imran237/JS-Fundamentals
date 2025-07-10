const args = process.argv.slice(2);

const n = isNaN(Number(args[0])) ? 1 : Number(args[0]);

const factorial = (x) =>
  x <= 1 ? 1 : x * factorial(x - 1);

console.log(factorial(n));
