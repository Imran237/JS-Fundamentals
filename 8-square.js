const args = process.argv.slice(2);
const input = args[0];

const size = Number(input);
const isValidSize = !isNaN(size) && input !== undefined && size > 0 && Number.isInteger(size);

if (isValidSize) {
  const line = 'X'.repeat(size);
  for (let i = 0; i < size; i++) {
    console.log(line);
  }
} else {
  console.log("Missing size");
}
