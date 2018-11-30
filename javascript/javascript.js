$(document).ready(function () {

    // Array of 5 dogs to search for 
    var dogType = ["labrador", "pug", "golden retriever", "husky", "german sheperd"];

    // Function for dumping the JSON content for each button into the div
    function displayDogInfo() {

        var dog = $(this).attr("data-name");

        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + dog + "&api_key=dc6zaTOxFJmzC&limit=10";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            console.log(queryURL);
            // Constructing HTML containing the dog gif & rating
            var results = response.data;

            for (i = 0; i < results.length; i++) {
                //Display gif rating
                var p = $("<p>").text("Rating:" + results[i].rating);

                var dogDiv = $("<div>");

                var dogImage = $("<img>");
                dogImage.addClass("pictures");
                dogImage.attr("src", results[i].images.fixed_height_still.url);
                dogImage.attr("data-still", results[i].images.fixed_height_still.url);
                dogImage.attr("data-animate", results[i].images.fixed_height.url);
                dogImage.attr("data-state", "still");

                //add image 
                dogDiv.append(dogImage);

                //add rating 
                dogDiv.append(p);
                //Prepend dogDiv to the HTMLpage in the "gifs area"
                $("#gifs").prepend(dogDiv);
            }

        });

    }


    // Function for displaying dog data
    function renderButtons() {

        // Deleting the buttons prior to adding new buttons
        $("#buttons-view").empty();

        // Looping through the array of dog types
        for (var i = 0; i < dogType.length; i++) {

            // Then dynamically generating buttons for each dog type in the array, create (<button></button>)
            var a = $("<button>");

            // Adding a dog type to our button
            a.addClass("dogs");

            // Adding a data-attribute
            a.attr("data-name", dogType[i]);

            // Providing the initial button text
            a.text(dogType[i]);

            // Adding the button to the buttons-view div
            $("#buttons-view").append(a);
        }
    }


    // This function adds dog type button to screen
    $("#add-dog").on("click", function (event) {
        event.preventDefault();

        // This line grabs the input from the textbox
        var dog = $("#dog-input").val().trim();

        // Adding the dog from the textbox to our array
        dogType.push(dog);
        console.log("dogType added:" + dogType);

        //Calling renderButtons which handles the processing of our movie array
        renderButtons();
    });

    

    //$("#gifs").on("click", function () {

    function startGif () {
        var state = $(this).attr("data-state");
        console.log(state);
        
        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        }
        if (state === "animate") {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        }
    };

    $(document).on("click", ".dogs", displayDogInfo);
    $(document).on("click", ".pictures", startGif);

// Calling the renderButtons function to display the initial buttons
    renderButtons();
});