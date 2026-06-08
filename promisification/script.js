// 🧠 1️⃣ What is Promisification?
// Promisification means converting a callback-based function into a Promise-based function.

// 🔥 2️⃣ Why Promisification is needed?
// Earlier JavaScript used callbacks:
function getData(callback) {
  setTimeout(() => {
    console.log("Data received");
  }, 1000);
}
getData(function (data) {
  console.log(data);
});

// ❌ Problem with callbacks
// - Callback hell (nested code)
// - Hard to read
// - Hard to handle errors

// ✅ Solution → Promises

function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data recevied");
    }, 1000);
  });
}
getData().then((data) => console.log(data));

// Promisification core expample

// callback version ❌
function add(a, b, callback) {
  let result = a + b;
  return callback(result);
}

// ✅ Promisified version
function addPromise(a, b) {
  return new Promise((resolve, reject) => {
    let result = a + b;

    if (result) {
      return resolve;
    } else {
      reject("error");
    }
  });
}

addPromise(1, 2)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
