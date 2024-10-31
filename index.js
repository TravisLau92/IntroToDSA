// run `node index.js` in the terminal

// don't remove this line if are using prompt
const prompt = require('prompt-sync')();

function findLargestNumber(num1, num2, num3) {
  let max = num1;

  if (num2 > max) {
    max = num2;
  }
  
  if (num3 > max) {
    max = num3;
  }

  return max;
}
