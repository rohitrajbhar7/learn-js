const Arr=[1,2,3,4,5]
console.log(Arr)
//const Arr= new Array(1,2,3,4,5)

// access array by indexing
console.log(Arr[2])

// Array methods
Arr.push(6) // the value has been pushed at the end of the array
console.log(Arr)
Arr.pop() // the last value has been removed or poped from the array
console.log(Arr)

// unshift and shift
Arr.unshift(8) // the value will be added to the start of the array
console.log(Arr)
Arr.shift()// the first value will be removed from the array
console.log(Arr)



// additional feature in array 
console.log(Arr.includes(5))// verify that the given number is in array or not
console.log(Arr.indexOf(2))// tell about the index of given number in an array
//console.log(Arr.join())// this method just join or combine all the element in the array and convert them into an array



// slice and splice 
console.log(Arr.slice(1,4))// slice method just create a new sub-array within the defined range 
                        //the last range is excluded
console.log(Arr)// no changes in original array


console.log(Arr.splice(1,3))// splice method also create a substring with in the defined range
                        // the last range is included
console.log(Arr)// make changes in the original array
