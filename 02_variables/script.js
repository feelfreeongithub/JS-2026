// Variables

//var - var is function-scoped and can be redeclared and reassigned.

// var age = 25;
// console.log(age);

// var -> Global Scope[we can access it throuhoth the project]  | var is FUNCTION SCOPED (not block scoped) | var ignores block scope ❗
// value can re-assign
// access anywhere | out of scope also

var name = "sonam";
// console.log(name);
name = "simi";
// console.log(name);

// {
//   var a = 10;
// }
// console.log(a);

// ------------- let and const are block-scoped. let can be reassigned but not redeclared, while const cannot be reassigned after initialization.

//let
// let -> local Scope[we cannot access it out of our scope] | Blocked Scope
// value can re-assign
// cannot access out of scope{}

// {
//   let age = 24;
// }
// console.log(age);
// age = 26;
// console.log(age);

// const
//Scope -> Local scope | const is block scoped → cannot access outside its block
//Values -> cannot re-assign , means the value we gave once cannot change again
//  we can access it but cannot change it

// const num = 12;
// console.log(num);
// num = 14;
// console.log(num); //[gives error bcz we cannot re-assign]

const obj = { name: "Sonam" };

obj.name = "www"; // ✅ allowed
// why? const prevents reassignment, NOT mutation  | Mutation means changing the internal data of an object or array
// Mutation means changing the internal data of an object or array
// 👉 Here:
// We changed the value inside the object

// Why is this allowed with const?
// Because:
// const locks the reference, not the content
