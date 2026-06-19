
//export const number = 6
//let a=Number(prompt("Enter first Number"));
//let b=Number(prompt("Enter second Number"));
/*let a,b;
let sum;


const number1=(a,b)=>{
   return{
    sum : a+b
   }
}*/
//export default number1;


const person=[
    {
        name:"Punam",
        age:20,
        Profession:"HR",
        gender:"Female"
    },
    {
        name:"Pustika",
        age:23,
        Profession:"Designer",
        gender:"Female"
    },
     {
        name:"Rahul",
        age:24,
        Profession:"Developer",
        gender:"male"
    },
     {
        name:"Rohan",
        age:22,
        Profession:"Manager",
        gender:"male"
    }
]
const mapPerson= person.map((items)=>`My name is ${items.name} and age is ${items.age} and Profession is ${items.Profession}`)
export const res=(mapPerson.join("<br>"));

// const output=document.querySelector("");



// const filtPerson=person.filter(person=>person.gender==="Female")
// console.log(filtPerson);
// export {res, filtPerson};








