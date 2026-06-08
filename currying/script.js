// 1️⃣ What is Currying?
// Currying is a technique where a function with multiple arguments is converted into a sequence of functions, each taking one argument at a time.

// 📌 Simple Definition
// Normal function → takes all arguments at once
// Curried function → takes arguments one by one

// 🔥 2️⃣ Normal Function vs Curried Function
// ❌ Normal function

function add(a, b, c) {
  return a + b + c;
}
// console.log(add(1, 2, 3));

// ✅ Curried function
function add1(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
// console.log(add1(1)(2)(3)); // 6

// 🧠 How it works step-by-step
// add(1)
//   ↓ returns function(b)
// add(2)
//   ↓ returns function(c)
// add(3)
//   ↓ final result = 6

// 🔥 3️⃣ Why Currying works (IMPORTANT):
// 👉 Because of closures

// Each function remembers previous values:

// a is remembered
// b is remembered
// c is used last

// 💡 4️⃣ Why use Currying?
// ✅ 1. Code Reusability

function multiply(a) {
  return function (b) {
    return a * b;
  };
}
const double = multiply(2);
const tripple = multiply(3);

// console.log(double(5));
// console.log(tripple(5));
// 👉 You don’t rewrite logic again and again

// ✅ 2. Function customization
const add2 = (a) => (b) => (c) => {
  return a + b + c;
};
// console.log(add2(1)(2)(4));

const greet = (greeting) => (name) => {
  return greeting + " " + name;
};

const sayHellow = greet("Hello");
const saYHii = greet("Hi");
// console.log(sayHellow("sonam"));
// console.log(saYHii("simi"));

// ✅ 3. Cleaner code (less repetition)
// Instead of:

// sendRequest("GET", "/users");
// sendRequest("GET", "/posts");

// Use:

// const get = sendRequest("GET");

// get("/users");
// get("/posts");

// ✅ 4. Useful in Functional Programming
// Currying is widely used in:

// React
// Redux
// Lodash
// Middleware systems

const api = (baseUrl) => (endpoint) => (method) => {
  return `${method} request to ${baseUrl}${endpoint}`;
};

const githubApi = api("https://api.github.com");
// console.log(githubApi("/users")("/GET"));

// 🧠 6️⃣ Currying vs Normal Function
// | Feature     | Normal      | Curried    |
// | ----------- | ----------- | ---------- |
// | Arguments   | all at once | one by one |
// | Flexibility | low         | high       |
// | Reusability | less        | more       |

// 🧠 7️⃣ Simple Analogy
// Normal function = ordering full pizza 🍕 at once
// Currying = choosing toppings step-by-step 🧑‍🍳

// ⚠️ 8️⃣ When NOT to use Currying:
// ❌ Simple calculations
// ❌ Performance-critical loops
// ❌ When code becomes too nested

// 🎯 9️⃣ Best Use Cases:
// ✔ Event handlers
// ✔ API helpers
// ✔ Function factories
// ✔ Logging systems
// ✔ Configuration-based functions

// 🧠 10️⃣ One-line Definition
// Currying is transforming a function with multiple arguments into a series of functions that take one argument at a time.

// ✅ Final Summary
// Currying = breaking function into smaller functions
// Uses closures internally
// Helps reuse logic + customize behavior
// Very common in functional programming
