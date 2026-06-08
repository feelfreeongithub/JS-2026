// CLOUSERS IN JS

// A closure is when a function remembers variables from its outer (parent) scope, even after the outer function has finished execution.

// 📌 Simple Definition:
// Function + its lexical scope = Closure

// Basic Example

function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log(count);
  }
  return inner;
}
const fn = outer();

// fn();
// fn();
// fn();
// fn();
// fn();

// ⚠️ Without Closure (normal case)
// function test() {
//   let x = 10;
// }

// test(); // x is gone ❌

// ✅ With Closure

function test() {
  let x = 10;

  return function () {
    console.log(x);
  };
}
const fn1 = test();

// fn1();

// 🔥 3️⃣ Why Closures?

// Closures help to:
// Preserve data
// Create private variables
// Avoid global variables
// Build reusable functions

// 💡 4️⃣ Real Use Case: Private Variable

function counter() {
  let count = 0;

  return {
    increment: function () {
      count++;
      console.log(count);
    },
    decrement: function () {
      count--;
      console.log(count);
    },
  };
}

const c = counter();
// console.log(c.count); // that gives undefined bcz we cant access count outside

// c.increment();
// c.increment();
// c.decrement();
// 👉 these above Works because functions remember count

// 🚀 5️⃣ Real Use Case: Function Factory
function multiply(x) {
  return function (y) {
    return x * y;
  };
}

const double = multiply(2);
const tripple = multiply(3);

// console.log(double(5));
// console.log(tripple(5));
// clousers stroes x -  It means the inner function remembers the value of x even after multiply() has finished.

// 🔥 Real WITHOUT closure scenario
// ❌ Example
function outer() {
  let x = 10;
}

function inner() {
  console.log(x);
}

// outer();
// inner(); //ReferenceError: x is not defined ❌

// ⏱️ 6️⃣ Closures in Async (IMPORTANT)
function delayedMessage(msg) {
  setTimeout(() => {
    console.log(msg);
  }, 2000);
}
// delayedMessage("Hyy");
// 👉 msg is remembered inside callback

// ⚠️ 7️⃣ Common Interview Problem

for (var i = 0; i <= 3; i++) {
  setTimeout(() => {
    // console.log(i);
  }, 1000);
}
// it will give 4 4 4 4 output
// why this happen
// step 1 :understand var
// var = function scoped (NOT block scoped)
// 👉 There is only ONE i variable

// Step 2: Loop runs FAST
// for (var i = 1; i <= 3; i++)
// Loop runs instantly:
// i = 1 → schedule setTimeout
// i = 2 → schedule setTimeout
// i = 3 → schedule setTimeout
// i = 4 → loop ends

// 👉 Important:setTimeout does NOT run immediately ❗

// Step 3: After 1 second

// All callbacks run:

// () => {
//   console.log(i);
// }

// 👉 But now: i = 4

// 🎯 Final result
// 4
// 4
// 4

// 🔥 Key Problem: All callbacks share SAME variable i

// ✅ Fix using let
for (let i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

// 🧠 Why this works?
// Step 1: let is block scoped
// Each iteration gets a NEW i

// 🔥 Fix using Closure (manual)
for (var i = 1; i <= 3; i++) {
  function close(x) {
    setTimeout(() => {
      console.log(x);
    }, 1000);
  }
  close(i);
}
// 🧠 Why this works?
// close(i) creates a new variable x
// Each call stores its own value

// Final Answer -
// With var, all setTimeout callbacks share the same variable i, which becomes 4 after the loop ends.
// With let, a new i is created for each loop iteration, and closures store each value separately, giving correct output.

// 🧠 8️⃣ Memory Concept:
// Closures keep variables alive in memory
// Even after function finishes → variables not destroyed

// ⚠️ Be Careful
// Too many closures → memory issues (rare but important)

// 🧠 10️⃣ Simple Analogy
// Closure = backpack 🎒

// Function carries its data (variables) even after leaving place
