// index.js - Javascript Events and Forms
// Author: Hanna Nunnelley & Melody Caudill
// Date: 16 May 2023

function sortStuff(str) {
	return str.split('').sort().join('');
}

var buttonEl  = document.getElementById("my-button");
// Create an event handler within the JS file that listens for a button click.
buttonEl.addEventListener("click", function(){
	console.log("Button pressed");
  // prompt the user to input their name with the prompt() function. 
  //var name = prompt("What is your name?");
  var name = document.getElementById("getit").value;
  var nameStr = "Hello, " + sortStuff(name);
  // change the text from ‘Hello, World!’ to ‘Hello’ + the user’s name
  var helloEl = document.getElementById("hello-world");
  helloEl.innerHTML = nameStr;
})