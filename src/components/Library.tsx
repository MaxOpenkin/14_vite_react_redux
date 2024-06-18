// import React from 'react'

import { useDispatch, useSelector } from "react-redux";

import Book from "./Book";
import { FormEvent, useState } from "react";
import { addBook } from "../redux_rtk/librarySlice";
import { RootState } from "../redux_rtk/storeRTK";

const Library = () => {
  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [year, setYear] = useState<number>(0);

  const books = useSelector((state: RootState) => state.library.books);
  const dispatch = useDispatch();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(addBook({ title, author, year }));
    setTitle("");
    setAuthor("");
    setYear(0);
  };

  return (
    <div className="library">
      <h2>New Book</h2>
      <form className="formInput" onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          Author:
          <input
            type="text"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </label>
        <label>
          Year:
          <input
            type="text"
            placeholder="Year"
            value={year}
            onChange={(e) => setYear(+e.target.value)}
          />
        </label>
        <button>Add</button>
      </form>
      <h1>Book List: </h1>
      <ul>
        {books.map((book) => (
          <Book key={book.isbn} info={book} />
        ))}
      </ul>
    </div>
  );
};

export default Library;
