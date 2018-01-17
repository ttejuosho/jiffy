$(document).ready(function (){

  // <!-- On Page Load Show Trending gifs -->
  var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC&limit=10";

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
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + keyword + "&api_key=dc6zaTOxFJmzC&limit=10";
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
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + keyword + "&api_key=dc6zaTOxFJmzC&limit=10";
    console.log(queryURL);

$.ajax({
  url: queryURL,
  method: 'GET'
}).done(function(response) {
  console.log(response);
  
  // run through all the results, get the image and save in a variable 
  for (var i = 0; i < 10; i++) {

    // if no gifs found Alert a message
    // if (response.data = []){
    //   gifImg = "./images/notfound.gif";
    //   alert("No gifs found"); }

    //   // if gif is unavilable use our own image
    // } else if (gifImg === undefined){
    //   gifImg = "./images/gifunavailable.gif";
    // }
    
    

    var still = response.data[i].images.fixed_height_still.url;
    var animated = response.data[i].images.fixed_height.url;
     


    var shareDiv = $('<div>').addClass('fixed-action-btn horizontal click-to-toggle');
    var sharea = $('<a>').addClass('btn-floating btn-large red');
    var sharei = $('<i>').addClass('material-icons');
    var UL = $('<ul></ul>');
    var LI0 = $('<li>');
    var LI1 = $('<li>');
    var LI2 = $('<li>');
    var LI3 = $('<li>');
    var sociala0 = $('<a>').addClass('btn-floating red');
    var sociala1 = $('<a>').addClass('btn-floating yellow-darken-1');
    var sociala2 = $('<a>').addClass('btn-floating green');
    var sociala3 = $('<a>').addClass('btn-floating blue');



    var gifImg = $("<img>");
    gifImg.addClass("jiffy");
    gifImg.attr("src", still)
    gifImg.attr("data-still", still);
    gifImg.attr("data-animate", animated);
    gifImg.attr("data-state", "still");
  
    
    shareDiv.append(sharea);
    sharea.html('<i class="material-icons">menu</i>');

    shareDiv.append(UL);
    UL.append(LI0);
    UL.append(LI1);
    UL.append(LI2);
    UL.append(LI3);
    LI0.append(sociala0);
    LI1.append(sociala1);
    LI2.append(sociala2);
    LI3.append(sociala3);
    sociala0.html('<i class="material-icons">instagram</i>');
    sociala1.html('<i class="material-icons">facebook</i>');
    sociala2.html('<i class="material-icons">twitter</i>');
    sociala3.html('<i class="material-icons">envelope</i>');


    $(".jiffyResults").append(shareDiv);
    $(".jiffyResults").append(gifImg);
    
    

  }
})
}


// Pause & Play Gifs
$(document).on("click", ".jiffy", function() {

  var state = $(this).attr("data-state");

  if (state === "still") {
    $(this).attr("src", $(this).attr("data-animate"));
    $(this).attr("data-state", "animate");
  }
  else {
    $(this).attr("src", $(this).attr("data-still"));
    $(this).attr("data-state", "still");
  }
});

// When user clicks on submit run the findgif function
$("#findgif").on("click", findgif);


// Back to top
$('.a.top').click(function () {
  $(document.body).animate({scrollTop: 0}, 800);
  return false;
});



})