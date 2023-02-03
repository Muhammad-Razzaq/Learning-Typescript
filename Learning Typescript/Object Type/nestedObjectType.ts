type Author = {
    firstName: string,
    lastName: string,
}

type Book = {
    author: Author,
    name: string,
    page?: number, //It means its optional
};

const book: Book = {
    author: {
        firstName: "Nicolo",
        lastName: "Machiavelli",
    },
    name: "The Prince",
}