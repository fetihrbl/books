import React from "react";
import Book from "./Book";

class BookList extends React.Component {


    render() {
        
        const BookList = this.props.books.map((book, i) => {
            return <Book book={book} key={i} />
        })

        return (
            <div>
                {BookList}
            </div>
        ) 
    }
}

export default BookList;