import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { uid } from 'uid';

const initialState: ILibraryState = {
  books: [
    { isbn: "1", title: "Harry Potter", author: "J.K. Rowling", year: 1997 },
  ],
};

type Book = {
  isbn: string; //(unique), ? - опциональный, может быть, а может и не быть (string | undefined;)
  title: string;
  year: number;
  author: string;
};

interface ILibraryState {
  books: Book[];
}

export const librarySlice = createSlice({
  name: "library",
  initialState,
  reducers: {
    addBook(state, action: PayloadAction<Omit<Book, 'isbn'>>) {
      state.books.push({ isbn: uid(), ...action.payload });
    },
    editBook(state, action: PayloadAction<Book>) {
      state.books = state.books.map((book) =>
        book.isbn === action.payload.isbn ? { ...action.payload } : book
      );
    },
    clearBook(state, action: PayloadAction<string>) {
      state.books = state.books.filter((book) => book.isbn !== action.payload);
    },
  },
});

export const { addBook, editBook, clearBook } = librarySlice.actions;
export default librarySlice.reducer;