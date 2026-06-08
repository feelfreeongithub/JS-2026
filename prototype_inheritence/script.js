// 🔥 1️⃣ What is Prototype?
// Every JavaScript object has a hidden property called [[Prototype]]
// 👉 It is used to inherit properties and methods from another object

// 📌 Simple idea
// Object → can borrow things from another object

// 🧠 2️⃣ Why Prototype? to avoid duplicating code

// 🧪 Without prototype (bad way)
const user1 = {
  name: "A",
  greet: function () {
    console.log("Hello");
  },
};

const user2 = {
  name: "B",
  greet: function () {
    console.log("Hello");
  },
};
// 👉 greet duplicated ❌

// ✅ With prototype
function User(name) {
  this.name = name;
}
User.prototype.greet = function () {
  console.log("Hello");
};
const u1 = new User("A");
const u2 = new User("B");

u1.greet();
u2.greet();
// 👉 One function shared ✅

// 🧠 3️⃣ What is prototype vs __proto__?

// 🎯 Final Understanding
// Prototype = shared storage
// Inheritance = using that storage

// 🧠 One-line Answer
// Prototype is a shared object where methods are stored, and inheritance is when objects access those methods through the prototype chain.
