$(document).ready(function (){

  // <!-- On Page Load Show Trending gifs -->
  var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC&limit=100";

  $.ajax({
    url: queryURL,
    method: 'GET'
  }).done(function(response) {
    console.log(response);
    for (var i = 0; i < 1000; i++) {

      var gifImg = response.data[i].images.fixed_height.url;
      var newGif = $("<img>").addClass("jiffy").attr("src", gifImg);

      // if gif is unavilable use our own image
      if (gifImg === undefined ){
          gifImg = "./images/gifunavailable.gif";}
     
    // show new image on the page
      $('.jiffyResults').append(newGif);

    }

  });


  



    function headerLinkftn(keyword){
      // Empty the Jiffy Results Div
      $(".jiffyResults").empty();

      var headerLinks = ["reactions", "entertainment", "sports", "stickers", "artists", "memes"];
      
      var keyword = $(this).text();

  
      // Ajax Call & query URL using the user input
      var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + keyword + "&api_key=dc6zaTOxFJmzC&limit=100";
      console.log("You clicked ", keyword)
      console.log(queryURL);
  
  $.ajax({
    url: queryURL,
    method: 'GET'
  }).done(function(response) {
    console.log(response);
  
    // run through all the results, get the image and save in a variable 
    for (var i = 0; i < 1000; i++) {
  
      var gifImg = response.data[i].images.fixed_height.url;
  
      var newGif = $("<img>").addClass("jiffy").attr("src", gifImg)
      
      $(".jiffyResults").append(newGif)
  
    }
  
  
  })
      
    }


    
// When user clicks on a header Link run the header Link function
    $("#header-links li").on("click", headerLinkftn)
    





function findgif(keyword) {

  // Empty the Jiffy Results Div
    $(".jiffyResults").empty();
     
  // Saving the user input in a variable called keyword
  var keyword = $("#search").val();
  
    // Ajax Call & query URL using the user input
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + keyword + "&api_key=dc6zaTOxFJmzC&limit=100";
    console.log(queryURL);

$.ajax({
  url: queryURL,
  method: 'GET'
}).done(function(response) {
  console.log(response);
  
  // run through all the results, get the image and save in a variable 
  for (var i = 0; i < 1000; i++) {

    // // if no gifs found Alert a message
    // if (response.data = []){
    //   gifImg = "./images/notfound.gif";
    //   alert("No gifs found");
    //   // if gif is unavilable use our own image
    // } else if (gifImg === undefined){
    //   gifImg = "./images/gifunavailable.gif";
    // }
    
    

    
    var gifImg = response.data[i].images.fixed_height.url;
    var newGif = $("<img>").addClass("jiffy").attr("src", gifImg)
    
    $(".jiffyResults").append(newGif)

  }


})
}


// When user clicks on submit run the findgif function
$("#findgif").on("click", findgif);


// Back to top
$('.a.top').click(function () {
  $(document.body).animate({scrollTop: 0}, 800);
  return false;
});



})