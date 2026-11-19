const BookForm = ({
  setBookName,
  setAuthorName,
  addBook,
  bookName,
  authorName,
}: {
  setBookName: (newBookName: string) => void;
  setAuthorName: (newAuthorName: string) => void;
  addBook: () => void;
  bookName: string;
  authorName: string;
}) => {
  return (
    <section className="register-section" aria-label="本の登録">
      <form
        id="book-form"
        className="book-form"
        onSubmit={(e) => {
          e.preventDefault();
          addBook();
        }}
      >
        <input
          type="text"
          id="book-title"
          name="title"
          placeholder="本のタイトル"
          aria-label="本のタイトル"
          value={bookName}
          onChange={(e) => setBookName(e.target.value)}
          required
        />

        <input
          type="text"
          id="book-author"
          name="author"
          placeholder="著者名"
          aria-label="著者名"
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
        />

        <button type="submit" className="add-button">
          本を追加
        </button>
      </form>
    </section>
  );
};

export default BookForm;
