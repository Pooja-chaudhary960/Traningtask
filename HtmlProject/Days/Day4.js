// objects
let person = {
  name: "Ram",
  address: {
    city: "kathmadu",
    country: "Nepal",
  },
  age: 20,
};
// gender:"male" add
// city remove
//console.log(person.address.country);
person.gender = "male";
delete person.address.city;
console.log(person);

//Array inside object
let student = {
  name: "Hari",
  age: 22,
  hobbies: ["Reading", "Playing", "Dancing"],
};
console.log(student);
let students = [
  {
    name: "Hari",
    age: 22,
    hobbies: ["Reading", "Playing", "Dancing"],
  },
  {
    name: "Hari",
    age: 22,
    hobbies: ["Reading", "Playing", "Dancing"],
  },
];
console.log(students[0].age);


// Function:
// function myData(){
//     console.log("this is data")
// }
// myData()
// const myData1 = (name)=>{
//     return `my name is ${name}`
//     // console.log(`my name is ${name}`)
// }
// let name = myData1("hari")
// console.log(name)
//calculate(2,3,"+")

const Calculator = (a, b, operator) => {
  const validOperator = ["+", "-", "*", "/"];
  if (!validOperator.includes(operator)) {
    return "Invalid Operator";
  }
  if (isNaN(a) && isNaN(b)) {
    return "Invalid";
  } else if (operator === "+") {
    return a + b;
  } else if (operator === "-") {
    return a - b;
  } else if (operator === "*") {
    return a * b;
  } else if (operator === "/") {
    return a / b;
  } else {
    return "Invalid Operator";
  }
};
const a = Number(prompt("Enter first number"));
const b = Number(prompt("Enter second number"));
const operator = prompt("Enter Operator");
console.log(Calculator(a, b, operator));

const Marks = (n) => {
  if (isNaN(a) && isNaN(b)) {
    return "Invalid";
  } else if (n1 <= 0 || n1 >= 100) {
    console.log("number must be in 0 to 100");
  } else if (n1 >= 90 && n1 <= 100) {
    console.log("Grade A+");
  } else if (n1 >= 80) {
    console.log("Grade A");
  } else if (n1 >= 70) {
    console.log("Grade B+");
  } else if (n1 >= 60) {
    console.log("Grade B");
  } else {
    console.log("Fail");
  }
};
const n = prompt("Enter Number");
console.log(Marks(n));

