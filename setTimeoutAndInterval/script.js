const button = document.getElementById("stop-btn");

function showTime() {
  const currentTime = new Date();
  //   console.log(currentTime);
  const time = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;
  console.log(time);

  document.getElementById("time").innerText = time;
}

setTimeout(() => console.log("hyy"), 5000);
let interval = setInterval(showTime, 1000);

button.addEventListener("click", () => {
  clearInterval(interval);
});

//----------------------------------------------setTimeout()-------------------------------
// Runs a function once after a delay

// Syntax: setTimeout(callback, delay);
// callback → function to run
// delay → time in milliseconds (ms)
// 1000 ms = 1 second

// Example
console.log("Start");

setTimeout(() => {
  console.log("Hello after 2 sec");
}, 2000);

console.log("End");

// Output:
// Start
// End
// (after 2 sec)
// Hello after 2 sec

// Why? - setTimeout runs asynchronously (non-blocking)

// 🎯 Use Cases of setTimeout
// Delay execution
// Show message after some time
// API retry
// Animation timing
// Debouncing (advanced)

// ----------------------------------------------setInterval()------------------------------
// Runs a function again and again after fixed interval

// Synteax: setInterval(callback, delay);

// Example:
setInterval(() => {
  console.log("Running every 2 sec");
}, 2000);

// output
// (after 2 sec)
// Running every 2 sec
// (after 2 sec)
// Running every 2 sec
// ... continues

// 🎯 Use Cases of setInterval
// Clock / timer
// Polling API
// Repeating animations
// Auto-refresh data

// ⚠️ 3️⃣ Important Difference
// | Feature | setTimeout | setInterval |
// | ------- | ---------- | ----------- |
// | Runs    | Once       | Repeatedly  |
// | Use     | Delay task | Repeat task |

// 🔁 4️⃣ How to stop them?
// ✅ Stop setTimeout
const id = setTimeout(() => {
  console.log("Hello");
}, 2000);

clearTimeout(id);

// ✅ Stop setInterval
const id1 = setInterval(() => {
  console.log("running");
}, 1000);

clearInterval(id1);

// 🧠 5️⃣ Real Example (Timer)
let count = 0;

const timer = setInterval(() => {
  count++;
  console.log(count);

  if (count === 5) {
    clearInterval(timer);
  }
}, 1000);

// Output;
// 1;
// 2;
// 3;
// 4;
// 5;
// (stop)

// 🔥 6️⃣ Common Mistake
// setTimeout(console.log("Hello"), 2000);  //👉 ❌ Wrong — runs immediately

// ✅ Correct : setTimeout(() => console.log("Hello"), 2000);

// 🧠 7️⃣ Behind the scenes
// JS sends timer to browser
// Browser waits
// Then sends callback to event loop
// Then executes

// 🎯 8️⃣ When to use what?
// Use setTimeout when:
// Run something once later
// Delay execution

// Use setInterval when:
// Repeat something
// Continuous updates

// 💡 Pro Tip (Important)
// Sometimes instead of setInterval, use:

function repeat() {
  console.log("run");
  setTimeout(repeat, 1000);
}

repeat();
// 👉 More control (avoids bugs)

// 🧠 Simple Analogy
// setTimeout → alarm ⏰ (rings once)
// setInterval → alarm loop 🔁 (rings again & again)

// Final Summary:
// setTimeout → runs once after delay
// setInterval → runs repeatedly
// Both are asynchronous
// Use clearTimeout / clearInterval to stop
