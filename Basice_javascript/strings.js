const name = "Rohit"
const surname = "Rajbhar"
console.log(name+" "+surname);

// interpolation
console.log(`my name is ${name} and my surname is ${surname}`)

// another way of creating string
 const GameName = new String("Kirka") // string is an object stored in form of keys and values 
 console.log(GameName[2]) // accessing by key or indexing form


//  some function of string
console.log(GameName.toUpperCase())// convert the string in upper case
console.log(GameName.toLowerCase())// convert the string in lower case
console.log(GameName.charAt([3]))// to know the character on the specified index or key
console.log(GameName.indexOf('a'))// to know the  on the index on the specified character

const newString = GameName.substring(0,3)
console.log(newString)// to create a substring from the existing string

console.log(GameName.slice(-2,-5))// to know the character on the specified index or key

const user = "     Rohit      "
console.log(user)
console.log(user.trim()) // trim function just trims the unwanted space bars
console.log(user.replace(" ", "_")) // it replaces the first count of specified in function
console.log(user.includes('h'))// it checks whether the specified character is in the given string or not
console.log(user.split('h'))// it split the string from the specified value and does not include that value