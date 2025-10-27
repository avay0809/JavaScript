const accountId = 14356
let accountEmail ='abc@gmail.com'
var accountPassword ="12345"
accountCity = "Jaipur"   // its poosible dont use take variable and reserve the memory
let accountState;   // agar js mai variable declare & left it then the js take it undefine

// accountId = 2 // not allowed

accountEmail ="def@gamil.com"
accountPassword ="67890"
accountCity = "Bengaluru"

/*
prefer not to use var
because  of issue in block scope and functional scope
*/

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]) 
// this is the table formate to print something

