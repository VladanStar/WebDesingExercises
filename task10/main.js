$(document).ready(function ($) {
  $("#search-btn").click(function (e) {
    e.preventDefault();
    $(".search-wrapper").show();
  });

  $("#close-search").click(function (e) {
    e.preventDefault();
    $(".search-wrapper").hide();
  });
});
