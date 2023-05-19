let favMovies = [
    {
        title: "Battleship",
        year: 2012,
        rating: 5.8,
        description: "A fleet of ships is forced to do battle with an armada of unknown origins in order to discover and thwart their destructive goals.",
        directors: ["Peter Berg"],
        writers: ["Jon adn Erich Hoeber"],
        stars: ["Rihanna", "Taylor Kitsch", "Liam Neeson"],
        genres: ["action", "sci-fi"]

    },
    {
        title: "John Wick",
        year: 2014,
        rating: 7.4,
        description: "An ex-hit-man comes out of retirement to track down the gangsters that killed his dog and took his car.",
        directors: ["Chad Stahelski", "David Leitch"],
        writers: ["Derek Kolstad"],
        stars: ["Keanu Reeves", "Michael Nyqvist", "Alfie Allen"],
        genres: ["action", "crime", "thriller"]
    },
    {
        title: "The Equalizer",
        year: 2014,
        rating: 7.2,
        description: "A man who believes he has put his mysterious past behind him cannot stand idly by when he meets a young girl under the control of ultra-violent Russian gangsters.",
        directors: ["Antoine Fuqua"],
        writers: ["Richard Wenk", "Michael Sloan", "Richard Lindheim"],
        stars: ["Denzel Washington", "Marton Csokas", "Chloe Grace Mortez"],
        genres: ["action", "crime", "thriller"]
    },
    {
        title: "Olympus Has Fallen",
        year: 2013,
        rating: 6.5,
        description: "Secret Service agent Mike Banning finds himself trapped inside the White House in the wake of a terrorist attack and works with national security to rescue the President from his kidnappers.",
        directors: ["Antoine Fuqua"],
        writers: ["Katrin Benedikt", "Creighton Rothenberger"],
        stars: ["Gerard Butler", "Morgan Freeman", "Aaron Eckhart"],
        genres: ["action", "thriller"]
    }

]
console.log(favMovies[0].title)
console.log(favMovies[1].year)
console.log(favMovies[2].rating)
console.log(favMovies[3].description)

console.log("The title of the first movie is: " + favMovies[0].title)
console.log("The release year of the second movie is: " + favMovies[1].year)
console.log("The IMDB rating of the third movie is: " + favMovies[2].rating)
console.log("The short description of the fourth movie is: " + favMovies[3].description)

console.log("The lead director of the first movie is: " + favMovies[0].directors[0])
console.log("The lead writer of the second movie is: " + favMovies[1].writers[0])
console.log("The lead star of the third movie is: " + favMovies[2].stars[0])
console.log("The main genre of the fourth movie is: " + favMovies[3].genres[0])

let averageRating = (favMovies[0].rating + favMovies[1].rating + favMovies[2].rating + favMovies[3].rating) /4
console.log("The average rating is: " + averageRating)

let averageAge = (favMovies[0].year + favMovies[1].year + favMovies[2].year + favMovies[3].year) /4
console.log("The average age is: " + averageAge)


