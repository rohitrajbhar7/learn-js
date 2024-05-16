// singleton
// object.create

//object leterals
const users={
    name : "Rohit",
    "fullname": "Rohit Kumar Rajbhar", // another way to specify the keys in object
    age : 18,
    location: "Uttar Pradesh",
    Email : "Rohitrajb7524@gmail.com",
    hobbies : ["Playing cricket", "Dancing","studying", "watching TV" ]
}

// Way to access the object 
console.log(users.name)
console.log(users["Email"])// there are keys and values in the objects
                            //keys datatype is string
console.log(users["fullname"])// this is the only way to access the key if the key is in double quote



// symbols
const mysym =  Symbol("key1")

const object1= {
    [mysym]: "key2"
}
console.log(object1[mysym])// accessing the symbol within the object
console.log([mysym]) // accesing the symbol 

// freeze function in objects
const object2 ={
    name: "Rohit",
    Email: "rohitrajb123@gmail.com"
}
// Object.freeze(object2)// by using the freeze function you cannot be able to make changes insite the objects
object2.Email = "Rohitrajb789@gmail.com"
console.log(object2.Email)


// declaring functionm in the objects
object2.greetings= function(){
    console.log("good morning")
}
console.log(object2.greetings())


object2.greeting= function(){
    console.log(`good morning ${this.name}`)
}
console.log(object2.greeting())