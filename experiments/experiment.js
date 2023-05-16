

function sortMe(str){
    return str.split('').sort().join();
}


var buttonEl = document.getElementById("my-button");


buttonEl.addEventListener("click", function(){
    var inputEl = document.getElementById("getit").value;
   var name = prompt("What is your name?");
   var nameStr = "Hello, " + sortMe(name);

   var helloEl = document.getElementById("hello-world");
   helloEl.innerHTML = nameStr;

})
