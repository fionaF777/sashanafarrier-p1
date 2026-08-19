// console.log("My first website!");

// //Basic math operations
// let a = 10;
// let b = 5;

// function add(a, b) {
//     return a + b;
// }

// function subtract(a, b) {
//     return a - b;
// }

// function multiply(a, b) {
//     return a * b;
// }

// function divide(a, b) {
//     return a / b;
// }

// console.log(add(8, 2));

// console.log(subtract(8, 2));

// console.log(multiply(8, 2));

// console.log(divide(8, 2));


// function formatName(name) {
//     return name.toUpperCase();
// }

// function cleanInput(text) {
//     return text.trim();
// }

// // let input = " cherry ";

// // if (cleanInput(input).length > 0) {
// //     console.log(formatName(input));
// // }


// let sum = a + b;

// console.log(sum);

// //String operations
// let first = "Hello";
// let second = "World";

// console.log(first + " " + second);
// console.log(a > b);
// console.log(a == b);

// //Build a simple calculator
// let num1 = 8;
// let num2 = 2;

// function calculate(n1, n2) {
//   let add = n1 + n2;
//   let subtract = n1 - n2;
//   let multiply = n1 * n2;
//   let divide = n1 / n2;
//   return { add, subtract, multiply, divide };
// }

// function printResults() {
//     let results = calculate(num1, num2);
//     console.log("Results:", results);
//     console.log("Add:", results.add);
//     console.log("Subtract:", results.subtract);
//     console.log("Multiply:", results.multiply);
//     console.log("Divide:", results.divide);
// }

// printResults();

// //Modify calculator
// let price = 20;
// let tax = 0.1;
// let total = price + price * tax;

// console.log(total);

// let name = "";

// if (name === "") {

// console.log("Name required");

// }

// if (name === "") {

// console.log("Name required");

// } else {

// console.log("Valid name");

// }

// let email = "";

// if (email === "") {

// console.log("Email required");

// } else {

// console.log("Valid email");

// }

// let password = "123";

// if (password.length < 6) {

// console.log("Too short");

// } else {

// console.log("Good password");

// }

// let input = "";

// if (input === "") {

// console.log("Required field");

// } else {

// console.log("Valid input");

// }

// name = "Cherry";

// password = "123456";

// if (password.length < 6) {

// console.log("Too short");

// }

// else if (password.length < 10) {

// console.log("Medium strength");

// }

// else {

// console.log("Strong password");

// }


//Build an Interactive Task List

// let tasks = ["Study", "Workout"];
// let list = document.getElementById("list");

// addTask("Read");

// // Create a copy of the tasks array to use for refreshing
// let tasksCopy = [...tasks];

// displayTasks();
// console.log(tasks);


// function displayTasks() {
//     list.innerHTML = "";

//     for (let i = 0; i < tasks.length; i++) {
//         list.innerHTML += "<li>" + tasks[i] + "</li>";
//     }
// }

// function addTask(task) { tasks.push(task); }

// function removeLast() { return tasks.pop(); }

// document.getElementById("remove-last-item-btn").addEventListener("click", function() {
//     console.log("removed task: " + removeLast());
//     displayTasks();
// });

// function refreshTasks() {
//     tasks = tasksCopy.slice();      
//     displayTasks();
//     console.log("Tasks refreshed: ", tasks);
// }

// document.getElementById("refresh-tasks-btn").addEventListener("click", function() {
//     refreshTasks();
// });

//Add Smooth Scroll + Active Navigation

// let links = document.querySelectorAll("nav a");
// console.log(links);


// links.forEach(link => {
//     link.onclick = function() {
//         let target = document.querySelector(this.getAttribute("href"));
//         target.scrollIntoView({ behavior: "smooth" });
//     };
// });

// links.forEach(link => {
//         link.onclick = function() {
//         this.classList.add("active");
//     };
// });

// links.forEach(link => {
//     link.onclick = function() {
//         links.forEach(l => l.classList.remove("active"));
//         this.classList.add("active");
//     };
// });


let button = document.getElementById("button");
let output = document.getElementById("output");
let keyCount = document.getElementById("key-count");
let sessionDuration = document.getElementById("session-duration");
let startTime = document.getElementById("start-time");

let keysPressed = 0;
let sessionStart = Date.now();

document.onkeydown = function(event) {
    output.textContent += `${event.key} `;
    keysPressed++;
    keyCount.textContent = keysPressed;
    sessionDuration.textContent = Math.floor((Date.now() - sessionStart) / 1000);
    startTime.textContent = new Date(sessionStart).toLocaleTimeString();
};

startTime.textContent = "00:00:00";

button.onclick = function() {
    output.textContent = "";
    keysPressed = 0;
    keyCount.textContent = keysPressed;
    sessionStart = Date.now();
    sessionDuration.textContent = 0;
    startTime.textContent = startTime.textContent = "00:00:00";
}
