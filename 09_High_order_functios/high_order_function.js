// High Order Function and callback

// A callback is simply a function passed as an argument to another function, and it is executed later.

// A Higher Order Function is a function that takes another function as an argument or returns a function, while a Callback is the function passed into another function to be executed later.

// Why callbacks are used?
// Callbacks let you decide later what to do with the result.

function greet(name) {
  //   console.log("Hello " + name);
}

function processUserInput(callback) {
  const name = "Sonam";
  callback(name);
}

processUserInput(greet);

function add(a, b, cb) {
  let res = a + b;
  cb(res);
}
add(2, 2, function (val) {
  //   console.log(val);
});
// add(2, 2, showResult);
// add(2, 2, saveToDB);
// add(2, 2, sendEmail);

//2nd way
// add(2, 2, (val) => console.log(val));

// Higher-Order Function (HOF)

// A Higher-Order Function is a function that:takes another function as argument, OR returns a function
function multiplier(x) {
  return function (y) {
    return x * y;
  };
}

const double = multiplier(2);
// console.log(double(5));

// Built-in Higher Order Functions in JavaScript
// Many arrays methods are HOFs:
const numbers = [1, 2, 3, 4];

// numbers.map((n) => n * 2);
numbers.filter((n) => n > 2);
// numbers.forEach((n) => console.log(n));

// ------------------------------------------ Practice CallBack -----------------------------
function calculate(a, b, opertation) {
  return opertation(a, b);
}

function multiplier(x, y) {
  return x * y;
}

let res = calculate(2, 4, multiplier);
// console.log(res);

function sumNum(a, b, callback) {
  const addNum = a + b;
  callback(addNum);
}

function result(sum) {
  console.log("this is result of sum", sum);
}

sumNum(2, 5, result);
