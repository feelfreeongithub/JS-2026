// 🚀 Let’s Start — this Keyword (Step 1)

// What is This?
// this refers to the object that is calling function

// ⚠️ BUT IMPORTANT
// this value is decalred at runtime (how function is called) | 👉 Not where it is written ❗

// 1️⃣ Global Scope
console.log(this);
// 👉 Browser: window object

// 🧪 2️⃣ Inside normal function
function test() {
  //   console.log(this);
}
// test();
// 👉 Output: window (or undefined in strict mode)

// 🧪 3️⃣ Inside object method
const obj = {
  name: "sonam",
  greet: function () {
    console.log(this.name);
  },
};
// obj.greet(); //output sonam why? this -> refres to obj

// 🧪 4️⃣ Arrow function (IMPORTANT ⚠️)

const obj1 = {
  name: "simi",
  greet: () => {
    console.log(this.name);
  },
};
// obj1.greet(); //output undefined why ? Arrow function DOES NOT have its own this It takes this from outer scope

// 🧪 5️⃣ Nested function problem
const obj2 = {
  name: "Sonam",
  greet: function () {
    function inner() {
      console.log(this.name);
    }
    inner();
  },
};

// obj2.greet(); //give undefined bcz how inner is called its not called like obj.inner()
// undefined comes because inner() is a normal function and when it is called directly, its this becomes the global object (or undefined in strict mode), not obj.

// 🧪 Fix using arrow
const obj3 = {
  name: "Sonam",
  greet: function () {
    const inner = () => {
      console.log(this.name);
    };
    inner();
  },
};

// obj3.greet(); //sonam

// Memory Trick
// Call decides this (normal function)
// Arrow ignores call, copies parent this

// Try

const obj4 = {
  name: "JS",
  print: function () {
    console.log(this.name);

    const inner = function () {
      console.log(this.name);
    };
    //fix using arrow
    //  const inner = () => {
    //    console.log(this.name);
    //  };

    inner();
  },
};

obj4.print();
// First log prints "JS" because this refers to obj, while the second prints undefined because inner() is a normal function and its this is not bound to obj.
