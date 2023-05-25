// index.js - Conditionals
// Author: Hanna Nunnelley & Melody Caudill
// Date: 22 May 2023

function sortingHat(str) {
    len = str.length; 
    mod = len % 4; 
    if (mod == 0) {
        return "Gryffindor"
    }
    else if (mod == 1) {
        return "Ravenclaw"
    }
    else if (mod == 2) {
        return "Slytherin"
    }
    else if (mod == 3) {
        return "Hufflepuff"
    }
}

// given a number, return a Hogwart's houses
//
function getHouse(num){
//   // get the remainer divided by 4 of the length
   var remainder = num % 4;
//   // create an if else to show house
   if (remainder == 0) {
     var str = "Gryffindor";
   } else if (remainder == 1) {
    var str = "Ravenclaw";
   } else if (remainder == 2) {
     var str = "Hufflepuff";
   } else if (remainder == 3) {
     var str = "Slytherin";
   }
   return str;
 }

// attach click handler to submit button
$("#button").click(function(){
//   // get the value in the #input text box, asign to a varaiable name
   var name = $("#input").val()
   $("#output").append("<p>" + name);
//   // get the length of the name
   var nameLength = name.length;
   console.log(nameLength);
//   // get the house
   var house = getHouse(nameLength);
   console.log(house);
//   // add house to output div
   $("#output").html("<h1>" + house + "</h1>");
 })
