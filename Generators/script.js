// -----------------------ITERATORS--------------------------

// 🧠 1️⃣ What are Iterators?
// 👉 Simple idea : An iterator is an object that lets you get values one by one instead of all at once.

// 📌 Real-life idea
// Array → all data at once 📦
// Iterator → give data step by step 📤

// 🔥 Example (manual iterator)
function createIterator(arr) {
  let index = 0;

  return {
    next: function () {
      if (index < arr.length) {
        return { value: arr[index++], done: false };
      } else {
        return { value: undefined, done: true };
      }
    },
  };
}

const it = createIterator([10, 20, 30]);
// console.log(it.next()); //10
// console.log(it.next()); //20
// console.log(it.next()); //30
// console.log(it.next()); // {value:undefined,done:true}

// 🧠 2️⃣ Built-in Iterators: JavaScript already gives iterators for:
// Arrays;
// Strings;
// Maps;
// Sets;

const arr = [1, 2, 3];
const iterator = arr[Symbol.iterator]();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// 🧠 Why [Symbol.iterator]()?
// It makes an object iterable

// 🧠 3️⃣ ----------------------- What are Generators? --------------------------

// 👉 Simple idea: A generator is a special function that can pause and resume execution

// Syntax:
function* myGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

// 🔥 Example:
function* gen() {
  yield 10;
  yield 20;
  yield 30;
}

const g = gen();

// console.log(g.next());
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());

// 🧠 Key idea: Generator = automatic iterator creator
// 👉 You don’t need to manually write next()

// 🧠 4️⃣ --------------------------- What is yield? ---------------------------------
// 👉 Simple definition: yield pauses the function and returns a value

// 🔥 Example:
function* demo() {
  console.log("start");
  yield 1;

  console.log("middle");
  yield 2;

  console.log("end");
}

const d = demo();
// d.next();
// d.next();
// d.next();

// 🧠 5️⃣ Generator with input
function* gen1() {
  const x = yield 10;
  console.log(x, "x");
}

const g1 = gen1();
g1.next();
g1.next(50);

// 🧠 6️⃣ Iterator vs Generator
// Feature	Iterator	Generator
// Creation	manual	automatic
// Complexity	high	low
// next()	must write	auto created
// Readability	low	high

// 🧠 8️⃣ Where to use them?
// 🔹 Use Iterators when:
// Custom iteration logic
// Control how loop works

// 🔹 Use Generators when:
// Need lazy data
// Need step-by-step execution
// Infinite sequences
// Complex flows

// 🧠 9️⃣ Real-world example
// Pagination;
// Unique ID generator

// 🧠 🔟 for...of with generator
function* gen2() {
  yield 1;
  yield 2;
  yield 3;
}

for (const val of gen2()) {
  console.log(val);
}

// 🧠 🔥 Deep Concept
// Iterator = protocol (rule)
// Generator = tool that follows that rule
// yield = control point (pause/resume)

// 🎯 Final Summary
// Iterator → gives values one by one
// Generator → creates iterators easily
// yield → pauses execution and returns value
// Used for performance, control, lazy data

// ✅ One-line understanding
// Generators are special functions that create iterators and use yield to pause and resume execution, allowing controlled and efficient data processing.
