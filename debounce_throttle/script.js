// 🧠 1️⃣ Problem First (Why we need it?)
// Imagine: User typing in search input

// 👉 Every keystroke triggers API call ❌

// h → API
// he → API
// hel → API
// hell → API
// hello → API

// 👉 Too many calls → bad performance

// 🎯 Solution

// Control how often a function runs
// 👉 Two ways:
// Debounce
// Throttle

// 🔥 2️⃣ Debounce
// Run function only after user stops doing something
// 📌 Simple idea: Wait → then execute

// 🧪 Example
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

// 🔹 Usage
const serach = debounce((text) => {
  console.log("api call for:", text);
}, 500);

// 🧠 Behavior
// Typing fast → no calls
// Stop typing → 1 call after delay [“Wait 500ms after the last call, then run the function”]

// 🎯 Real-world use
// Search bar
// Input validation
// Auto-save

// --------------------------------------------------
// 🔥 3️⃣ Throttle
// Run function at fixed intervals

// 📌 Simple idea
// Run every X ms (ignore extra calls)

// 🧪 Example
function throttle(fn, delay) {
  let lastCall = 0;

  return function (...args) {
    const now = Date.now();

    if (now - lastCall >= delay) {
      lastCall = now;
      fn(...args);
    }
  };
}

const scrollHandler = throttle(() => {
  console.log("scroll event");
}, 1000);
// 🧠 Behavior
// User scrolls fast → function runs every 1 second only

// 🎯 Real-world use
// Scroll events
// Resize events
// Button spam prevention

// 🧠 4️⃣ Difference (VERY IMPORTANT)

// Feature  	Debounce	  Throttle
// Execution	After delay	   At intervals
// Trigger	    Last action	   Continuous
// Use case	     Search input  Scroll / resize

// 🧠 5️⃣ Timeline Understanding
// Debounce
// Typing: --- --- --- --- STOP → RUN

// Throttle;
// Typing: RUN-- - RUN-- - RUN;

// 🎯 Final Understanding

// Debounce reduces unnecessary calls by executing only after inactivity, while throttle limits execution frequency to improve performance.
