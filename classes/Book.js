// import the Media class:
const {Media} = require ("./Media") 
// create your Book class:

class Book extends Media {
    constructor(title, year, genre, author, numPages, rating) {
        super(title, year, genre);
        this.author = author;
        this.numPages = numPages;
        this.rating = rating;
    };

    summary() {
        return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, Page Count: ${this.numPages}, Genre: ${this.genre}, Rating: ${this.rating}`
    }

    static highestRating(books) {
        let book = books[0];
        for (const currentBook of books.slice(1)) {
            if(currentBook.rating>book.rating) {
               book = currentBook;
            }
        }
        // for (let i=1; i<books.length; i++) {
        //     if(books[i].rating>book.rating) {
        //         book = books[i];
        //     }
        // }
        return book;
    }
}
Book.highestRating([new Book("hello"), new Book(), new Book()])



// don't change below
module.exports = { Book }
