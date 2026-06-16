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
*/

//Day-3

/*for(let i=0; i<=10;i++){
    console.log(i);
}*/

// let sum=0;
// for(let i=10; i>=0; i--){
//     console.log(i);
//     sum=sum+i;
// }
// console.log(sum);
/*const number = [1,2,3,4,5,6]
const number2=[1,2,3,4,5,6,7,8]
number.push(4)
console.log(number,3,4)
number.pop()
console.log([...number,...number2])
*/

const n1=[1,2,3,4,5,6]
const n2=[7,8,9,10,11,12]
const n3=([...n1,...n2]);
let sum=0;

for(let i=0; i<n1.length; i++){
    //console.log(n1[i]);
    //console.log(n1[i]+n2[i]);
}
for(let i=0; i<n2.length; i++){
    //console.log(n2[i]);
}

for(let i=0; i<n3.length; i++){
    sum=sum+n3[i];
}
//console.log(sum);

/*1.Create a const variable for walletBalance and set it to 5000.
Create an array called cartItems containing three prices: [500, 1200, 350].
Manage the Cart (Array Operations):

2. A new item is added! Use .push() to add a price of 2000 to the cart.
Oops, that item is too expensive. Use .pop() to remove the last item.
Create a new array called recommendedItems with prices [100, 200].
combine recommendedItems and cartItems into a new array called finalCart using the Spread Operator (...).
Calculate Totals (Math & Operators):

3. Calculate the sum of the prices in finalCart (Hint: since we don't have loops yet, access them manually like finalCart[0] + finalCart[1]...).
Store this sum in a variable totalPrice.
Add a 10% tax to the logic. Update totalPrice to include the tax.
Round the totalPrice to 2 decimal places using .toFixed().
Coupon Code Handling (String Manipulation):

4. Create a variable couponCode with the messy value "   DisCOunT10   ".
Clean up the code: Remove the whitespace using .trim() and convert it to uppercase.
If the cleaned code is "DISCOUNT10", subtract 500 from the totalPrice.
Final Decision (Conditionals):

5.Write an if/else statement:
If totalPrice is less than or equal to walletBalance: Console log "Purchase Successful! New Balance: [Remaining Amount]".
Else: Console log "Insufficient Funds! You need [Missing Amount] more."
Receipt Generation (Randomness):


6. Generate a random Order ID between 1 and 100 using Math.random() and Math.floor().
Console log a receipt message using Template Literals (backticks): Order [ID] confirmed.
*/


const walletBalance = 5000;
const cartItems = [500,1200,350]
const recommendedItems= [100, 200]
let total = 0;
for(let i=0; i<cartItems.length; i++){
    total=total+cartItems[i];
}
console.log(total);
cartItems.push(2000);
console.log(cartItems);
cartItems.pop(cartItems);
console.log(cartItems);

const finalCart = ([...cartItems,...recommendedItems])
console.log(finalCart);
let totalPrice =0;
for(let i=0; i<finalCart.length; i++){
    totalPrice=totalPrice+finalCart[i];
}
console.log(totalPrice);

totalPrice= totalPrice+totalPrice*0.10;

totalPrice= totalPrice.toFixed(2);

console.log("Final Price with Tax: ",totalPrice);

const couponCode="   DisCOunT10   ";
console.log(couponCode.trim());

const cleanCode=couponCode.toUpperCase()

console.log(cleanCode);

let finalPrice;
if(couponCode==="DISCOUNT10")
{
     finalPrice=totalPrice-500;
}else{
    finalPrice=totalPrice;
}

console.log(finalPrice);

if(totalPrice<=walletBalance){
    let remainingAmount = walletBalance - totalPrice;
    console.log("Purchase Successful! New Balance: " + remainingAmount);
}else {
    let missingAmount = totalPrice - walletBalance;
    console.log("Insufficient Funds! You need " + missingAmount + " more.");
}































