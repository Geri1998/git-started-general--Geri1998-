let title = "Game Of Thrones"
console.log(title)

let author = "George R. R. Martin"
console.log(author)

let year = "1996"
console.log(year)

let isNewerThan2000 = false
console.log(isNewerThan2000)

let age = 2023 - year
console.log(age)

let characters = ["Arya, John, Sansa, Tyrion"]
console.log(characters)

let favoriteBook = {
    title: "Game Of Thrones",
    author: "George R. R. Martin",
    year: 1966,
    isNewerThan2000: false,
    characters: ["Arya", "John", "Sansa", "Tyrion"]
}
console.log(favoriteBook)

console.log(characters[0])
console.log(characters[1])
console.log(favoriteBook.author)
console.log(favoriteBook.year)
console.log(favoriteBook.characters[0])

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
console.log(favoriteBooks[1].title);
console.log(favoriteBooks[1].characters[0]);
console.log(favoriteBooks[0].year - favoriteBooks[1].year)


