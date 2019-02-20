# dog-giphy
This application creates dog breed buttons to select from and display a dynamic web page of 10 dog breed gifs using the GIPHY API. 
Users can also create a new dog breed button to select 10 gifs from. This is built with a user input box using a form, then calling a function to re-make the buttons appending the new button to the end. The gifs will be still until you click on each one to animate them.

I used JavaScript and jQuery to dynamically update the HTML using the q (query) parameter to search by, limit to limit the display to 10 gifs at a time (default is 25). Under every gif, the rating (PG, G, so on) is displayed (from the GIPHY API).

The GIPHY API documentation is at: [Giphy API](https://developers.giphy.com/docs/) and requires an API key (you can get via a GIPHY free account).

This application can be run by clicking on:
https://lsalazar2.github.io/dog-giphy/

