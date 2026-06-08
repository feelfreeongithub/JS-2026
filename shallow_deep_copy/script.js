// 🧠 1️⃣ Problem First

const obj1 = { name: "JS" };
const obj2 = obj1;
obj2.name = "react";

// console.log(obj2.name); // react
// 🧠 Why?
// Both obj1 and obj2 point to SAME memory
// 👉 This is called: Reference (not copy)
// 🎯 Solution → Copy object
// ---------------------------------------------------------------
// Now two Types:

// 🔥 2️⃣ Shallow Copy :  Copies only first level (top level)

const add1 = { name: "JS", adress: { city: "Jaipur" } };
const add2 = { ...add1 }; //shallow copy
// console.log(add2);

add2.name = "React";
add2.adress.city = "rajasthan";

// console.log(add1.name); //JS  ✅
// console.log(add1.adress.city); //rajastahn ❌
// in that add1 .name does not change but address change to rajatshn bcz shallow copy copies only top level not nested like adrress

// 🧠 Why?
// Top level → copied
// Nested object → still reference

// 📦 Visual
// obj1.address  ──┐
//                ├── same reference ❌
// obj2.address  ──┘

// 🧠 3️⃣ Deep Copy : Copies everything (including nested objects)
const testDeep = { name: "JSX", address: { city: "Jaipur" } };
const testDeep2 = structuredClone(testDeep);
// console.log(testDeep2);

testDeep2.address.city = "Rajastthan";
// console.log(testDeep2);
// console.log(testDeep.address.city); //Jaipur

// 🧠 Why?
// New memory created for ALL levels

// 🧠 4️⃣ Ways to copy
// 🔹 Shallow Copy
// { ...obj }              // Spread operator
// Object.assign({}, obj)  // Object.assign

// 🔹 Deep Copy
// structuredClone(obj)  // best modern way

// ⚠️ Old method
// JSON.parse(JSON.stringify(obj))

// 👉 Problems:
// - loses functions ❌
// - loses undefined ❌
// - not recommended

// --------------------------------------------
// 🧠 5️⃣ Array Example
const arr1 = [1, [2, 3]];
const arr2 = [...arr1];
// console.log(arr2);

arr2[1][0] = 99; // this will also the arr1 index to 99 bcz shallow copy only copiers top level properitoes while nested objects are still refrence
// console.log(arr2); // [ 1, [ 99, 3 ] ]

// console.log(arr1); [1, [99, 3]];

// 🧠 6️⃣ Interview Definition
// ---------Shallow Copy

// A shallow copy copies only the top-level properties, while nested objects are still referenced.

// ----------Deep Copy

// A deep copy creates a completely independent copy including all nested objects.

// 🧠 7️⃣ When to use?------------
// Shallow Copy:-------
// Simple objects
// No nested mutation

// 🔹 Deep Copy:------------
// Nested objects
// React state updates
// Complex data

// 🎯 Final Understanding
// Shallow → partial copy
// Deep → full copy

const obj11 = { a: 1, b: { c: 2 } };

const obj22 = { ...obj11 };
console.log(obj22); // { a: 1, b: { c: 2 } }

// obj22.b.c = 100; { a: 1, b: { c: 100 } }
// console.log(obj11.b.c); { a: 1, b: { c: 100 } }  in this c will be 100 bcz its nested and shallow copy take nested as refrence not copy

obj22.a = 200;
console.log(obj11.a); //1 its not change bcz its is top level and shallow copy can copies only top level object
