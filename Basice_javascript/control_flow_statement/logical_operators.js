//  && operator
 let login= true;
let debit_card= true;
if(login && debit_card){  // both the conditions needs to be true  for executing this if statement 
    console.log("you can purchase")
}

// || operator
let loginByGmail = true 
let loginByNumber = false
if(loginByGmail || loginByNumber){  // only condition needs to be true for executing this if statement 
    console.log("you are logged in ");
}