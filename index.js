var customerName = 'bob';
const leastFavoriteCustomer = 'bill';

function upperCaseCustomerName(){
    return customerName = customerName.toUpperCase();
}

function setBestCustomer(){
    bestCustomer = 'not bob';
    return bestCustomer;
}

function overwriteBestCustomer(name){
    bestCustomer = name;
    return bestCustomer;
}

function changeLeastFavoriteCustomer(){
    return leastFavoriteCustomer = 'george';
}
