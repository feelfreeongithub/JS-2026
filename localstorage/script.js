const button = document.getElementById("clickBtn");
const uname = document.getElementById("input-username");
const username = document.getElementById("username");

button.addEventListener("click", () => {
  const value = uname.value;
  console.log(value);
  localStorage.setItem("name", value);
  location.reload();
});

window.addEventListener("load", () => {
  const value = localStorage.getItem("name");
  username.innerText = value;
});

// --------------------------- Notes ------------------------------------

// 1.Local Storage is a feature of the browser that lets you store data in the user’s browser.

// IN JS - we can store data even after page refresh

// 2. Key Properties
// Stores data as key-value pairs
// Data is stored as strings only
// Data does NOT expire
// Stored in browser (not server)

// Simple example
localStorage.setItem("name", "soname"); //save data

const name = localStorage.getItem("name");
// console.log(name);   //output sonam

// 3. Basic methods
// 1. setItem()
localStorage.setItem("key", "value"); //save data

// 2. getItem()
localStorage.getItem("key"); //get data

// 3. removeItem()
localStorage.removeItem("key"); // remove specific item

// 4. clear()
localStorage.clear(); //remove all data

// ⚠️ 4️⃣ Important Concept (STRING ONLY)
localStorage("age", 25); //actually stored as "25"

// Object problems
const user = { name: "Sonam" };
localStorage.setItem("user", user); //❌ Wrong → stores:  [object Object]

// ✅ Correct way (JSON)
localStorage.setItem("user", JSON.stringify(user));
// Getting it back
const data = JSON.parse(localStorage, getItem("user"));
// console.log(data.name);

// 🚀 5️⃣ Real Example
//save
localStorage.setItem("theme", "dark");
//get
const theme = localStorage.getItem("theme");
//use
(document.body.style.background === theme) === "dark" ? "black" : "white";

// 🔁 6️⃣ Where data is stored?

// 👉 In browser:Chrome → DevTools → Application → Local Storage

// ⚡ 7️⃣ Local Storage vs Session Storage
// | Feature  | Local Storage  | Session Storage |
// | -------- | -------------- | --------------- |

// | Expiry   | Never          | When tab closes |
// | Scope    | All tabs       | One tab         |
// | Use case | long-term data | temporary data  |

// 🎯 8️⃣ When to use Local Storage?

// Use it for:
// Theme (dark/light mode)
// User preferences
// Small app data
// Token (⚠️ careful with security)

// ⚠️ 9️⃣ Limitations
// Only strings
// Size limit (~5MB)
// Not secure for sensitive data

// 🧠 Simple Analogy
// LocalStorage = small notebook in browser
// You write → stays saved
// Even if you refresh → still there

// Final Definition: Local Storage is a browser feature that allows JavaScript to store key-value data persistently on the client side.

// -------------------------------------------------------------------JSON.stringify()-----------------------------------------------------------
// In JS  JSON.stringify() converts a JS objects to strings

// Flow summary
// Object → JSON.stringify() → String → store
// String → JSON.parse() → Object → use

// stringify() → packs data
// parse() → unpacks data

// JSON.stringify() is NOT only for Local Storage ❌
// It’s used anywhere you need to convert data into a string ✅

// What JSON.stringify() actually does
// In JavaScript: Converts → Object / Array → String

// 📦 1️⃣ Use Case: Local Storage (you already saw)
localStorage.setItem("user", JSON.stringify({ name: "Sonam" }));

// 🌐 2️⃣ Use Case: Sending Data to API (VERY COMMON)
// When sending data to backend:
fetch("/api/user", {
  method: "POSt",
  headers: {
    "content-type": "application/json",
  },
  body: JSON.stringify({
    name: "sonam",
    age: 25,
  }),
});
// 👉 APIs expect JSON string, not object

// 🧪 3️⃣ Use Case: Debugging (logging nicely)
const user1 = { name: "Sonam", age: 22 };

console.log(JSON.stringify(user1)); //output {"name":"Sonam","age":"25"}

// ----------------------------------------------- JSON.parse()----------------------------------
// In JavaScript:JSON.parse() converts a string → JavaScript object

// Basic Exmaple
const str = { name: "sonam", age: "25" };

const obj = JSON.parse(str);

console.log(obj); //output  { name: "Sonam", age: 22 }
// Now we can:   console.log(obj.name); // Sonam

// Real use case
// Save
localStorage.setItem("user", JSON.stringify({ name: "Sonam" }));
// Get
const data1 = localStorage.getItem("user");
// Convert back
const user2 = JSON.parse(data);
console.log(user2.name);

// 🌐 5️⃣ Real Use Case (API)
fetch("/api/data")
  .then((res) => res.json()) // internally uses JSON.parse
  .then((data1) => {
    console.log(data1);
  });
// 👉 API gives string → converted to object

// ⚠️ 6️⃣ Important Rule (VERY IMPORTANT)
// 👉 String must be valid JSON
// WRONG: JSON.parse("{name: Sonam}");  //throw error

// CORRECT:JSON.parse("{name: Sonam}");
// Valid JSON needs:
// double quotes " "
// proper format

// 💥 7️⃣ Error Handling
// If string is invalid → app crashes
JSON.parse("invalid data"); // ❌ error

// Safe Way
try {
  const data = JSON.parse("invalid data");
} catch (err) {
  console.log("Invalid JSON");
}

// 🎯 9️⃣ When to use JSON.parse()?

// Use it when:

// Reading from localStorage
// Getting API response
// Converting JSON string → object
// Working with stored data
