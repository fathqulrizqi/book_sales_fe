import { Link } from "react-router-dom";
import { deleteBook, getBooks } from "../../../services/books";
import { useEffect, useState } from "react";
import { getGenres } from "../../../services/genres";
import { getAuthors } from "../../../services/authors";

export default function Books() {
  const [books, setBooks] = useState([]);
  const [genres, setGenres] = useState([]);
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const data = await getBooks();
      setBooks(data);
    };
    const fetchGenres = async () => {
      const data = await getGenres();
      setGenres(data.data);
    };
    const fetchAuthors = async () => {
      const data = await getAuthors();
      setAuthors(data.data);
    };

    fetchBooks();
    fetchAuthors();
    fetchGenres();
  }, []);

  const getGenreName = (id) => {
    const genre = genres.find((item) => item.id === id);
    return genre ? genre.name : "Unknown Genre";
  };
  const getAuthorName = (id) => {
    const author = authors.find((item) => item.id === id);
    return author ? author.name : "Unknown Author";
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this book?"
    );

    if (confirmDelete) {
      try {
        await deleteBook(id);
        setBooks(books.filter((book) => book.id !== id));
      } catch (error) {
        alert("Book deleted successfully");
      }
    }
  };

  return (
    <div className="rounded-sm shadow-default :bg-box sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-indigo-900 mb-4">
          Books
        </h1>
        <Link
          to="/admin/books/create"
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Data
          <i className="fa-solid fa-plus pl-4"></i>
        </Link>

        <table className="w-full table-auto mt-4">
          <thead className="border-b bg-gray-50 text-white">
            <tr className="bg-gray-2 text-left :bg-meta-4">
              <th className="px-4 py-4 font-medium text-black :text-white">
                Title
              </th>
              <th className="px-4 py-4 font-medium text-black :text-white">
                Description
              </th>
              <th className="px-4 py-4 font-medium text-black :text-white">
                Price
              </th>
              <th className="px-4 py-4 font-medium text-black :text-white">
                Stock
              </th>
              <th className="px-4 py-4 font-medium text-black :text-white ">
                Cover Photo
              </th>
              <th className="px-4 py-4 font-medium text-black :text-white">
                Genre
              </th>
              <th className="px-4 py-4 font-medium text-black :text-white">
                Author
              </th>
              <th className="px-4 py-4 font-medium text-black :text-white">
                Actions
              </th>
            </tr>
          </thead>

          {books.length > 0 ? (
            books.map((book) => (
              <tbody key={book.id}>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-5">
                    <h5 className="font-medium text-black :text-white">
                      {book.title}
                    </h5>
                  </td>
                  <td className="px-4 py-5 xl:col-span-2">
                    <p className="text-black :text-white pr-4">
                      {book.description}
                    </p>
                  </td>
                  <td className="px-4 py-5">
                    <p className="inline-flex rounded-full bg-success bg-opacity-10 py-1 text-sm font-medium text-success">
                      {book.price}
                    </p>
                  </td>
                  <td className="px-4 py-5">
                    <p className="inline-flex rounded-full bg-success bg-opacity-10 px-3 py-1 text-sm font-medium text-success">
                      {book.stock}
                    </p>
                  </td>
                  <td className="px-4 py-5">
                    <img
                      src={
                        "http://127.0.0.1:8000/storage/books/" +
                        book.cover_photo
                      }
                      className="w-20 h-30"
                      alt=""
                    />
                  </td>
                  <td className="px-5 py-5">
                    <p className="inline-flex rounded-full bg-success bg-opacity-10 px-3 py-1 text-sm font-medium text-blue-800">
                      {getGenreName(book.genre_id)}
                    </p>
                  </td>
                  <td className="px-5 py-5">
                    <p className="inline-flex rounded-full bg-success bg-opacity-10 px-5 py-1 text-sm font-medium text-blue-800">
                      {getAuthorName(book.author_id)}
                    </p>
                  </td>
                  <td className="px-4 py-5">
                    <div className="flex items-center space-x-3.5">
                      <Link to={`/admin/books/edit/${book.id}`}>
                        <i className="fa-solid fa-pen-to-square"></i>
                      </Link>
                      <button onClick={() => handleDelete(book.id)}>
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            ))
          ) : (
            <p>Tidak Ada Data Buku</p>
          )}
        </table>
      </div>
    </div>
  );
}
