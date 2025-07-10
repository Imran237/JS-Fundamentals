// Use const instead of var
const args = process.argv.slice(2);
const input = args[0];

// Check if input exists and is a valid number without try/catch
const num = Number(input);
const isNumber = !isNaN(num) && input !== undefined && input.trim() !== '';

if (isNumber) {
  const integer = Math.floor(num); // Convert to integer
  console.log(`My number: ${integer}`);
} else {
  console.log("Not a number");
}
