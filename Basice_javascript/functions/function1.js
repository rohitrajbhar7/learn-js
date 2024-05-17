function myName(){
    console.log("Rohit Rajbhar")
}
console.log(myName()) // here myName is defining the function.and () this syntax is for exacution of the function 


function add(num1 , num2){ // when you define the function then it includes parameters
    console.log(num1+num2)
}
add(3,4)// when you execute or call the function the it include arguements


// -------------return concept-------


// function subtract(numb1,numb2){
//     console.log(numb1-numb2)
// }
// const result = subtract(5,2)
// console.log("result: ",result)//this is BC you have not returned any value from the function so the result  is undefined


function subtract(numb1,numb2){
    const result= numb1-numb2
    return result;
  //  return numb1-numb2
    console.log("hello")// Any thing which is below the return function that will not execute
}
console.log(subtract(5,4))

// const result= subtract(5,4)
// console.log(result) // so by using the return function the undefined in result problem is solved



function loggedin(username){
    if (!username){
        return `Please enter the username`
    }
    
    return `${username} successfully logged in`
}
console.log(loggedin("rohit"))
// console.log(loggedin(""))
