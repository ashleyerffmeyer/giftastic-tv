//
$(document).ready(function () {

    renderShowButtons(tvShows, 'showButton', '#buttons-view');
    console.log("page loaded")

})
// Initial array of TV Shows
var tvShows = ['arrested development', 'unbreakable kimmy schmidt', 'cheers', 'the office', 'stranger things', 'gilmore girls', 'parks and rec', '30 rock', 'dawson\'s creek', 'the oc', 'friends', 'fraiser', 'family guy', 'will and grace', 'felicity', 'the americans', 'game of thrones', 'twilight zone', 'six feet under', 'veep']

// Function to display TV Show names on buttons
var renderShowButtons = function (tvShows, classToAdd, areaToAddTo) {

    // Deleting the buttons prior to adding new shows; this is necessary otherwise repeat buttons will be produced
    $(areaToAddTo).empty();

    //Looping through array of movies
    for (i = 0; i < tvShows.length; i++) {

        // Dynamicaly generating buttons for each movie in the array
        // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
        var a = $("<button>");

        // Adding a class
        a.addClass(classToAdd);

        // Adding a data-attribute with a value of the TV show at index i
        a.attr("data-name", tvShows[i]);

        // Providing the button's text with a value of the TV show at index i
        a.text(tvShows[i]);

        // Adding the button to the HTML
        $(areaToAddTo).append(a);
    }


}

// Event listener for all button elements
$(document).on("click", '.showButton', function () {

    // In this case, the "this" keyword refers to the button that was clicked
    var show = $(this).attr("data-name");

    //test
    console.log(show);

    // Constructing a URL to search Giphy for the name of the TV show
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        show + "&api_key=etsRIVN264F5s3wV2DrY1ddmyAZxSmDx&limit=10";

    // test
    console.log(queryURL);

    // Performing our AJAX GET request
    $.ajax({
        url: queryURL,
        method: "GET"
    })

        // After the data comes back from the API
        .then(function (response) {

            // Storing an array of results in the results variable
            var results = response.data;
            console.log(response);

            // Looping over every result item
            for (var i = 0; i < results.length; i++) {

                results = response.data;

                // Only taking action if the photo has an appropriate rating
                if (results[i].rating !== "r" && results[i].rating !== "pg-13") {

                    // Creating a div for the gif
                    var gifDiv = $("<div>");

                    // Storing the result item's rating
                    var rating = results[i].rating;

                    //test
                    console.log(rating);

                    // Creating a paragraph tag with the result item's rating
                    var p = $("<p>").text("Rating: " + rating);

                    // Creating the animated gif url
                    var animated = results[i].images.original.url;

                    // Creating the still gif url
                    var still = results[i].images.original_still.url;

                    // Creating an image tag
                    var showImage = $("<img>");

                    // Giving the image tag an src attribute of a proprty pulled off the
                    // result item
                    showImage.attr("src", still);
                    showImage.attr("data-still", still);
                    showImage.attr("data-animated", animated)
                    showImage.attr("data-state", "still");
                    showImage.addClass("searchImage");

                    //test
                    console.log(show);

                    // Appending the paragraph and personImage we created to the "gifDiv" div we created
                    gifDiv.append(p);
                    gifDiv.append(showImage);

                    // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
                    $("#gifs-appear-here").prepend(gifDiv);
                }
            }

        });
});

// ----------------------------------------------------------------
// CLICK HANDLERS
// ----------------------------------------------------------------

// When click on gif with class .searchImage, perform the following actions...
$(document).on("click", ".searchImage", function () {

    // Creating a variable state
    var state = $(this).attr('data-state');

    // If/else statement to determine which url to display and change the data-state
    if (state === 'still') {
        $(this).attr('src', $(this).data('animated'));
        $(this).attr('data-state', 'animated');
    }
    else {
        $(this).attr('src', $(this).data('still'));
        $(this).attr('data-state', 'still');
    }
});

// This function handles events where one button is clicked
$("#add-show").on("click", function (event) {
    event.preventDefault();

    // This line grabs the input from the textbox
    var newShow = $("#show-input").eq(0).val();

    // Adding the show from the textbox to our array
    tvShows.push(newShow);

    // test
    console.log(tvShows);

    // Calling renderShowButtons function which handles the processing of our movie array
    renderShowButtons(tvShows, 'showButton', '#buttons-view');

    //
    return false;
});

