// index.js - JSON and APIs
// Author: Hanna Nunnelley & Melody Caudill
// Date: 6 June 2023

var url = "https://xkcd.com/info.0.json";

$.ajax({
  url: url,
  method: 'GET',
  success: function(comicObj) {
    
    var sectionTitle = comicObj.title;
    var imageSrc = comicObj.img;
    var imageAlt = comicObj.alt;

    
    var section = $('<section>').appendTo('body');
    $('<h2>').text(sectionTitle).appendTo(section);

   
    $('<img>').attr({
      src: imageSrc,
      alt: imageAlt,
      title: imageAlt
    }).appendTo(section);
  },
  
});









