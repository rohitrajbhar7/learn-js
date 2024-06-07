for (let index = 0; index <= 10; index++) {
    const element = index
    console.log(element);    
}

for (let index = 0; index <= 10; index++) {
    const element = index
    if(element==7){
        console.log(`${element} detected hence thala for a reason`);
    }    
}

// nesting loop 

// the working of code 
// for (let i = 0; i <= 10; i++) {
//     console.log(`outer loop ${i}`);
//     for (let j = 0; j < 10; j++) {
//         console.log(`outer loop ${i} and inner loop ${j}`);
        
//     }
    
// }


// printing the table from 1 to 10
// for(let i=1; i<=10; i++){
//     console.log(`table of ${i}`)
//     for(let j=1; j<=10;j++){
//         console.log(`${i} * ${j} = ${i*j}`)
//     }
// }


// using loop for string array 
let arr=["ironman", "hawkeye","thor"]
console.log(arr.length)
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}