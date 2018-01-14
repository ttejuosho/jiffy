$(document).ready(function (){


    $("#findgif").on("click", function(){
        var keyword = $("#search").val();
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
    
    });


    })





})