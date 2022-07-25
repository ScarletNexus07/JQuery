$(".firstbtn").click(function () {
  $(".header").addClass("stylise");
  console.log("class added");
});
$(".secondbtn").click(function () {
  $(".header").removeClass("stylise");
});
$(document).keypress(function (event) {
  $("h1").text(event.key);
});
//function
