//Task 1 - Created Book Class

//Class representing a book in the library
class Book {
    
    constructor(title, author, isbn, copies) {
        
        //Assigns the book title
        this.title = title; 
        
        //Assigns the book author
        this.author = author; 
        
        //Assigns the book's unique ISBN number
        this.isbn = isbn; 
        
        //Sets the number of copies available in the library
        this.copies = copies; 
    }

    //Method to return formatted book details as a string
    getDetails() {
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Copies: ${this.copies}`;
    }

    //Method to update the number of copies when borrowed or returned
    updateCopies(quantity) {
        
        //Ensures that copies never go below zero
        if (this.copies + quantity >= 0) { 
            
            //Updates the number of available copies
            this.copies += quantity; 
        
        } else {
            
            //Logs an error if trying to set negative copies
            console.log(`Error: Cannot have negative copies of "${this.title}".`); 
        
        }
    }
}

//Creates a book instance with title, author, ISBN, and initial copies
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5);

//Displays book details before any operations
//Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 5"
console.log(book1.getDetails());

//Simulates borrowing a book by decreasing copies by 1
book1.updateCopies(-1);

//Displays updated book details after borrowing
//Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"
console.log(book1.getDetails());

//Task 2 - Created Borrower Class

//Class representing a borrower in the library system
class Borrower {
    
    constructor(name, borrowerId) {
        
        //Stores the borrower's name
        this.name = name; 
        
        //Assigns a unique borrower ID
        this.borrowerId = borrowerId; 
        
        //Initializes an empty array to store borrowed books
        this.borrowedBooks = []; 
    }

    //Method for borrowing a book
    borrowBook(book) {
        
        //Ensures that the borrower does not borrow the same book multiple times
        if (!this.borrowedBooks.includes(book)) {
            this.borrowedBooks.push(book); 
        } else {
            console.log(`Error: Borrower already has "${book.title}".`);
        }
    }

    //Method for returning a book
    returnBook(book) {
        
        //Ensures that the borrower actually borrowed the book before returning it
        if (this.borrowedBooks.includes(book)) {
            
            //Removes the returned book from the borrowed books list
            this.borrowedBooks = this.borrowedBooks.filter(currentBook => currentBook.isbn !== book.isbn);
        
        } else {
            console.log(`Error: Borrower did not borrow "${book.title}".`);
        }
    }
}

//Creates a borrower instance with name and unique borrower ID
const borrower1 = new Borrower("Alice Johnson", 201);

//Simulates borrowing a book by the borrower
borrower1.borrowBook(book1);

//Displays the list of books the borrower has borrowed
//Expected output: ["The Great Gatsby"]
console.log(borrower1.borrowedBooks.map(book => book.title));

//Simulates returning the borrowed book
borrower1.returnBook(book1);

//Displays the updated borrowed books list after returning the book
//Expected output: []
console.log(borrower1.borrowedBooks.map(book => book.title));
