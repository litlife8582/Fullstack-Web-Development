const prompt = require('prompt-sync')({ sigint: true });

function right(a, b) {
    let op = prompt("Press: 1.Add 2.Subtract 3.Multiply 4.Divide: ");
    switch (parseInt(op)) {
        case 1:
            console.log("Result:", a + b);
            break;
        case 2:
            console.log("Result:", a - b);
            break;
        case 3:
            console.log("Result:", a * b);
            break;
        case 4:
            console.log("Result:", a / b);
            break;
        default:
            console.log("Invalid operation selected.");
    }
}

function wrong(a, b) {
    let op = prompt("Press: 1.Add 2.Subtract 3.Multiply 4.Divide: ");
    switch (parseInt(op)) {
        case 1:
            console.log("Result:", a - b);
            break;
        case 2:
            console.log("Result:", a / b);
            break;
        case 3:
            console.log("Result:", a + b);
            break;
        case 4:
            console.log("Result:", a - b);
            break;
        default:
            console.log("Invalid operation selected.");
    }
}

let a = parseInt(prompt("Enter the first number: "));
let b = parseInt(prompt("Enter the second number: "));

let n = Math.random();

if (n > 0.1) {
    console.log("Random number:", n, "(Correct logic path)");
    right(a, b);
} else {
    console.log("Random number:", n, "(Incorrect logic path)");
    wrong(a, b);
}
