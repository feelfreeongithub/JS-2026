// Event Loop is the mechanism that allows JavaScript to handle asynchronous code even though JS is single-threaded.

// 🔥 Simple idea
// JS runs one thing at a time
// But can handle async tasks using event loop

// 🧠 2️⃣ Components involved
// You must know these 4:

// 1. Call Stack
// 2. Web APIs
// 3. Callback Queue (Macrotask)
// 4. Microtask Queue (Promises)

// 🧠 3️⃣ How JS executes code
// Step-by-step flow
// 1. Code goes to Call Stack
// 2. Async tasks go to Web APIs
// 3. Completed tasks go to Queues
// 4. Event Loop moves them back to Stack

// 🧪 4️⃣ Example (VERY IMPORTANT)
console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");
// ✅ Correct Output
// Start
// End
// Promise
// Timeout

// 🧠 5️⃣ Why this output? (STEP-BY-STEP)
// 🔹 Step 1: Call Stack
// console.log("Start") → runs

// Output:

// Start
// 🔹 Step 2: setTimeout
// setTimeout → goes to Web API
// 🔹 Step 3: Promise
// Promise.then → goes to Microtask Queue
// 🔹 Step 4: console.log("End")
// runs immediately

// Output:

// End
// 🔹 Step 5: Now stack is empty

// 👉 Event loop checks queues

// 🔥 Priority rule
// Microtask Queue (Promises) runs BEFORE Callback Queue
// 🔹 Step 6: Promise runs
// Promise
// 🔹 Step 7: setTimeout runs
// Timeout

// 🧠 6️⃣ Key Rule (VERY IMPORTANT)
// Promises (microtasks) ALWAYS run before setTimeout (macrotasks)

// 🧠 7️⃣ Queues difference
// 🔹 Microtask Queue
// Promise.then
// queueMicrotask

// 🔹 Callback Queue (Macrotask)
// setTimeout
// setInterval
// DOM events

// 🎯 Final Understanding
// The event loop manages execution by moving tasks from queues to the call stack, giving priority to microtasks (Promises) over macrotasks (setTimeout).

// ⚠️ Interview Trick

// If interviewer asks:

// 👉 “Does Promise run before setTimeout?”

// You should say:Yes, because Promise callbacks are microtasks and they are executed before macrotasks like setTimeout

// ----------------------
// 🧠 1️⃣ What is Call Stack?
// Call Stack is where JavaScript executes code step-by-step

// 📌 Simple idea
// Call Stack = place where functions run

function one() {
  console.log("One");
}

function two() {
  one();
  console.log("Two");
}

two();

// 📦 Visual (Stack = LIFO)
// Top → [ one() ]
//        [ two() ]
// 👉 Last In → First Out

// 🧠 2️⃣ What is Queue?
// Queue is where async tasks wait before execution

// 📌 Simple idea
// Queue = waiting line

// Types of Queues
// 🔹 1. Microtask Queue
// Promises (.then)
// High priority

// 🔹 2. Callback Queue (Macrotask Queue)
// setTimeout
// setInterval
// DOM events

// 🧠 3️⃣ How Queue works
// Queue = FIFO (First In First Out)

// 🔥 Real-life analogy
// Call Stack = chef cooking 👨‍🍳
// Queue = orders waiting 🧾
// Event Loop = waiter managing orders 🧑‍🍳

// 🎯 Final Answer
// The call stack is where JavaScript executes functions, and queues are where asynchronous tasks wait until the stack is empty, after which the event loop moves them to the stack.
