//
$(document).ready(function () {

    //Initial array of TV Shows
    var tvShows = ['Cheers', 'The Office', 'Stranger Things', 'Gilmore Girls', 'Parks and Rec', '30 Rock', 'Dawson\'s Creek', 'The OC', 'Friends', 'Fraiser', 'Family Guy', 'Will and Grace', 'Felicity', 'The Americans', 'Game of Thrones', 'Twilight Zone', 'Six Feet Under', 'Veep']

    //Function to display TV Show names on buttons
    var renderShowButtons = function () {

        //Looping through array of movies
        for (i = 0; i < tvShows.length; i++) {

            // Then dynamicaly generating buttons for each movie in the array.
            // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
            var a = $("<button>");

            // Adding a class
            a.addClass("show");

            // Adding a data-attribute with a value of the TV show at index i
            a.attr("data-name", tvShows[i]);

            // Providing the button's text with a value of the TV show at index i
            a.text(tvShows[i]);

            // Adding the button to the HTML
            $("#buttons-view").append(a);
        }
    }
    renderShowButtons();

    // Event listener for all button elements
    $("button").on("click", function () {

        // In this case, the "this" keyword refers to the button that was clicked
        var show = $(this).attr("data-name");

        //test
        console.log(show);

        // Constructing a URL to search Giphy for the name of the TV show
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            show + "&api_key=etsRIVN264F5s3wV2DrY1ddmyAZxSmDx&limit=10";

        //test
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

                        // Creating an image tag
                        var showImage = $("<img>");

                        // Giving the image tag an src attribute of a proprty pulled off the
                        // result item
                        showImage.attr("src", results[i].images.original.url);
                        console.log(results[i].images.original);

                        // Appending the paragraph and personImage we created to the "gifDiv" div we created
                        gifDiv.append(p);
                        gifDiv.append(showImage);

                        // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
                        $("#gifs-appear-here").prepend(gifDiv);
                    }
                }

            });
    });




});
