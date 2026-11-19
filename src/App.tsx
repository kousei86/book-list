import "./App.css";
import Header from "./components/Header";
import BookSummary from "./components/BookSummary";
import BookForm from "./components/BookForm";
import FilterButtons from "./components/BookList/FilterButtons";
import BookList from "./components/BookList/BookList";
import type { Book, ReadingStatus } from "./types/BookType";
import { useState } from "react";

const App = () => {
  const [books, setBooks] = useState<Book[]>([
    {
      id: 0,
      name: "Python1年生",
      author: "森 巧尚",
      readingStatus: "unread",
    },
    {
      id: 1,
      name: "JavaScript入門",
      author: "著者A",
      readingStatus: "reading",
    },
    {
      id: 2,
      name: "Reactの基礎",
      author: "著者B",
      readingStatus: "completed",
    },
  ]);

  const [bookName, setBookName] = useState<string>("");
  const [authorName, setAuthorName] = useState<string>("");
  const [bookId, setBookId] = useState<number>(books.length);

  const [filter, setFilter] = useState<"all" | ReadingStatus>("all");

  // 本の追加
  const addBook = () => {
    if (bookName.trim() === "") {
      return;
    }

    setBooks((prev) => [
      ...prev,
      {
        id: bookId,
        name: bookName.trim(),
        author: authorName.trim(),
        readingStatus: "unread",
      },
    ]);

    setBookId((prev) => prev + 1);
    setBookName("");
    setAuthorName("");
  };

  // 本の種類で絞込み
  const filteredBooks =
    filter === "all"
      ? books
      : books.filter((book) => book.readingStatus === filter);

  // 本の状態変化が変わった後、値を変更する関数
  const changeReadingStatus = (id: number, newStatus: ReadingStatus) => {
    setBooks((prevBooks) =>
      prevBooks.map((book) =>
        book.id === id ? { ...book, readingStatus: newStatus } : book,
      ),
    );
  };

  // 本をリストから削除する
  const deleteBook = (bookId: number) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== bookId));
  };

  return (
    <main className="app">
      {/* タイトルエリア */}

      <Header />

      {/* 読書記録エリア */}
      <BookSummary books={books} />

      {/* 登録フォームエリア */}
      <BookForm
        setBookName={setBookName}
        setAuthorName={setAuthorName}
        addBook={addBook}
        bookName={bookName}
        authorName={authorName}
      />

      {/* 本の一覧エリア */}
      <section className="books-section" aria-label="本の一覧">
        {/* 絞り込みボタン */}
        <FilterButtons filter={filter} setFilter={setFilter} />

        {/* 本のカード一覧 */}
        <BookList
          books={filteredBooks}
          changeReadingStatus={changeReadingStatus}
          deleteBook={deleteBook}
        />
      </section>
    </main>
  );
};

export default App;
