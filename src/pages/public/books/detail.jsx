import { useEffect, useState } from "react";
import { showBook } from "../../../services/books";
import { useNavigate, useParams } from "react-router-dom";
import { getGenres } from "../../../services/genres";
import { createOrder } from "../../../services/orders";

export default function BookDetail() {
  const [book, setBook] = useState([]);
  const [genre, setGenre] = useState([]);
  const [quantity, setQuantity] = useState(1); // 1 untuk default
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchAllData = async () => {
    const [bookData, genreData] = await Promise.all([
      showBook(id),
      getGenres(),
    ]);
    setBook(bookData);
    setGenre(genreData.data);
  };

  useEffect(() => {
    fetchAllData();
  }, [id]);
  
  const genreName = genre.find((g) => g.id === book?.genre_id)?.name;

  const formatRupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0, // 2 angka di belakang koma
      maximumFractionDigits: 2, // 2 angka di belakang koma
    }).format(number); // format angka
  };

  const handleInput = (e) => {
    setQuantity(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      book_id: id,
      quantity: quantity,
    };

    
    try {
      await createOrder(data);
      alert("Order created successfully");
      return navigate("/books");
    } catch (error) {
      console.log(error);
    }
  };

  

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className="w-1/3 h-full object-cover object-center rounded"
            src={"http://127.0.0.1:8000/storage/books/" + book.cover_photo}
          />

          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              {genreName}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {book.title}
            </h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <span className="text-gray-600 ml-3">4 Reviews</span>
              </span>
            </div>
            <p className="leading-relaxed">{book.description}</p>

            <form onSubmit={handleSubmit}>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex items-center">
                  <span className="mr-3">Quantity</span>
                  <input
                    defaultValue="1"
                    onChange={handleInput}
                    type="number"
                    name="quantity"
                    value={quantity}
                    min="1"
                    max={book.stock}
                    className="rounded border appearance-none border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <span className="title-font font-medium text-2xl text-gray-900">
                  {formatRupiah(book.price)}
                </span>
                <button type="submit" className="inline text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Buy
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
