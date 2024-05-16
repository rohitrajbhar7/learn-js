// singleton object declaration

const student = new Object();
//  const student ={}
student.Id= 4 
student.name = "Rohit"
student.class = 10
//console.log(student)


// nesting objects
const obj1 ={
    name:{
        fullname:{
            First_name:"Rohit",
            Middle_name:"Kumar",
            Last_name:"Rajbhar"
        }
    }
}
//console.log(obj1.name.fullname)


// combining the objects

const A={A1:"a" , A2:"a"}
const B= {B1:"b", B2:"b"}
const C ={A,B}// here in C object the A is one key (inside A all elements are value) and B is another key(inside B all elements are value) 
console.log(C)

// use of assign function
const D= Object.assign(A,B);
// const D= Object.assign({},A,B); // it is another way to combine the objects using assign function
console.log("D",D)//here in D object all the elements in A and all the elements in B are the keys and values in D



// use of spreading function to combine the objects
const E = {...A,...B};
console.log("E",E)