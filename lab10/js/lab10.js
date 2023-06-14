// index.js - Javascript Events and Forms
// Author: Hanna Nunnelley & Melody Caudill
// Date: 16 May 2023

//function sortStuff(str) {
	//return str.split('').sort().join('');
//}

//var buttonEl  = document.getElementById("my-button");
// Create an event handler within the JS file that listens for a button click.
//buttonEl.addEventListener("click", function(){
	//console.log("whoop");
   
  
  //var name = document.getElementById("getit").value;
  //var nameStr = "Hello, " + sortStuff(name);
  
  //var helloEl = document.getElementById("hello-world");
  //helloEl.innerHTML = nameStr;
//})



// index.js - Libraries and jQuery
// Author: Hanna Nunnelley & Melody Caudill
// Date: 18 May 2023


//$("#minor-section").append("<button id='my-button'>press me</button");

$(document).ready(function() {
    var button = $("<button>").text("press me");
    button.appendTo("#minor-section");
  });
  






//.click(function())