const num1= 54
const num = new Number(54); // it explicitly define the variable as a number
console.log(num1)
console.log(num)
console.log(num1.toString())// to convert the number into string
console.log(num1.toString().length)// to know the length of the string
console.log(num1.toFixed(2))// to get the number value in decimal value

const num2= 54.54
console.log(num2.toPrecision(5))// toprecision method shows the value of digit to show
console.log(num2.toPrecision(3))

const num3 = 1000000000
console.log(num3.toLocaleString('en-IN')); // this method is used to show the given number in specified country number standard


// ----------------maths---------------------------

console.log(Math)
console.log(Math.abs(-5)) // converts the given number in positive number
console.log(Math.round(6.53))// it gives the round off number of the given number
console.log(Math.ceil(4.5))// it give the upper value of the given number or roundoff to the upperside in number system
console.log(Math.floor(4.5))// it give the lower value of the given number or roundoff to the lowerside in number system
console.log(Math.min(2,5,2,1,9))// this function finds the minimum value 
console.log(Math.max(2,5,2,1,9))// this function finds the miximum value