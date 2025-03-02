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
