// WRITE YOUR CODE BELOW THIS LINE
let favoriteBooks = [
    {
        title: "Harry Potter and the Philosopher's Stone",
        author: "J. K. Rowling",
        year: 1997,
        isNewerThan2000: false,
        characters: ["Harry", "Ron", "Hermione", "Hagrid"]
    },
    {
        title: "Game Of Thrones",
        author: "George R. R. Martin",
        year: 1966,
        isNewerThan2000: false,
        characters: ["Arya", "John", "Sansa", "Tyrion"]
    }
]
console.log(favoriteBooks)

for (const book of favoriteBooks) {
	
	console.log(book.title)
}

for (let i = 0; i < favoriteBooks.length; i++) {
	let book = favoriteBooks[i];
	console.log(book.author)
}
if(favoriteBooks[0].isNewerThan2000 === true) {
	console.log(favoriteBooks[0].title)
}


if (favoriteBooks[0].isNewerThan2000 === true) {
	let bookTitle = favoriteBooks[0].title
	console.log("This book is newer then 2000: ", bookTitle)
} else {
	let bookTitle = favoriteBooks[0].title
	console.log("This book is older then 2000: ", bookTitle)
	
}



if (favoriteBooks[1].isNewerThan2000 === true) {
	let bookTitle = favoriteBooks[1].title
	console.log("This book is newer then 2000: ", bookTitle)
} else {
	let bookTitle = favoriteBooks[1].title
	console.log("This book is older then 2000: ", bookTitle)
	
}

if (favoriteBooks[0].isNewerThan2000 !== true) {
	let bookTitle = favoriteBooks[0].title
	console.log("This book is newer then 2000: ", bookTitle)
} else {
	let bookTitle = favoriteBooks[0].title
	console.log("This book is older then 2000: ", bookTitle)
	
}



if (favoriteBooks[1].isNewerThan2000 !== true) {
	let bookTitle = favoriteBooks[1].title
	console.log("This book is newer then 2000: ", bookTitle)
} else {
	let bookTitle = favoriteBooks[1].title
	console.log("This book is older then 2000: ", bookTitle)
	
}

if(favoriteBooks[0].year <= 2000) {
	let bookTitle = favoriteBooks[0].title
	console.log("This book is older than: ", bookTitle)
} else {
	let bookTitle = favoriteBooks[0].title
	console.log("This book is newer than: ", bookTitle)
}


if(favoriteBooks[1].year <= 2000) {
	let bookTitle = favoriteBooks[1].title
	console.log("This book is older than: ", bookTitle)
} else {
	let bookTitle = favoriteBooks[1].title
	console.log("This book is newer than: ", bookTitle)
}

for (const book of favoriteBooks) { 
	if (book.year <= 2000) { 
	  console.log("This book is older than 2000: ", book.title); 
	} else if (book.year >= 2000) { 
	  console.log("This book is newer than 2000: ", book.title); 
	} 
  }







// DO NOT MODIFY THE CODE BELOW THIS LINE
let toExport;

try {
	toExport = [
		{name: "favoriteBooks", content: favoriteBooks, type: "array"}
	]
} catch (error) {
	toExport = {error: error.message}
}

export {toExport}
