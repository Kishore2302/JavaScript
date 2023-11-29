// Arithmetic Operators
let a = 10;
let b = 5;

console.log("Arithmetic Operators:");
console.log("Addition:", a + b); // Addition
console.log("Subtraction:", a - b); // Subtraction
console.log("Multiplication:", a * b); // Multiplication
console.log("Division:", a / b); // Division
console.log("Modulus:", a % b); // Modulus (Remainder)
console.log("Exponentiation:", a ** b); // Exponentiation

// Assignment Operators
console.log("\nAssignment Operators:");
let c = 20;
c += 5; // Equivalent to c = c + 5
console.log("Addition Assignment:", c);

let d = 10;
d -= 3; // Equivalent to d = d - 3
console.log("Subtraction Assignment:", d);

let e = 6;
e *= 4; // Equivalent to e = e * 4
console.log("Multiplication Assignment:", e);

let f = 25;
f /= 5; // Equivalent to f = f / 5
console.log("Division Assignment:", f);

// Comparison Operators
console.log("\nComparison Operators:");
let x = 10;
let y = 20;

console.log("x equals y:", x === y); // Equals
console.log("x not equals y:", x !== y); // Not Equals
console.log("x greater than y:", x > y); // Greater Than
console.log("x less than y:", x < y); // Less Than
console.log("x greater than or equal to y:", x >= y); // Greater Than or Equal To
console.log("x less than or equal to y:", x <= y); // Less Than or Equal To

// Logical Operators
console.log("\nLogical Operators:");
let p = true;
let q = false;

console.log("Logical AND:", p && q); // Logical AND
console.log("Logical OR:", p || q); // Logical OR
console.log("Logical NOT for p:", !p); // Logical NOT

// Ternary Operator
console.log("\nTernary Operator:");
let age = 20;
let isAdult = (age >= 18) ? "Adult" : "Minor";
console.log("Is the person an adult?", isAdult);
