// Array

// An array is a data structure used to store multiple values in a single variable.

// 2. Array Characterstics
// - Ordered (index-based)
// - Zero-indexed (starts from 0)
// - Can store any type

const mixedArr = [1, "hello", true, { name: "sonam" }, [1, 2]];

// 3. Accessing Elements
const arr = [10, 20, 30];
// console.log(arr[0]);
// console.log(arr[2]);

//4. Modifying Elemnts - Arrays are mutable
const arr1 = [1, 2, 3, 4];
// arr1 = [5, 6];
// console.log(arr1);  this will give error bcz we cant modify varibale const but we can modify elemnts

arr1[1] = 50;
// console.log(arr1);

// 5. Array length
const arr2 = [1, 2, 3, 4];
// console.log(arr.length); // 4

// 6. Array Methods

// 1. Adding Elemnts

const arr3 = [1, 2, 3, 4];
arr3.push(6); //its push element at lats of an arrray
// console.log(arr3);

const nameArr = ["sonam", "pradeep"];
nameArr.push("simi");
// console.log(nameArr);

const arr4 = [1, 2, 3, 4, 5];
arr4.unshift(9); //its add at the beginning
// console.log(arr4);

//  2.Removing Elements

const arr5 = ["marvel", "thane", "avatar"];
arr5.pop(); //it will remove avatar from end of an array
// console.log(arr5);

const arr6 = [1, 2, "victoria", true, { name: "hyy" }];
arr6.pop();
// console.log(arr6);

const arr7 = [1, 2, 8, "9"];
arr7.shift(); //remove the ist element
// console.log(arr7);

//  LOOP THROUGH ARRAYS

// 1. For Loop
const loopaArr = [10, 20, 30];
for (let i = 0; i < loopaArr.length; i++) {
  // 0<3 | 1<3 |2<3
  //   console.log(loopaArr[i]);
}

// Most imp Array HOFs
// 2. For Each Loop
loopaArr.forEach(function (val) {
  //its a HOF bcz forEach it take function as an argument(callback)
  //   console.log(val);
});

// 3. .Map()
const nums = [1, 2, 3, 4];
const doubled = nums.map((n) => n * 2);
// console.log(doubled); //returns new array

// dIFFERENCE BETWEEN FOR EACH AND MAP
const doubledEach = nums.forEach((n) => {
  return n * 2;
});

// console.log(doubledEach); //it will give undefined bz forEach() does not return anything , its just run the func for each elememnt . We can use it just for print ,log

// const doubledMap = nums.map((n) => {
//   return n * 2;
// });
// console.log(doubledMap); //map() returns new array , Each element is transformed

// CHAINABILITY
// const result = [1, 2, 3].map((n) => n * 2).filter((n) => n > 3);

// console.log(result);

// Map() SUPPORT CHANING , forEach() does not

// 4. filter() - Returns all elements that match condition

// const result1 = [1, 2, 3, 4].filter((n) => n > 2);
// console.log(result1);

// 5. reduce() - reduce array to single value  | used for sum , toatl , aggregation
// const numss = [1, 2, 34];
// const sum = numss.reduce((acc, curr) => acc + curr, 0);
// console.log(sum);

// 6. find() - returns its only  Ist matching elements
const val = [10, 20, 30].find((n) => n > 15);
// console.log(val); // 20

// 7. findIndex() - returns the index (position) of the first element that matches a condition.
// const index = [10, 20, 30, 40].findIndex((n) => n > 20);
// console.log(index);

// 8. ----------------includes() - its check boolean
const arrInc = [1, 2, 3];
// console.log(arrInc.includes(2));

// 9. ---------------------------indexOf() - its gives the element at which index
const arrIndx = [10, 20, 30];
// console.log(arrIndx.indexOf(20));

// 10. -----------------------------charAT  - is a string method used to get a character at a specific index (position).

const str = "Hello";

// console.log(str.charAt(0));

// 11. -----------------------------------Slice & Splice

// slice  → COPY (does NOT change original array)
// splice → CUT/EDIT (changes original array)

// -------------SLICE - What it does Extracts a portion of array , Returns a new array , Does not modifiy original array

// SYNTAX  - arr.slice(start , end)  | Start- index to begin , End - index to stop (not includes)
// Slice - useCase -> copy/extarct

const sliceArr = [1, 2, 3, 4, 5];
// const resultSlice = sliceArr.slice(2, 4);

// console.log(resultSlice); //returns new array without chnaging original array
// console.log(sliceArr); //doew not change original array

// console.log(sliceArr.slice(2)); //no end

// Negative Index - A negative index means counting from the end of the array instaed of the beginning
index: (0, 1, 2, 3, 4);
value: (1, 2, 3, 4, 5);

Neg: (-5, -4, -3, -2, -1);

// console.log(sliceArr.slice(-2)); //start from second last 40 go till end

// console.log(sliceArr.slice(-4, -1)); //end not included

// -----------SPLICE - What it does add/ removes/replacce elemnts , Modfies originl array
// splice() = CUT from array + GIVE BACK what you cut
// splice - add/remove/update

// SYNTAX - arr.splice(start, deleteCount, newItems...)  | start - where to start , deleteount - how many to remove , newItems - optional items to added

// -------EXample Remove Elements
// console.log(sliceArr.splice(1, 3)); // splice return the array that were removed from the array
// console.log(sliceArr); //modfy original array

// -------Example Add elemnts
// console.log(sliceArr.splice(2, 0, 3));     //it returns removed elemdnts
// sliceArr.splice(2, 0, 3);
// console.log(sliceArr);    //it returns updated array of sliceArr

// 12/ ---------------------------------- Spread Operator - The spread operator expands elements of an array/object into individual values.

const spreadArr1 = [1, 2, 3, 4];
const spreadArr2 = [...spreadArr1];
// console.log(spreadArr2); //it creates a new copy not refrence -> means The new array is completely separate in memory.
// Changing one will NOT affect the other.

const a = [1, 2];
const b = [3, 4, 6];
const merged = [...a, ...b];
// console.log(merged);

//Object SPread
const user = {
  name: "sonam",
};
const updateUser = { ...user, age: 25 };
// console.log(updateUser);

//  CASE 1 Refrnce (NOT COPY)
const arrr1 = [2, 3, 1];
const arrr2 = arrr1; //-> does not create new array , it just points same array(same memory)
// console.log(arrr2);
arrr2.push(4);
// console.log(arrr1);
// console.log(arrr2);

// Case 2: Copy using Spread (...)
const arrSp1 = [10, 20, 30, 40, 50];
const arrSp2 = [...arrSp1]; //that creates copy of new array
arrSp2.push(80);
// console.log(arrSp1);
// console.log(arrSp2);

//  --------------------Simple Analogy--------
// Reference → same notebook
// Copy      → photocopy of notebook

// . Change original → both change (reference)

// . Change copy → original stays same (copy)

// 13. ---------------------------------------------- DESTRUCTURING - EXTRACT VALUES FROM ARRAYS/OBJECTS INTO VARIABLES EASILY.
// why use destructring less code, cleaner code , extarct data easily
//    1. Array Destructring
const deArr = [1, 2, 3, 4];
const [w, x, y, z] = deArr;
// console.log(w, x, y, z);

//   2. Object Destructring
// take user from above example
const { name, age } = user;
// console.log(name, age);

// 3. Rename varibales
const { name: userName } = user;
// console.log(userName);

// 14. ----------------------------------- Sorting ------------
// sort() is used to arrange array elemnets

// Default scrollTo(problem)
const defSort = [10, 20, 5];
defSort.sort();
// console.log(defSort); //not sort, bcz it sort as strings not numbers

defSort.sort((a, b) => a - b);
// console.log(defSort);

// SORT Rule
// a - b < 0  → keep order (a before b)
// a - b > 0  → swap (b comes before a)

// step 1. compare 10 and 20
// a=10 , b=20
// 10-20 = -10  //negative keep order
// [10,20,5]

// step 2 compare 20 and 5
// 20-5 = 15  //poistive swap
// [10,5,20]

// step 3 compare 10 and 5
// 10-5 = 5 positive swap
// [5,10,20]  final result

// SUPER Trick
// Small - Big = Negative → correct order
// Big - Small = Positive → swap

//   -----------DESENDING SORT
defSort.sort((a, b) => b - a);
// [10, 5, 2];  output

// SORTING STRINGS
const names = ["Sonam", "Pradeep", "Simi"];
names.sort();
// console.log(names);

// Most Importnat Arrays Hof
// forEach()
// map()
// filter()
// reduce()
// find()
// findIndex()
// some()
// every()
// sort()
// flatMap()

// flatMap() - map + flat()(depth1);
// it runs a function on each elemnst like map , flaten the result bt one level.
// syntax - arr.flatMap(callback)

const flatArr = [1, 2, 3];
const flatResult = flatArr.flatMap((num) => [num, num * 2]);
// console.log(flatResult);

// Step by step flat map

// step 1 :map part
// 1 → [1, 2]
// 2 → [2, 4]
// 3 → [3, 6]

// so result becomes
// [
//   [1, 2],
//   [2, 4],
//   [3, 6],
// ];

// step 2 . flat part
// flatten 1 level

// final  [1, 2, 2, 4, 3, 6]

// Same thing without flatmap
// const flatResult1 = flatArr.map((num) => [num, num * 2]).flat();    //flatMap() is just a shortcut for this

// why use flatmap
// Reason 1: Cleaner code Instead of below format:

// console.log(flatResult);
// flatArr.map((num) => [num, num * 2]).flat();  use->  flatArr.flatMap((num) => [num, num * 2])

// Reason 2.  Avoid nested arrays
const flatRes2 = flatArr.map((n) => [n * 2]);
// console.log(flatRes2);    //[ [ 2 ], [ 4 ], [ 6 ] ]  using flatMap() it wiill give [2,4,6]

// Real world flatMap exmaple
const sentences = ["Hello world", "Hi JS"];
// const words = sentences.flatMap((str) => str.split(" "));
// console.log(words);

// withoout flatMap
// const words = sentences.map((str) => str.split(" "));
// console.log(words); //[ [ 'Hello', 'world' ], [ 'Hi', 'JS' ] ]
