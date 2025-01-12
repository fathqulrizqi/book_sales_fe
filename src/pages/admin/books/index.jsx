import { Link } from "react-router-dom"
import { getBooks } from "../../../services/books"
import { useEffect, useState } from "react"

export default function Books() {
  const [books, setBooks] = useState([]);  
  
  useEffect(() => {  
    const fetchBooks = async () => {  
      const data = await getBooks();  
      setBooks(data.data);  
    };  
  
    fetchBooks();  
  }, []);

  console.log(books)
  
  return (
    <div
      className="rounded-sm shadow-default :bg-box sm:px-7.5 xl:pb-1"
    >
      
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead className="border-b bg-gray-50 text-white">
            <tr className="bg-gray-2 text-left :bg-meta-4">
              
              <th
                className="px-4 py-4 font-medium text-black :text-white"
              >
                Title
              </th>
              <th
                className="px-4 py-4 font-medium text-black :text-white"
              >
                Description
              </th>
              <th
                className="px-4 py-4 font-medium text-black :text-white"
              >
                Price
              </th>
              <th
                className="px-4 py-4 font-medium text-black :text-white"
              >
                Stock
              </th>
              <th
                className="px-4 py-4 font-medium text-black :text-white xl:pl-11"
              >
                Cover Photo
              </th>
              <th
                className="px-4 py-4 font-medium text-black :text-white"
              >
                genre_id
              </th>
              <th
                className="px-4 py-4 font-medium text-black :text-white"
              >
                author_id
              </th>
              <th className="px-4 py-4 font-medium text-black :text-white">
                Actions
              </th>
            </tr>
          </thead>

          {books.length > 0 ? 
          books.map((book) => (
          <tbody key={book.id} >
            <tr className="hover:bg-gray-50">
              <td
                className="px-4 py-5"
              >
                <h5 className="font-medium text-black :text-white">{book.title}</h5>
              </td>
              <td className="px-4 py-5 xl:col-span-2">
                <p className="text-black :text-white pr-4">{book.description}</p>
              </td>
              <td className="px-4 py-5">
                <p
                  className="inline-flex rounded-full bg-success bg-opacity-10 py-1 text-sm font-medium text-success"
                >
                {book.price}
                </p>
              </td>
              <td className="px-4 py-5">
                <p
                  className="inline-flex rounded-full bg-success bg-opacity-10 px-3 py-1 text-sm font-medium text-success"
                >
                  {book.stock}
                </p>
              </td>
              <td className="px-4 py-5">
                <p
                  className="inline-flex rounded-full bg-success bg-opacity-10 px-5 py-1 text-sm font-medium text-success"
                >
                {book.cover_photo}
                </p>
              </td>
              <td className="px-5 py-5">
                <p
                  className="inline-flex rounded-full bg-success bg-opacity-10 px-3 py-1 text-sm font-medium text-blue-800"
                >
                {book.genre_id}
                </p>
              </td>
              <td className="px-5 py-5">
                <p
                  className="inline-flex rounded-full bg-success bg-opacity-10 px-5 py-1 text-sm font-medium text-blue-800"
                >
                {book.author_id}
                </p>
              </td>
              <td className="px-4 py-5">
                <div className="flex items-center space-x-3.5">
                  <Link to="/admin/books/create"><i className="fa-solid fa-plus"></i></Link>
                  <Link to="/admin/books/edit"><i className="fa-solid fa-pen-to-square"></i></Link>
                  <button>
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </div>
              </td>
            </tr>

          </tbody>
          )) :
          (
            <p>Tidak Ada Data Buku</p>
          )}
        </table>
      </div>
    </div>
  )
}