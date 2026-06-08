// 1. Synchronus(Blocking)
// Code run line by line, one after another

console.log("Start");

console.log("Middle");

console.log("End");
// Next line waits until previous finishes

// Real meaning -> One task at a time → wait → then next

// 🔴 Problem with Sync
function heavyTask() {
  for (let i = 0; i < 1e9; i++) {}
}

console.log("Start");
heavyTask();
console.log("End");
//  Output:
//  Start
// (after delay)
// End
// ❗ UI freezes → bad user experience

// 2. Asynchronous (Non-blocking):
// Code does NOT wait → continues execution

// Example:-------------------
console.log("Start");

setTimeout(() => {
  console.log("Async Task");
}, 2000);

console.log("End");

// Output:
// Start
// End
// (after 2 sec)
// Async Task

// why? -> setTimeout runs in background → JS continues
// -------------------------

// Key differences
// | Feature   | Sync         | Async        |
// | --------- | ------------ | ------------ |
// | Execution | Line by line | Non-blocking |
// | Waits?    | Yes          | No           |
// | Use case  | simple tasks | API, timers  |

// 🚀 3️⃣ Callback (Quick Revision):
// Async often uses callbacks

setTimeout(() => {
  console.log("Done");
}, 1000);
// 👉 function runs later

// ⚠️ Callback Problem (Callback Hell)
setTimeout(() => {
  console.log("Step 1");

  setTimeout(() => {
    console.log("Step 2");

    setTimeout(() => {
      console.log("Step 3");
    }, 1000);
  }, 1000);
}, 1000);
// 👉 Hard to read 😵

// 💡 4️⃣ Promises (Solution)
// Promise = future result of async operation

// Simple definition  - Promise = "I will give result later"

// 5️⃣ Promise States
// Pending → waiting
// Resolved (Fulfilled) → success
// Rejected → error

// 6️⃣ Creating Promise

const myPromise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Data received");
  } else {
    reject("Error received");
  }
});

// 7. Useing Promises
myPromise
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

//   Flow :
// resolve → then()
// reject → catch()

// 🔥 8️⃣ Real Example (API Simulation)
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("User Data Loaded");
    }, 2000);
  });
}

fetchData()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

//   Output:
//   (after 2 sec)
// User Data Loaded

// Async/Await (Modern Way) - syntax to write promise code in a synchronous style
// Cleaner way to use promises

async function run() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

run();

// COMPLETE FLOW
// Sync → blocks execution
// Async → runs in background
// Callbacks → old way
// Promises → better way
// Async/Await → best & clean

// 🎯 Final Summary
// Synchronous → step-by-step execution
// Asynchronous → non-blocking execution
// Promise → handle async results cleanly
// Async/Await → modern readable syntax

// Main Difference between Promise and async/await
// 🔥 1. Syntax
// Promise → .then().then().catch()
// async/await → looks like normal code

// API calling in JavaScript is the process of sending requests to a server using methods like fetch() and handling the response using promises or async/await.
// API calling is used to communicate with a server to fetch or send data using JavaScript.

// 🔥 Quick Tip for Interviews
// say this:
// We use fetch or axios to call APIs, handle responses using promises or async/await, and manage errors using try/catch.
