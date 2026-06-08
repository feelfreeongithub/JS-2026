// 🔥 1️⃣ What is Execution Context?

// Execution Context is the environment where JavaScript code runs

// 🔥 1️⃣ What is Execution Context?
// Execution Context is the environment where JavaScript code runs

// 🧠 2️⃣ Types of Execution Context

// 🔹 1. Global Execution Context (GEC)
// console.log("Hello");
// 👉 Runs in global context

// 🔹 2. Function Execution Context (FEC)
function test() {
  //   console.log("Hi");
}

test();
// 👉 When function is called → new execution context is created

// 🧠 3️⃣ What happens inside Execution Context?
// Every execution context has 2 phases:
// 🔥 Phase 1: Creation Phase
// 1. Memory allocation happens
// 2. Variables & functions are stored

// 🔥 Phase 2: Execution Phase
// 1. Code runs line by line
// 2. Values are assigned

// 🧠 4️⃣ This leads to HOISTING 🔥
// 🔥 What is Hoisting? Hoisting means variables and functions are moved to the top of their scope during creation phase

// 🧪 5️⃣ Example 1 (variable)
// console.log(x); //undefined
var x = 10;

// 🧪 6️⃣ Example 2 (function)
greet();

function greet() {
  //   console.log("Hello");
}
//output Hello
// 🧠 Why? Functions are fully hoisted (with body)

// 🧪 7️⃣ Example 3 (let / const)
// console.log(a); // refrence error Cannot access 'a' before initialization
// let a = 5;

// 🧠 Why?
// let/const are hoisted BUT not initialized
// They stay in "Temporal Dead Zone"

// 🧠 8️⃣ Temporal Dead Zone (TDZ)
// Time between variable hoisting and initialization

// {
//   console.log(a); // ❌ error
//   let a = 10;
// }

// 🧠 9️⃣ var vs let vs const (Hoisting view)
// Type	Hoisted	 Initial value
// var	✅  yes	    undefined
// let	✅  yes	    not initialized (TDZ)
// const	yes	     not initialized (TDZ)

// 🧠 🔟 Function vs Function Expression

// Function Declaration
greet(); // ✅ works

function greet() {}

// 🔹 Function Expression
greet(); // ❌ error

var greet = function () {};

// 🎯 Final Understanding
// Execution Context → runs code
// Hoisting → prepares variables/functions before execution

console.log(a);

var a = 10;

function test() {
  console.log(a);
  var a = 20;
}

test();
