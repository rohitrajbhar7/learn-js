// The "nullish coalescing operator" (??) is a feature in JavaScript that provides a way to handle null and undefined values. It allows you to specify a default value to be used when the left-hand operand is null or undefined. This operator is particularly useful for dealing with optional values and providing fallbacks.
let name = null;// or undefined
let defaultName = "Anonymous";

let displayName = name ?? defaultName;  // nullish coalescing expression
console.log(displayName); 



// The ternary operator, also known as the conditional operator, is a concise way to perform conditional logic in JavaScript. It is the only operator in JavaScript that takes three operands. The ternary operator is often used as a shorthand for the if-else statement.
let age = 18;
let isAdult = (age >= 18) ? "Yes" : "No";
console.log(isAdult);
