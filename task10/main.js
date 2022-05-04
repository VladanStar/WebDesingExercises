$(document).ready(function ($) {

  setTimeout(function(){
  $(".loader-wrapper").fadeOut();}, 1000)

  $("#search-btn").click(function (e) {
    e.preventDefault();
    $(".search-wrapper").show();
  });

  $("#close-search").click(function (e) {
    e.preventDefault();
    $(".search-wrapper").hide();
  });
});

$("#hamburger-btn").click(function(){
  $("nav ul").slideDown();
})

$(window).scroll(function(){
if($(window).scrollTop()>300){
  $("nav").addClass('fixed-nav')
}
else {
  $("nav").removeClass('fixed-nav')
}
})


