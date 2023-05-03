// index.js - Creating arrays and objects in java
// Author: Hanna Nunnelley
// Date: 2 May 2023

// Variables
var myTransport = ["bus", "walk", "bike", "carpool"];

// Objects
var myMainRide = {
  make: "Honda",
  model: "Civic",
  color: "grey",
  year: 2009,
  age: function() {
    return 2023 - this.year
  }
}

//outputs
document.writeln("Alternative transportation: ", myTransport, "<br>");
document.writeln("My main transportation: <pre>",
    JSON.stringify(myMainRide, null, "<pre>"));


