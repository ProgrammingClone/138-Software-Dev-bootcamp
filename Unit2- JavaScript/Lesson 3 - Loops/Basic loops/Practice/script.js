// TODO 1: Create an array called 'numbers' with 5 random numbers
const numbers = [3, 2, 1, 7, 9];

// TODO 2: Use a 'for' loop to log each number in the array to the console
for (let i = 0; i < numbers.length; i++) {
  console.log("For loop number:", numbers[i]);
}

// TODO 3: Use a 'while' loop to log numbers less than 5 from the array
let index = 0;

while (index < numbers.length) {
  if (numbers[index] < 5) {
    console.log("Less than 5:", numbers[index]);
  }
  index++;
}

// TODO 4: Use a 'do...while' loop to ask the user for a number between and including 1 and 3
let userNumber;

do {
  userNumber = Number(prompt("Enter a number between 1 and 3:"));
} 
while (userNumber < 1 || userNumber > 3);

console.log("You entered:", userNumber);