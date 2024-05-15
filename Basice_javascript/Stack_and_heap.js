// there are two types of datatypes in js
// primitive - string , number , boolean , big int , null , undefined , symbol
// non-primitive - object, arrays, functions

// similarly there are two types of memory in js
// stack - contains primitive datatypes
// heap - contains non-primitive datatypes


// working of stack in js
let name = "rohit" // here there will be variable store in stack of name = rohit
let name1 = name  // here there will be another variable store in stack of name1 = name(dublicate will be created and given to the name1)
name1= "rohit rajbhar" // here the changes will be done with name1(dublicate value)
console.log(name) // it shows the original value
console.log(name1) // it shows the changes done in dublicate value


// conclusion - creates a duplicate 

// working of heap

// an object has been created user to store in heap
let user= {
    username: "rohitrajbhar7",
    useremail: "rohitrajb7524@gmail.com"
}
let user1= user; // another object created user1 which stores in heap but takes the reference of user(details)
user1.username= "hitman" // make some changes in username of user1 
console.log(user)
console.log(user1)// as per user1 uses the original content of user so the changes also reflect in user

// conclusion- do not create duplicate , changes in original one