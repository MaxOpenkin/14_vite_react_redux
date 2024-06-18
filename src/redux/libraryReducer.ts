import { uid } from "uid";
import { Book, libraryAction } from "./libraryAction";

// интерфейс, описывающий состояние библиотеки. В данном случае, состояние содержит массив книг.
interface ILibraryState {
  books: Book[];
}

// начальное состояние библиотеки, которое содержит одну книгу – "Harry Potter".
const initialState = {
  books: [
    { isbn: "1", title: "Harry Potter", author: "J.K. Rowling", year: 1997 },
  ],
};

// функция-редюсер. Она принимает текущее состояние и действие, а затем возвращает новое состояние.
export default function libraryReducer(
  state: ILibraryState = initialState, // если состояние не передано, используется initialState
  action: libraryAction // действие, которое описывает, что нужно сделать с состоянием.
): ILibraryState {
  switch (action.type) {
    case "library/add":
      return {
        ...state,
        books: [...state.books, { isbn: uid(), ...action.payload }],
      };
    case "library/edit":
      return {
        ...state,
        books: state.books.map((book) =>
          book.isbn === action.payload.isbn ? { ...action.payload } : book
        ),
        // {
        // if (book.isbn === action.payload.isbn) {
        //   return {
        //     ...action.payload,
        //     // title: action.payload.title,
        //     // author: action.payload.author,
        //     // year: action.payload.year,
        //   };
        // }
        // return book;
        // }),
      };
    case "library/delete":
      return {...state, books: state.books.filter(book => book.isbn !== action.payload)};
    default:
      return state;
  }
}

// case "library/add":
// ...state – копируем текущее состояние.
// books: [...state.books, { isbn: uid(), ...action.payload }] – создаем новый массив книг, добавляя новую книгу.
// uid() – генерируем уникальный идентификатор для новой книги.
// ...action.payload – добавляем данные книги из действия.
//
//case "library/edit":
//       state.books.map((book) => { ... }) – создаем новый массив книг, используя map.
// if (book.isbn === action.payload.isbn) – если ISBN книги совпадает с ISBN из действия.
// return { ...book, title: action.payload.title, author: action.payload.author, year: action.payload.year } – возвращаем обновленную книгу.
// ...book – копируем текущие свойства книги.
// ...action.payload – обновляем свойства книги данными из действия.
