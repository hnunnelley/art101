// index.js - Libraries and jQuery
// Author: Hanna Nunnelley & Melody Caudill
// Date: 18 May 2023


$(".minor-section").append("<button class='btn btn-secondary highlight-button'>Toggle Highlight</button>");



$(".highlight-button").click(function(){
  $(this).parent().toggleClass("special");
})

$("#party-toggle button").click(function(){

  if ($("body").hasClass("party")) {
    $("body").removeClass("party");
    $("#party-toggle button").html("Party");
  }
  else {
    $("body").addClass("party");
    $("#party-toggle button").html("Business");
  }
})






  






