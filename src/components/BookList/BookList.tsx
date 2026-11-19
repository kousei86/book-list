import type { Book, ReadingStatus } from "../../types/BookType";
import BookCard from "./BookCard";

const BookList = ({
  books,
  changeReadingStatus,
  deleteBook,
}: {
  books: Book[];
  changeReadingStatus: (id: number, newStatus: ReadingStatus) => void;
  deleteBook: (bookId: number) => void;
}) => {
  return (
    <div id="book-list" className="book-list">
      {books.map((book) => (
        <BookCard
          key={book.id}
          book={book}
          changeReadingStatus={changeReadingStatus}
          deleteBook={deleteBook}
        />
      ))}
    </div>
  );
};

export default BookList;
