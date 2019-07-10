# GIFtastic TV Application

A jQuery powered, TV show themed application which incorporates use of RESTful APIs, AJAX, and JSON data 

[Link to game!](https://ashleyerffmeyer.github.io/giftastic-tv/) 

## Authors
Ashley Erffmeyer, with major support from KU's Coding Boot Camp staff members:
* Ryan LaRue (Instructor)
* Jenny Dean (TA)
* Jacqueline Kolze (TA)
* Eli Vargas (TA)

## Tools Used
* RESTful APIs
* AJAX
* JSON
* JavaScript
* jQuery
* CSS
* HTML

## Prerequisites & Installations
None

Note: Added the following script lines in index.html to allow for bootstrap and jQuery functionality

```html
<!--Enabling bootstrap functionality-->
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

<!-- Importing the jQuery library -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

<!--Importing my game logic JavaScript-->
<script type="text/javascript" src="assets/javascript/game.js"></script>

<!--Importing Bootstrap JavaScript-->
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>

<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
```

## Design Notes

None

## Game Overview

### Instructions

In this application, I used the GIPHY API to make a dynamic web page that populates with TV show themed gifs. The GIPHY API is used to call the gifs and JavaScript and jQuery are used to change the HTML of the site.

When the user clicks on TV show button, the page grabs 10 static, non-animated gif images from the GIPHY API and places them on the page.

When the user clicks one of the still GIPHY images, the gif animates. If the user clicks the gif again, it stops playing.

Above every gif, its rating is displayed.

A form on the page takes a value from the user input box and adds it to the list of TV show buttons. This is achieved by a function call that takes each topic in an array of TV shows and remakes the buttons on the page.
