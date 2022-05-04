$(document).ready(function ($) {

  $(".loader-wrapper").fadeOut();
  $("#search-btn").click(function (e) {
    e.preventDefault();
    $(".search-wrapper").show();
  });

  $("#close-search").click(function (e) {
    e.preventDefault();
    $(".search-wrapper").hide();
  });
});
