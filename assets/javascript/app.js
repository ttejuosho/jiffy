$(document).ready(function (){

    // Materialize Side BAr function
    $(".button-collapse").sideNav();

  // <!-- On Page Load Show Trending gifs -->
  var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC&limit=1000";

  $.ajax({
    url: queryURL,
    method: 'GET'
  }).done(function(response) {
    // console.log(response);
    for (var i = 0; i < 1000; i++) {

      var gifImgOnLoad = response.data[i].images.fixed_height.url;
      var newGifOnLoad = $("<img>").addClass("jiffy").attr("src", gifImgOnLoad);

      // if gif is unavilable use our own image
      if (gifImgOnLoad === undefined ){
          gifImgOnLoad = "./images/gifunavailable.gif";}
     
    // show new image on the page
      $('.jiffyResults').append(newGifOnLoad);

    }

  });


  



    function headerLinkftn(keyword){
      // Empty the Jiffy Results Div
      $(".jiffyResults").empty();

      var headerLinks = ["reactions", "entertainment", "sports", "stickers", "artists", "memes"];
      
      var keyword = $(this).text();

  
      // Ajax Call & query URL using the user input
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + keyword + "&api_key=dc6zaTOxFJmzC&limit=1000";
    //   console.log("You clicked ", keyword)
    //   console.log(queryURL);
  
  $.ajax({
    url: queryURL,
    method: 'GET'
  }).done(function(response) {
    // console.log(response);
  
    // run through all the results, get the image and save in a variable 
    for (var i = 0; i < 1000; i++) {
  
      var gifImg = response.data[i].images.fixed_height.url;
  
      var newGif = $("<img>").addClass("jiffy").attr("src", gifImg)
      
      $(".jiffyResults").append(newGif)
  
    }
  })
      
    }


    
// When user clicks on a header Link run the header Link function
    $(".header-links").on("click", headerLinkftn)
    




// This function gets the gifs and sends them to the DOM
function findgif(keyword) {

  // Empty the Jiffy Results Div
    $(".jiffyResults").empty();
     
  // Saving the user input in a variable called keyword
  var keyword = $("#search").val();
  
    // Ajax Call & query URL using the user input
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + keyword + "&api_key=dc6zaTOxFJmzC&limit=1000";
    // console.log(queryURL);

$.ajax({
  url: queryURL,
  method: 'GET'
}).done(function(response) {
//   console.log(response);

    var gifImg;
    // if no gifs found Alert a message
    if (response.data.length === 0){
        var notFound = "https://i.makeagif.com/media/11-04-2015/mfnzwt.gif"
        gifImg = $("<img>").attr("src", notFound);
        
        $(".jiffyResults").append(gifImg); 
    }


  // run through all the results, get the image and save in a variable 
  for (var i = 0; i < 1000; i++) {

// To make gifs pause and Play us lines 111 - 119 to define gifImg then 137 - 149
    // var still = response.data[i].images.fixed_height_still.url;
    // var animated = response.data[i].images.fixed_height.url;

    // var gifImg = $("<img>");
    // gifImg.addClass("jiffy");
    // gifImg.attr("src", still)
    // gifImg.attr("data-still", still);
    // gifImg.attr("data-animate", animated);
    // gifImg.attr("data-state", "still");
  
    // Create the image variable and point to src from the data Object
    var gifImg = $("<img>");
    gifImg.addClass("jiffy")
    gifImg.attr("src", response.data[i].images.fixed_height.url);

    $(".jiffyResults").append(gifImg);
    

  }

})
}


// Pause & Play Gifs Activation
// $(document).on("click", ".jiffy", function() {

//   var state = $(this).attr("data-state");

//   if (state === "still") {
//     $(this).attr("src", $(this).attr("data-animate"));
//     $(this).attr("data-state", "animate");
//   }
//   else {
//     $(this).attr("src", $(this).attr("data-still"));
//     $(this).attr("data-state", "still");
//   }
// });

// When user clicks on submit run the findgif function
$("#findgif").on("click", findgif);


// Back to top icon
$('.a.top').click(function () {
  $(document.body).animate({scrollTop: 0}, 800);
  return false;
});



})