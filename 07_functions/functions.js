//Functions - A block of code that runs particular task

function sayHello() {
  //   console.log("hello");
}

sayHello(); //callingi of func

//parameters func

//arguments -> in function defination the variables we gives is arguments
function add(num1, num2) {
  //   console.log(num1 + num2);
}

add(2, 4); //on calling func we gaive values are parameters

function mulyiply(a, b) {
  // console.log(a * b);
  return a * b;
}

let a = mulyiply(1, 2);
// console.log("ths is result", a);

//Unlimited Arguments accept

function addNumbers() {
  // console.log(arguments);
  let ans = 0;
  for (let i = 0; i < arguments.length; i = i + 1) {
    ans = ans + arguments[i];
  }
  return ans;
}

let result = addNumbers(10, 20, 30);
// console.log(result);

function addNumbersV2(...sonam) {
  //Spread Operators
  let ans = 0;
  for (let i = 0; i < sonam.length; i++) {
    ans = ans + sonam[i];
  }
  return ans;
}

let resultV2 = addNumbersV2(10, 20, 30);
// console.log(resultV2);
