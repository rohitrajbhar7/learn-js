// The if statement in JavaScript is a fundamental control structure used to execute a block of code based on a specified condition. If the condition evaluates to true, the code inside the if block is executed; otherwise, the code is skipped.
const user = true;
if(user){
    console.log("user exist");
}

// comparison operators
// >(greater), <(smaller), =(assignment), <=(smaller than equal to), >=(greater than equal to), == (equal to operator, it checks the values whether the values are equal or not , datatypes may be deffer)
if(2=='2'){
    console.log("these are equal values");
}
// ===(strictly equal values)
if(2==='2'){
    console.log("these values are not equal");
}


// if else condition
if(2==3){
    console.log("these values are equal")
}else{
    console.log("these values are not equal");
}

// scope of if statement 
if(2==2){
    const value= "correct"
    console.log(`this value is ${value}`);
}
// console.log(`${value}`); the scope for the variable inside the if statement if local or you cannot use that variable outside the if scope


// short hand notation for if statement 
if(3==3) console.log("3=3"), console.log("3==3");


// else if = executing multiple statement 

let price= 500;
if(price>500){
    console.log("price is greater than 500")
}
else if(price==500){
    console.log("price is 500");
}else{
    console.log("price is less than 500");
}