/*
    Library:
    1. Add book;
    2. Edit book;
    3. Delete book;
*/

export type Book = {
  isbn: string; //(unique), ? - опциональный, может быть, а может и не быть (string | undefined;)
  title: string;
  year: number;
  author: string;
};

export type libraryAction =
  | { type: "library/add"; payload: Omit <Book, 'isbn'> }
  | { type: "library/edit"; payload: Book }
  | { type: "library/delete"; payload: string };
