import type { Book } from "../types/BookType";

const BookSummary = ({ books }: { books: Book[] }) => {
  return (
    <section className="summary" aria-label="読書記録の集計">
      <div className="summary-item">
        <p className="summary-label">登録冊数</p>
        <p className="summary-value">
          <span id="total-count">{books.length}</span>
          <span className="summary-unit">冊</span>
        </p>
      </div>

      <div className="summary-item">
        <p className="summary-label">読了冊数</p>
        <p className="summary-value">
          <span id="completed-count">
            {books.filter((book) => book.readingStatus === "completed").length}
          </span>
          <span className="summary-unit">冊</span>
        </p>
      </div>
    </section>
  );
};

export default BookSummary;
