import type { Book, ReadingStatus } from "../../types/BookType";

const BookCard = ({
  book,
  changeReadingStatus,
  deleteBook,
}: {
  book: Book;
  changeReadingStatus: (id: number, newStatus: ReadingStatus) => void;
  deleteBook: (bookId: number) => void;
}) => {
  return (
    <article className="book-card">
      <div className="book-card-header">
        <div className="book-info">
          <h2 className="book-title">{book.name}</h2>
          <p className="book-author">{book.author}</p>
        </div>

        <button
          type="button"
          className="delete-button"
          aria-label={`${book.name}を削除`}
          onClick={() => deleteBook(book.id)}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M3 6h18M8 6V4h8v2m3 0-1 14H6L5 6m5 4v7m4-7v7"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <select
        id={String(book.id)}
        className="book-status"
        aria-label={`${book.name}の読書状態`}
        value={book.readingStatus}
        onChange={(e) =>
          changeReadingStatus(book.id, e.target.value as ReadingStatus)
        }
      >
        <option value="unread">未読</option>
        <option value="reading">読書中</option>
        <option value="completed">読了</option>
      </select>
    </article>
  );
};

export default BookCard;
