// falsy values :- A falsy value is a value that translates to false when evaluated in a Boolean context.
// false ,0 (zero),-0 (negative zero),0n (BigInt zero),"" (empty string),null,undefined,NaN (Not-a-Number)
if (false) {
    console.log("This will not run");
  }
  
  if (0) {
    console.log("This will not run");
  }
  
  if (-0) {
    console.log("This will not run");
  }
  
  if (0n) {
    console.log("This will not run");
  }
  
  if ("") {
    console.log("This will not run");
  }
  
  if (null) {
    console.log("This will not run");
  }
  
  if (undefined) {
    console.log("This will not run");
  }
  
  if (NaN) {
    console.log("This will not run");
  }

  

//   A truthy value is any value that is not falsy; it translates to true when evaluated in a Boolean context.
// "0"(string), 'false' (string)," "(space),[](array),{},function(){} an empty function is also an truthy value


// to check whether the array is empty or not
const arr = []
if(arr.length===0){
    console.log("array is empty");
}

// to check whether the object is empty or not
const obj = {}
if(Object.keys(obj).length ===0){  // Object.keys will return the keys in array form and then by calculating the array element we can verify the object is empty or not
    console.log("object is empty");
}