// For Loop Example
function runForLoop() {
    console.log("For Loop Output:");
    for (let i = 0; i < 5; i++) {
        console.log(`Number: ${i}`);
    }

    for (let i = 0; i < 5; ++i) {
        console.log(` Number: ${i}`);
    }

    const fruits = ['apple', 'banana', 'orange'];
    console.log("\nFruits Array:");
    for (let i = 0; i < fruits.length; i++) {
        console.log(`Fruit: ${fruits[i]}`);
    }
}

// While Loop Example
function runWhileLoop() {
    console.log("While Loop Output:");
    let count = 0;
    while (count < 5) {
        console.log(`Number: ${count}`);
        count++;
    }

    const numbers = [1, 3, 7, 4, 9];
    let index = 0;
    while (index < numbers.length) {
        if (numbers[index] % 2 === 0) {
            console.log(`First even number is: ${numbers[index]}`);
            break;
        }
        index++;
    }
}

// Do While Loop Example
function runDoWhileLoop() {
    console.log("Do While Loop Output:");
    let number = 0;
    do {
        console.log(`Number: ${number}`);
        number++;
    } while (number < 5);

    let userInput;
    do {
        // This will prompt the user in the browser
        userInput = prompt("Enter a number greater than 10:");
    } while (userInput <= 10);
    console.log(`Thank you for entering: ${userInput}`);
}

// Run each function to see the outputs
runForLoop();
runWhileLoop();
runDoWhileLoop();
