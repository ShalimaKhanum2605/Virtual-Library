// create your Media class:
class Media {
    constructor(title, year, genre, totalMediaCount) {
        this.title = title;
        this.year = year;
        this.genre = genre;
        this.totalMediaCount = totalMediaCount;
    }

    summary() {
        return `Title: ${this.title}, Year: ${this.year}, Genre: ${this.genre}`
    }
}
module.exports = { Media }

const book = new Media('The Catcher in the Rye', 1951, 'Fiction');
Media.totalMediaCount; // 1
const music = new Media('Abbey Road', 1969, 'Rock');
Media.totalMediaCount; // 2
console.log(music.summary()); // "Title: Abbey Road, Year: 1969, Genre: Rock"


// // uncomment below to export it:
// module.exports = { Media }
