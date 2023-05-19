// WRITE YOUR CODE BELOW THIS LINE

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
console.log(favMovies)

for (const movie of favMovies) {
	console.log(movie.title)
	
}

for (let i = 0; i < favMovies.length; i++) {
	let movie = favMovies[i];
	console.log(movie.title)
	
}

let totalRate = 0
for (const movie of favMovies) {
	totalRate += movie.rating
	
}
let averageRate = totalRate / favMovies.length
console.log(averageRate)	

let newestMovie = favMovies[0]
for (const movie of favMovies) {
	if (movie.year > newestMovie.year){
		newestMovie = movie
	}
}
console.log(newestMovie)

let starsByMovies = ""
for (const movie of favMovies) {
	starsByMovies += movie.title + "\n\n"
	for (const stars of movie.stars) {
		starsByMovies += stars + ",\n"
		
	}
	starsByMovies += "\n_\n\n"
}
console.log(starsByMovies)




// DO NOT MODIFY THE CODE BELOW THIS LINE
let toExport;

try {
	toExport = [
		{name: "favMovies", content: favMovies, type: "array"},
		{name: "averageRate", content: averageRate, type: "number"},
		{name: "newestMovie", content: newestMovie, type: "object"},
		{name: "starsByMovies", content: starsByMovies, type: "string"}
	]
} catch (error) {
	toExport = {error: error.message}
}

export {toExport};
