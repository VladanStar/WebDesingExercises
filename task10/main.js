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
