//1 Create an empty array called inventory.
/* 2. Create a function called createProduct(name, price, quantity).
This function should return an object with those three properties.
Call this function three times to create these items and add them to your inventory array:
"Laptop", 1200, 10
"Mouse", 25, 50
"Keyboard", 100, 20
Updating Data (Accessing Constraints): */

/*3. Oh no! The "Mouse" price was wrong. Access the second item in your inventory array and update its price to 30.
Access the "Laptop" (first item) and add a new property category with the value "Electronics".
Merging Product Details (Spread Operator): */

/*
4.Create an object called extraDetails with { warranty: "2 years", color: "Silver" }.
Create a new variable updatedLaptop by merging the first item in your inventory with extraDetails using the spread operator (...).
Console log updatedLaptop to see the combined result.
The Sale Function (Arrow Functions):*/

/*5. Write an Arrow Function called calculateTotalValue.
It should accept two parameters: price and quantity.
It should return the total value (price * quantity).
Use this function to calculate the total value of the "Keyboard" stock (from your inventory) and log it.
Nested Data Challenge:*/

/*6.

Create a user object called adminUser with:
name: "Manager"
permissions: A nested object { canEdit: true, canDelete: false }
Write an if statement: If adminUser.permissions.canEdit is true, console log "Access Granted: Inventory updated."
Why this works:
Functions: They practice passing arguments (name, price) effectively.
Objects: They learn to store grouped data instead of just single variables.
Spread: Real-world use case (adding extra specs to a product).
Nested Access: Reviewing how to dig into data (user.permissions.canEdit).

*/


let inventory=[];

const createProduct=(name,price,quantity)=>{
    return {
        name:name,
        price:price,
        quantity:quantity,
    }
}
inventory.push(createProduct("Laptop",1200,10));
inventory.push(createProduct("Mouse",25,50));
inventory.push(createProduct("Keyboard",100,10));

console.log(inventory[1]);

inventory[0].price=1500;

inventory[0].category="Electronic";

console.log(inventory);


const extraDetails = {
    warranty:"2 years",
    color:"Silver",
}
const updatedLaptop = ({...inventory[0],...extraDetails})

console.log(updatedLaptop);


const calculateTotalValue=(price,quantity)=>{
        return price*quantity;
}
const keyword = inventory[2];
console.log(calculateTotalValue(keyword.price,keyword.quantity));


const adminUser={
    name:"Manager",
    permissions:{
        canEdit:true,
        canDelete:false,
    }
}
if(adminUser.permissions.canEdit===true){
    console.log("Access Granted: Inventory updated.");
}


