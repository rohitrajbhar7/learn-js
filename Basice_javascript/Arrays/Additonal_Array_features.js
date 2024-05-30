// arrays are a special type of object. an array is a data structure that holds a collection of items.
//  Arrays can hold mixed data types.
const marvel =[ "Ironman", "Thor", "Captain America"]
const dc = ["Batman", "Superman" , "Flash"]

// push function in array 
//marvel.push(dc) // here one array is nested into another array , as appears as single array
//console.log(marvel)// dc array is nested into the marvel array , behaves as of the single array

// concat function in array 
const all_heroes=marvel.concat(dc) // concat method used to concatinate or combine two arrays
// every array is as single element
console.log(all_heroes)


// Spreading method
//              spreading is another method to combine the two arrays , similar to the concatination 
//              can be concatinate more than two arrays
const The_Boys= ["Home Lander", "Speed", "Billy Butcher"]
const Total_Heroes = [...marvel,...dc,...The_Boys]
console.log(Total_Heroes)


const arr= [1,2,3,[4,5],[6,[7,8,9]]]
const new_arr=arr.flat(Infinity)// flat function creates a new array with in the all nested array in the given array(arr)
// const new_arr=arr.flat(1)  you can also provide the depth the array to create the new one 
// const new_arr=arr.flat(2)
console.log(new_arr)


console.log(Array.isArray("Rohit")) // isArray function verifies that the given value is array or not

console.log(Array.from("Rohit"))// this function create the array from the given parameter or value


const score1 = 100
const score2 = 200
const score3 = 300
console.log(Array.of(score1,score2,score3))// of function is used to convert the multiple variable into the array