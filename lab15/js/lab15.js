// index.js - Javascript for the Web
// Author: Hanna Nunnelley & Melody Caudill
// Date: 31 May 2023



function getAdvice() {
	console.log("Clicked!");
  $.ajax({
    url: "https://api.adviceslip.com/advice",
    type: "GET",
    
    data: {
    advice: "",
    slip: {},
    id: "",
        },
    
    success:function(data){
        var advice = data.advice;
        $("output").html(advice)
        
    }
   
  })
}
//var advice = data.advice;
//.done(function(advice) {
// console.log(data);
//console.log(advice);
//$("#output").html(advice);
//})
//}

$("button").click(getAdvice);
