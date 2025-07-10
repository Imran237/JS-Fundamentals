const args = process.argv.slice(2);
const input = args[0];

const num = Number(input);
const isValidNumber = !isNaN(num) && input !== undefined && num > 0;

if (isValidNumber) {
  for (let i = 0; i < num; i++) {
    console.log("C is fun");
  }
} else {
  console.log("Missing number of occurrences");
}
