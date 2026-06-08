// Arrow functions - Arrow function is a shorter way to write functions with different this behavior

// 1. Syntax
const sayHello = () => {
  //   console.log("heyy");
};

sayHello();

const add = (a, b) => {
  return a + b;
};

// console.log(add(1, 2));

const addV2 = (a, b) => a + b; //One Linear

// console.log(addV2(1, 4));

// 2.  'arguments'  Keyword
function arg() {
  // console.log(arguments);
}
arg(10, 20);

const addNum = () => {
  //In arrwo Functions we cannot use arguments
  // console.log(arguments);
};

addNum(1, 2);

const addNumV2 = (...nums) => {
  //In arrwo Functions we cannot use arguments so we use sprread opertators
  // console.log(nums);
};

addNumV2(1, 2);

// 3. Hoisting  - In normal functions we can call function before intilization but in Arrow functions we caanot call function before inlizations
// sayHelloH();

function sayHelloH() {
  // console.log("hyy");
}
// sayHelloH1(); // we cannot call it before intilization
const sayHelloH1 = () => {
  // console.log("hyy");
};
// sayHelloH1();

// 4. This keyword

//------------------------------------------------------------------ Quick revision ---------------------------------------------------------

// Arrow function is a shorter way to write functions with different this behavior

// const revise = (a, b) => a + b; //arrow func

//normal function
// function add(a, b) {
//   return a + b;
// }

// ---------- Most imp difference is "This"
// This is the main reason arrow functions exist

// Normal Fnc
const obj = {
  name: "sonam",
  greet: function () {
    // console.log(this.name);
  },
};
obj.greet(); //sonam
// 👉 this → refers to object

// Arrow func
const obj1 = {
  name: "Simi",
  greet: () => {
    // console.log(this.name);
  },
};
obj1.greet(); //undfined

// Arrow function DOES NOT have its own this
// It takes this from outer scope
// 👉 This is called: Lexical this

// Example to understand “lexical this”
function outer() {
  let name = "Sonam";

  const inner = () => {
    console.log(name);
  };

  inner();
}

outer();

// 👉 Arrow function remembers outer scope
// Functions (arrow or normal) always access variables from outer scope
