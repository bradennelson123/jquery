jQuery(document).ready(function() {
  jQuery("h1").click(function() {
    alert("This is a heading.");
  });

  jQuery("p").click(function() {
    alert("This is a paragraph.");
  });

  jQuery("img").click(function() {
    alert("This is an image.");
  });
});

$(document).ready(function() {
  $(".clickable").click(function(){ 
  $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
  });
});

$(document).ready (function() {
  $("h3").click(function(){
    $("h3").fadeToggle();
  } );

});

