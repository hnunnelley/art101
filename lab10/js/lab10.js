// index.js - Javascript Events and Forms
// Author: Hanna Nunnelley & Melody Caudill
// Date: 16 May 2023

function sortStuff(str) {
	return str.split('').sort().join('');
}

var buttonEl  = document.getElementById("my-button");
// Create an event handler within the JS file that listens for a button click.
buttonEl.addEventListener("click", function(){
	console.log("whoop");
   
  
  var name = document.getElementById("getit").value;
  var nameStr = "Hello, " + sortStuff(name);
  
  var helloEl = document.getElementById("hello-world");
  helloEl.innerHTML = nameStr;
})