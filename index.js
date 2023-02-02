var customerName = 'bob';


function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
}
//.toUpperCase returns a NEW STRING, so we must set it back to customerName

function setBestCustomer(){
    bestCustomer = "not bob";
}

function overwriteBestCustomer(){
    bestCustomer = "maybe bob";
}

const leastFavoriteCustomer = "ben"
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = "always ben"
}
