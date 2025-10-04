// ==========================
// Part 1: Variables & Conditionals
// ==========================
let name = "Alice";         // String
let age = 20;               // Number
let isStudent = true;       // Boolean
let grades = [85, 92, 78];  // Array
let height = 1.65;          // Double

// Conditional Example
if (age >= 18) {
  document.getElementById("ageResult").innerText = `${name} is eligible to vote.`;
} else {
  document.getElementById("ageResult").innerText = `${name} is not eligible to vote.`;
}

// ==========================
// Part 2: Functions
// ==========================

// Function to add two numbers
function addNumbers(a, b) {
  return a + b;
}

// Function to greet user
function greetUser(userName) {
  return `Hello, ${userName}!`;
}

let sum = addNumbers(5, 10);
document.getElementById("sumResult").innerText = `Sum of 5 and 10 is ${sum}`;

// ==========================
// Part 3: Loops
// ==========================
let listEl = document.getElementById("loopList");

// For loop example
for (let i = 1; i <= 5; i++) {
  let li = document.createElement("li");
  li.innerText = `For loop item ${i}`;
  listEl.appendChild(li);
}

// While loop example
let j = 1;
while (j <= 3) {
  let li = document.createElement("li");
  li.innerText = `While loop item ${j}`;
  listEl.appendChild(li);
  j++;
}

// ==========================
// Part 4: DOM Manipulation
// ==========================

// Change header text
document.getElementById("changeTextBtn").addEventListener("click", function() {
  document.querySelector("header h1").innerText = "Header Changed!";
});

// Toggle background color
document.getElementById("toggleColorBtn").addEventListener("click", function() {
  document.body.style.backgroundColor = document.body.style.backgroundColor === "lightblue" ? "white" : "lightblue";
});

// Display input as user types
document.getElementById("userInput").addEventListener("input", function() {
  document.getElementById("displayInput").innerText = `You typed: ${this.value}`;
});
