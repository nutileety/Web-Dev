const books = [{
    title:  "C++ fundamentls",
    author: "Balaguruswamy"
},
{
    title: "Java for Developers",
    author: "Robert"
},
{
    title: "Basic of C programming",
    author: "Narayan"
}];

const bookTitle = books.map((book) => {
    return book.title;
});

console.log(`The Title of the Books are:\n ${bookTitle.join('\n ')}`);