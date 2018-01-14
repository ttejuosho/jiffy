$(document).ready(function (){

  // <!-- On Page Load Show Trending gifs -->
  var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC&limit=1000";

  $.ajax({
    url: queryURL,
    method: 'GET'
  }).done(function(response) {
    console.log(response);

    $('.jiffyResults').endlessScroll({
      inflowPixels: 300,
      callback: function() {
        for (var i = 0; i < 1000; i++) {
        var gifImg = response.data[i].images.preview_gif.url;
        var newGif = $('.jiffyResults img:nth-last-child(5)').clone();
        $('.jiffyResults').append(newGif);
      }}
    });


  });


  


    $(".header-links").on("click", findgif)


    var keyword = $("#search").val();
    $("#findgif").on("click", findgif);



function findgif(keyword) {
    event.preventDefault();
    
    $(".jiffyResults").empty();
     
    console.log(keyword);
        
var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + keyword + "&api_key=dc6zaTOxFJmzC";

$.ajax({
  url: queryURL,
  method: 'GET'
}).done(function(response) {
  console.log(response);
  for (var i = 0; i < 25; i++) {

    var gifImg = response.data[i].images.downsized_medium.url;

    var newGif = $("<img>").addClass("jiffy").attr("src", gifImg)
    
    $(".jiffyResults").append(newGif)

  }


})
}


})