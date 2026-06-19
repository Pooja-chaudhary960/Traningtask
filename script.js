//import number1, { number } from "./script1.js";
//import number1 from "./script1.js";
import {res} from "./script1.js";
console.log(res)
//console.log(number)
//number1()
//console.log(number1(5,3));

//const a = prompt("enter your number")
//console.log(a)

//JavaScript Arithmetic Operators
//let n1 = prompt("Enter first number");
//let n2 = prompt("Enter second number");
// parseInt() is a JavaScript function that converts a string into an integer (whole number).
//Number(): Convert string into Number
//console.log(typeof n1)
//let result1=(n1+n2);
//let n1 = Number(prompt("Enter first number"));
//let n2 = Number(prompt("Enter Second number"));
//let n3 = Number(prompt("Enter Third number"));
//let result1=(n1+n2);
//let result2=(n1-n2);
//let result3=(n1*n2);
//let result4=(n1/n2);
//let result5=(n1%n2);
//n1++;
//n1--;
//console.log(n1);

// Logical Assignment Operator
//1.And(&&)
/*if(n1===n2 && n2===n3){
    console.log("Value is True");
}else{
    console.log("Value is false");
}
*/

/*//2. OR(||) 
if(n1===n2 || n2===n3)
{
    console.log("True");

}
else{
    console.log("False");
}*/

/*if(isNaN(n1))
{
    console.log("Invalid Number");
}
else if(n1<=0 || n1>=100){
    console.log("number must be in 0 to 100");
}
else if (n1 >= 90 && n1 <= 100) {
    console.log("Grade A+");
}
else if (n1 >= 80) {
    console.log("Grade A");
}
else if (n1 >= 70) {
    console.log("Grade B+");
}
else if(n1>=60){
    console.log("Grade B");
}else{
    console.log("Fail");
}*/

// let username="hari"
// let password="12345678"

// //Take input from user
// let userNameInput=prompt("Enter UserName");
// let passwordInput=prompt("Enter password");

// // Check Login
// if(userNameInput===username && passwordInput===password){
//     alert("Login Successful.");
// }else{
//     alert("Invalid Username and Password");
// } 

/*//Ternary operator
let num=Number(prompt("Enter number1"));

let res=(num>=18)?"Eligible for vote":"Not Eligible for vote";
console.log(res);
// */
// const user ={
//     name:"hari",
//     age:56
// }
// const {name, age}=user
// // console.log(name)
// const add1 =()=>{
//     console.log(3+4)
// }
// add1()
// const add = (a,b)=>{
//     return a+b
// }
// const calculate =async()=>{
// const total = await add(3,4)
// console.log(total)
// }
// calculate()
// // console.log("this is data")
// const ptag = document.querySelector("#inner")
// console.log(ptag)
// ptag.innerHTML="this is js"
// ptag.style.color= "red"


const text = document.querySelector("#inner")
console.log(text);
text.innerHTML= `${res}`
text.style.color="blue";

const subtract = (a, b) => {
    return a - b;
};

const result = async () => {
    let value = await subtract(5, 2);
    console.log(value);
};
result();
console.log("This is a code");






































