// index.js - Anon Functions and Callbacks
// Author: Hanna Nunnelley & Melody Caudill
// Date: 8 May 2023

//functions

function hannaFunction(x){
    var results = x + 1
    return results 
}

//test function
console.log(hannaFunction(8));
console.log(hannaFunction(53));

array = [2, 34, 89, 25, 10]
console.log("My array", array);

var result = array.map(hannaFunction);
console.log("Testing the function:", result);

array.map(function(x){
    var results = x * 2
    return results;
})

console.log("multiply array:", result);




