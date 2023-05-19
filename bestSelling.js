let bestSellingAlbums = [
    {
        artist: "Michael Jackson",
        title: "Thriller",
        year: 1982,
        genres: ["pop", "post-disco", "funk", "rock"],
        sale: 70000000,
        iLikeIt: true
    },
    {
        artist: "AC/DC",
        title: "Back in Black",
        year: 1980,
        genres: ["hard rock"],
        sale: 50000000,
        iLikeIt: true
    },
    {
        artist: "Whitney Houston",
        title: "The Bodyguard",
        year: 1992,
        genres: ["r&b", "soul", "pop", "soundtrack"],
        sale: 45000000,
        iLikeIt: true
    },
    {
        artist: "Pink Floyd",
        title: "The Dark Side of the Moon",
        year: 1973,
        genres: ["progressive rock"],
        sale: 45000000,
        iLikeIt: false
    },
    {
        artist: "Eagles",
        title: "Their Greatest Hits (1971 - 1975)",
        year: 1976,
        genres: ["country rock", "soft rock", "folk rock"],
        sale: 44000000,
        iLikeIt: false
    },
    {
        artist: "Eagles",
        title: "Hotel California",
        year: 1976,
        genres: ["soft rock"],
        sale: 42000000,
        iLikeIt: false
    },
    {
        artist: "Shania Twain",
        title: "Come On Over",
        year: 1997,
        genres: ["country", "pop"],
        sale: 40000000,
        iLikeIt: false
    },
    {
        artist: "Fleetwood Mac",
        title: "Rumours",
        year: 1977,
        genres: ["soft rock"],
        sale: 40000000,
        iLikeIt: true
    },
];

// DO NOT MODIFY THE CODE ABOVE THIS LINE
// WRITE YOUR CODE BELOW THIS LINE
console.log(bestSellingAlbums)

let averageSale = (bestSellingAlbums[0].sale + bestSellingAlbums[1].sale + bestSellingAlbums[2].sale + bestSellingAlbums[3].sale + bestSellingAlbums[4].sale + bestSellingAlbums[5].sale + bestSellingAlbums[6].sale + bestSellingAlbums[7].sale) /8
console.log(averageSale)

let currentYear = 2023
console.log(currentYear)

let averageAge = (currentYear - bestSellingAlbums[0].year + currentYear - bestSellingAlbums[1].year + currentYear - bestSellingAlbums[2].year + currentYear - bestSellingAlbums[3].year + currentYear - bestSellingAlbums[4].year + currentYear - bestSellingAlbums[5].year + currentYear - bestSellingAlbums[6].year + currentYear - bestSellingAlbums[7].year) /8
console.log(averageAge)

let newestAlbum = (bestSellingAlbums[6].year)
console.log(newestAlbum)
let oldestAlbum = (bestSellingAlbums[3].year)
console.log(oldestAlbum)

let albumsOfEagles = {};

albumsOfEagles.sales =
  bestSellingAlbums[4].sale + bestSellingAlbums[5].sale;

albumsOfEagles.isBothSoftRock =
  bestSellingAlbums[4].genres.includes("soft rock") &&
  bestSellingAlbums[5].genres.includes("soft rock");

console.log(albumsOfEagles);



let newAlbum = {
  artist: "Queen",
  title: "A Night at the Opera",
  year: 1975,
  genres: ["rock", "progressive rock"],
  sale: 35000000,
  iLikeIt: true
};

bestSellingAlbums[8] = newAlbum;
console.log(bestSellingAlbums)










// DO NOT MODIFY THE CODE BELOW THIS LINE
let toExport;

try {
	toExport = [
		{name: "averageSale", content: averageSale, type: "number"},
        {name: "averageAge", content: averageAge, type: "number"},
        {name: "newestAlbum", content: newestAlbum, type: "object"},
        {name: "oldestAlbum", content: oldestAlbum, type: "object"},
        {name: "albumsOfEagles", content: albumsOfEagles, type: "object"}
	]
} catch (error) {
	toExport = {error: error.message}
}

export {toExport};
