const book = 
    Math.random() > 0.5 
    ? {name: "The Prince", origin: "Italy", page: 45}
    : {name: "The Palace", origin: "France", words: 500};

book.name;
book.page;
book.words;
// It does'nt give error because typescript is implicitely defined

export{}