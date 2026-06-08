// 🧠 1️⃣ What is IIFE?

// IIFE = a function that runs immediately after it is created

// 📌 Syntax
(function () {
  // console.log("i run immedialtely");
})();

// 🧠 Why this works?
// () → makes it a function expression
// () → calls it immediately

// 🔥 2️⃣ Normal function vs IIFE
// ❌ Normal function

function test() {
  //   console.log("test normal");
}
test(); //must call manually

// ✅ IIFE
(function () {
  //   console.log("run instanlty");
})();

// 🧠 3️⃣ Types of IIFE
// 1️⃣ Simple IIFE-------------------------------
(function () {
  //   console.log("Simple IIFE");
})();

// 2️⃣ With parameters---------------------------
(function (name) {
  //   console.log("hellow" + name);
})("Sonam");

// 3️⃣ Arrow function IIFE--------------------------
(() => {
  //   console.log("arrow IIFe");
})();

// 🧠 4️⃣ Why use IIFE?--------------------------
// ✅ 1. Avoid global scope pollution

(function () {
  let x = 10;
  // console.log(x);
})();

// console.log(x); // ❌ error  | 👉 x is NOT global

// ✅ 2. Create private variables
const counter = (function () {
  let count = 0;

  return function () {
    count++;

    return count;
  };
})();
// console.log(counter()); //1
// 👉 count is private 🔒

// ✅ 3. Run code only once
(function () {
  //   console.log("App Initialised");
})();

// ✅ 4. Avoid variable conflicts
var name = "global";

(function () {
  var name = "local";
  //   console.log(name);
})();

// console.log(name);

// 🧠 5️⃣ When to use IIFE?
// ✔ When you want:
// Code to run immediately
// Private scope
// No global variables
// Initialization logic

// 🔥 Real-world example
const config = (function () {
  const apiKey = "12AwqBT";

  return {
    getKey: function () {
      return apiKey;
    },
  };
})();

// console.log(config.getKey());
// 👉 apiKey is hidden 🔒

// 🧠 6️⃣ How IIFE uses closures
// IIFE creates private scope
// Returned function that remembers variables → closure

// 🧠 7️⃣ Important Interview Points
// ❓ Why wrap function in ()?
// 👉 To convert:

// function declaration ❌
// → function expression ✅

// ❓ Why second ()?
// 👉 To execute immediately

// 🧠 8️⃣ Common Mistake
// function () {
//   console.log("Error");
// }();

// ❌ This will fail

// 👉 Must wrap:

(function () {
  // console.log("Correct");
})();

// 🧠 9️⃣ Modern JavaScript Note
// 👉 Today we use:
// ES6 modules, block scope (let/const)
// 👉 So IIFE is less used now, but still important for:

// interviews
// understanding closures
// legacy code

// 🎯 🔟 Final Summary
// IIFE = function that runs immediately
// Helps avoid global scope
// Creates private variables
// Useful for one-time execution
// Uses closures internally

// ✅ One-line Answer:

// IIFE (Immediately Invoked Function Expression) is a function that executes immediately after being defined, mainly used to create a private scope and avoid polluting the global namespace.
