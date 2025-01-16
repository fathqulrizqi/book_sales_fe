import { useEffect, useState } from "react";
import ProductList from "../../../components/shared/ProductList";
import { getBooks } from "../../../services/books";
import { getGenres } from "../../../services/genres";

export default function PublicBooks() {
  const [books, setBooks] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    // const fetchBooks = async () => {
    //   const data = await getBooks();
    //   setBooks(data);
    // };
    // const fetchGenres = async () => {
    //   const data = await getGenres();
    //   setGenres(data.data);
    // };

    // fetchGenres();
    // fetchBooks();

    const fetchAllData = async () => {
      // menggunakan Promise.all untuk mengambil data buku dan genre secara bersamaan, lalu memperbarui state
      const [booksData, genresData] = await Promise.all([
        getBooks(),
        getGenres(),
      ]);
      setBooks(booksData);
      setGenres(genresData.data);
    };

    fetchAllData();
    }, []);

  const bookGenre = books
    ? books.map((book) => {
        // menambahkan genre ke setiap buku
        return {
          ...book,
          genre: genres.find((genre) => genre.id === book.genre_id), // mengambil genre berdasarkan genre_id
        };
      })
    : [];

  return <ProductList datas={bookGenre} />;
}