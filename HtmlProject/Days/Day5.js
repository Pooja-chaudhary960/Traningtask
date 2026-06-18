const Employees=[
    {
        username:"Ram",
        address:"Kathmandu",
        Profession:"Frontend Developer",
        gender:"Male"
        
    },
    {
        username:"Hari",
        address:"Lalitpur",
        Profession:"Backend Developer",
        gender:"Male"
    },
    {
        username:"sita",
        address:"Bhaktapur",
        Profession:"Manager",
        gender:"Female"
    },
    {
        username:"Rita",
        address:"Kathmandu",
        Profession:"HR",
        gender:"Female"
    }
]
console.log(Employees);
let mapData =Employees.map((item)=>`my username is ${item.username} and address ${item.address}`)
console.log(mapData.join("\n"))

const maleemployee = Employees.filter(Employees=>Employees.gender==="Male")
console.log(maleemployee);

//animal name lifeSpan type 

const animal=[
    {
        name:"Dog",
        lifespan:"10-15 years",
        type:"Mammal"
    },
      {
        name:"Cat",
        lifespan:"5-10 years",
        type:"Mammal"
    },
      {
        name:"Whale",
        lifespan:"10-15 years",
        type:"Fish"
    },
      {
        name:"Shark",
        lifespan:"10-15 years",
        type:"Fish"
    },
      {
        name:"Crocodile",
        lifespan:"10-20 years",
        type:"Reptile"
    },
      {
        name:"Snake",
        lifespan:"15-20 years",
        type:"Reptile"
    },
]
//console.log(animal);
const animalData = animal.map((item)=>`Animal name is ${item.name} and lifespan is ${item.lifespan} and type is ${item.type}`)
console.log(animalData.join("\n"));

const reptileanimal = animal.filter(animal=>animal.type==="Reptile")
console.log(reptileanimal);
const number=[1,2,4,5,6]

const addData = number.reduce((acc,num)=>acc+num)
console.log(addData)

const fruits = ["Mango", "Banana", "Orange","Kiwi"]
//Reverse(): Reverse the value in array
//const rev=fruits.reverse();
//console.log(rev);

//shift()
//console.log(fruits.shift());

// The slice() method selects from a given start, up to a (not inclusive) given end.
console.log(fruits.slice(1,3));

//split(): split() is a string method used to convert a string into an array by splitting it at a specified separator.
const Introduction="My name is Gita."
const text=Introduction.split(" ");
console.log(text);

/*
find() is an array method used to find the first element in an array that satisfies a given condition.

If a matching element is found → it returns that element.
If no match is found → it returns undefined.
 */

const numbers = [10,15,20,30]
const rest= numbers.find(num=>num>5)
console.log(rest);

let text1="";
fruits.forEach(myfunction)
function myfunction(item, index){
  text1 += index + ": " + item + "\n"; 
}
console.log(text1);

//Math.ceil(): Round Number around nearest integer
let a= Math.ceil(1.6);
console.log(a);

//Math.floor() method round a number down to the nearest integer
let b = Math.floor(1.3);
console.log(b);





