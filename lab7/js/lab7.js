// index.js - Creating functions
// Author: Hanna Nunnelley & Melody Caudill
// Date: 4 May 2023

//functions

function sortUserName() {
    var userName = window.prompt("Please input username to be sorted.");
    console.log("Username = ", userName)
    
    var nameArray = userName.split('');
    console.log("nameArray = ", nameArray);
    
    var nameArraySort = nameArray.sort();
    console.log("nameArraySort = ", nameArraySort);
    
    var nameSorted = nameArraySort.join('');
    console.log("nameSorted = ", nameSorted);
    
    return nameSorted;
}

//output
document.writeln("Your name is now fixed: ",
    sortUserName(), "<br>");