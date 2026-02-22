const accountId = 144553
let accountEmail = "salam@google.com"
var accountPassword = "12345"
accountCity = "Karachi"
let accountState;

// accountId = 4 // Not Allowed

accountEmail = "salam@hc.com"

accountPassword = "1234567890"

accountCity = "Lahore"


console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
Note:
Please don't use var 
because of issue in block scope and functional scope
*/
