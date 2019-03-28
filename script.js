function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

$(document).ready(function(){
  $("p").hover(function(){
    $(this).css("background-color", "dimgray");
    }, function(){
    $(this).css("background-color", "lightgray");
  });
});
