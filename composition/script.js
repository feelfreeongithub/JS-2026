//COMPOSITION

// 🧠 1️⃣ What is Composition?
// In JavaScript: Composition means combine a smal functions to build larger functionality.

// 📌 Simple Definition
// Composition = combine small reusable functions → create powerful logic

// 🔥 2️⃣ Basic Example
const add = (x) => x + 2;
const multiply = (x) => x * 3;

// Composition
const result = multiply(add(5));
// console.log(result);

// 🔥 3️⃣ Real Composition Function
// Instead of nesting:
// multiply(add(5))

// We create a reusable compose:

const compose = (f, g) => (x) => f(g(x));

const add1 = (x) => x + 2;
const multiply1 = (x) => x * 3;

const final = compose(multiply1, add1); // we can write multiply1 ist bcz exceution starts from right to left bcz in above we implemmnet that logic const compose = (f, g) => (x) => f(g(x)); , for working it left to right you can write like that const compose =(f,g)=> (x)=> g(f(x))
// console.log(final(5));

const compose1 =
  (...fns) =>
  (x) =>
    fns.reduceRight((acc, fn) => fn(acc), x);

const add2 = (x) => x + 2;
const square = (x) => x * x;
const double = (x) => x * 2;

const final1 = compose1(double, square, add2);
// console.log(final1(2));

// 🧠 Difference
// Function	Order
// compose	right → left
// pipe	left → right

// 💡 6️⃣ Why use Composition?
// ✅ 1. Reusability

// const toUppr = (str) => str.toUpperCase();
// const addExclamation = (str) => str + "!";

// const shout = compose(addExclamation, toUppr);
// console.log(shout("hello"));

//other way  compose[right to left]
// const toUppr = (str) => str.toUpperCase();
// const addExclamation = (str) => str + "!";

// const shout = compose(addExclamation, toUppr);
// console.log(shout("hyy"));

// pipe[left to right]
// const pipe = (f, g) => (x) => g(f(x));
// const toUppr = (str) => str.toUpperCase();
// const addExclamation = (str) => "!" + str;

// const shout = pipe(addExclamation, toUppr);
// console.log(shout("yupp"));

// 🚀 7️⃣ Real-world Use Cases
// 🔹 1. Data transformation

const trim = (s) => s.trim();
const lower = (s) => s.toLowerCase();

const format = compose(trim, lower);
// console.log(format("  HELLO  "));

// 🔹 2. API data processing
const getUsers = (data) => data.users;
const getNames = (users) => users.map((u) => u.name);

const process = compose(getNames, getUsers);

// 🔹 4. Event handling / UI logic
// validation → formatting → submit
// chained behavior

// 🧠 8️⃣ Composition vs Inheritance
// Composition = combine behavior ✅
// Inheritance = extend class ❌ (less flexible)

// 👉 Modern JS prefers:"Composition over inheritance"

// ⚠️ 9️⃣ When NOT to use
// Very simple logic
// One-time functions
// Over-engineering small tasks

// 🎯 🔟 Interview Questions
// YES ✅ — very common!
// You may get:
// ❓ What is function composition? Ans:👉 Combine functions to build logic

// ❓ Difference between pipe and compose?
// ❓ Write compose function
// ❓ Real-world use case?
// ❓ Why composition over inheritance?

// 🧠 Final Summary
// Composition = combine small functions
// Makes code reusable, clean, testable
// Used in real apps (React, Redux, APIs)
// Very important for interviews

// ✅ One-line Answer: Composition in JavaScript is a technique of combining multiple small functions to create more complex functionality in a clean and reusable way.
