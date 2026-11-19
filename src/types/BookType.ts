export type Book = {
  id: number;
  name: string;
  author: string;
  readingStatus: ReadingStatus;
};

export type ReadingStatus = "unread" | "reading" | "completed";
