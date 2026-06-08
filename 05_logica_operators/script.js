// Logical operators
// AND -> All cond must be true (&&)
// OR -> atleats one cond must be true (||)
// NOT -> True -> false & Flase -> true

const age = 22;
const gender = "male";

// And
if (age >= 18 && gender == "male") {
  console.log("yes you are adult");
}
// Or
if (age >= 18 || gender == "female") {
  console.log("yes you are adult");
}
