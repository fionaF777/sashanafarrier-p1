console.log("My first website!");

//Basic math operations
let a = 10;
let b = 5;

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

console.log(add(8, 2));

console.log(subtract(8, 2));

console.log(multiply(8, 2));

console.log(divide(8, 2));


function formatName(name) {
    return name.toUpperCase();
}

function cleanInput(text) {
    return text.trim();
}

// let input = " cherry ";

// if (cleanInput(input).length > 0) {
//     console.log(formatName(input));
// }


let sum = a + b;

console.log(sum);

//String operations
let first = "Hello";
let second = "World";

console.log(first + " " + second);
console.log(a > b);
console.log(a == b);

//Build a simple calculator
let num1 = 8;
let num2 = 2;

function calculate(n1, n2) {
  let add = n1 + n2;
  let subtract = n1 - n2;
  let multiply = n1 * n2;
  let divide = n1 / n2;
  return { add, subtract, multiply, divide };
}

function printResults() {
    let results = calculate(num1, num2);
    console.log("Results:", results);
    console.log("Add:", results.add);
    console.log("Subtract:", results.subtract);
    console.log("Multiply:", results.multiply);
    console.log("Divide:", results.divide);
}

printResults();

//Modify calculator
let price = 20;
let tax = 0.1;
let total = price + price * tax;

console.log(total);

let name = "";

if (name === "") {

console.log("Name required");

}

if (name === "") {

console.log("Name required");

} else {

console.log("Valid name");

}

let email = "";

if (email === "") {

console.log("Email required");

} else {

console.log("Valid email");

}

let password = "123";

if (password.length < 6) {

console.log("Too short");

} else {

console.log("Good password");

}

let input = "";

if (input === "") {

console.log("Required field");

} else {

console.log("Valid input");

}

name = "Cherry";

password = "123456";

if (password.length < 6) {

console.log("Too short");

}

else if (password.length < 10) {

console.log("Medium strength");

}

else {

console.log("Strong password");

}
