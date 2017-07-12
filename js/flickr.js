// js file for flickr feed

$(document).ready(function() {


 $('button').click(function () {
    // highlight the button
    $("button").removeClass("selected");
    $(this).addClass("selected");

    // the AJAX part
    var flickerAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    var plants = $(this).text();
    var flickrOptions = {
      tags: plants, 
      format: "json"
    };
    function displayPhotos(data) {
      var photoHTML = '<ul>';
      $.each(data.items,function(i,photo) {
        photoHTML += '<li class="grid-25 tablet-grid-50">';
        photoHTML += '<a href="' + photo.link + '" class="image">';
        photoHTML += '<img src="' + photo.media.m + '"></a></li>';
      }); // end each
      photoHTML += '</ul>';
      $('#photos').html(photoHTML);
    }
    $.getJSON(flickerAPI, flickrOptions, displayPhotos);

  }); // end click

}); // end ready