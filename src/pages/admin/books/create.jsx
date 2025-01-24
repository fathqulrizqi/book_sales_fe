import { useEffect } from "react";
import { useState } from "react";
import { getAuthors } from "../../../services/authors";
import { getGenres } from "../../../services/genres";
import { createBook } from "../../../services/books";
import { useNavigate } from "react-router-dom";

export default function BookCreate() {
  const [errors, setErrors] = useState({});
  const [genres, setGenres] = useState([]);  
  const [authors, setAuthors] = useState([]);
  const [bookData, setBookData] = useState({
    title: "",
    description: "",
    price: "",
    stock: "",
    cover_photo: "",
    genre_id: "",
    author_id: "",
  });

  const navigate = useNavigate();

  const fetchGenres = async () => {
    const data = await getGenres();
    setGenres(data.data);
  };

  const fetchAuthors = async () => {
    const data = await getAuthors();
    setAuthors(data.data);
  };

  useEffect(() => {
    fetchGenres();
    fetchAuthors();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookData({...bookData, [name]: value});
    }
  
  const handleFileChange = (e) => {
    setBookData({...bookData, cover_photo: e.target.files[0]});
  }

  const storeBook = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();

    formDataToSend.append('title', bookData.title);
    formDataToSend.append('description', bookData.description);
    formDataToSend.append('price', bookData.price);
    formDataToSend.append('stock', bookData.stock);
    formDataToSend.append('cover_photo', bookData.cover_photo);
    formDataToSend.append('genre_id', bookData.genre_id);
    formDataToSend.append('author_id', bookData.author_id);
    
    try {
      await createBook(formDataToSend);
      navigate('/admin/books');
    } catch (error) {
      setErrors(error.response.data.message);
    }
  }
  return (
    <div className="flex flex-col gap-9">
      <div
        className="rounded-sm bg-white shadow-default :bg-box"
      >
        <div
          className="border-b border-stroke px-6.5 py-4 :border-stroke"
        >
          <h3 className="font-medium text-black :text-white">
            Add Data Book
          </h3>
        </div>
        <form onSubmit={storeBook} className="py-5">
          <div className="p-6.5 flex flex-col gap-5">

            <div className="mb-4.5">
              <label
                className="mb-3 block text-sm font-medium text-black :text-white"
              >
                Title
              </label>
              
              <input
                type="text"
                name="title"
                value={bookData.title}
                onChange={handleInputChange}
                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-indigo-600 active:border-indigo-600 disabled:cursor-default disabled:bg-whiter :border-form-stroke :bg-form-input :text-white :focus:border-indigo-600"
              />
              {errors.title && (
                <div className="p-2 mt-2 text-red-500 rounded-lg bg-red-50" role="alert">
                  <span className="font-semibold">
                  {errors.title[0]}
                  </span>
                </div>
              )}
            </div>
            

            <div className="mb-4.5">
              <label
                className="mb-3 block text-sm font-medium text-black :text-white"
              >
                Description
              </label>
              <textarea
                rows="6"
                name="description"
                value={bookData.description}
                onChange={handleInputChange}
                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-indigo-600 active:border-indigo-600 disabled:cursor-default disabled:bg-whiter :border-form-stroke :bg-form-input :text-white :focus:border-indigo-600"
              ></textarea>
              {errors.description && (
                <div className="p-2 text-red-500 rounded-lg bg-red-50" role="alert">
                  <span className="font-semibold">
                  {errors.description[0]}
                  </span>
                </div>
              )}
            </div>
            

            <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
              <div className="w-full xl:w-1/2">
                <label
                  className="mb-3 block text-sm font-medium text-black :text-white"
                >
                  Price
                </label>
                <input
                  type="number"
                  min={1}
                  name="price"
                  value={bookData.price}
                  onChange={handleInputChange}
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-indigo-600 active:border-indigo-600 disabled:cursor-default disabled:bg-whiter :border-form-stroke :bg-form-input :text-white :focus:border-indigo-600"
                />
                {errors.price && (
                <div className="p-2 mt-2 text-red-500 rounded-lg bg-red-50" role="alert">
                  <span className="font-semibold">
                  {errors.price[0]}
                  </span>
                </div>
              )}
              </div>
              

              <div className="w-full xl:w-1/2">
                <label
                  className="mb-3 block text-sm font-medium text-black :text-white"
                >
                  Stock
                </label>
                <input
                  type="number"
                  min={1}
                  name="stock"
                  value={bookData.stock}
                  onChange={handleInputChange}
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-indigo-600 active:border-indigo-600 disabled:cursor-default disabled:bg-whiter :border-form-stroke :bg-form-input :text-white :focus:border-indigo-600"
                />
                {errors.stock && (
                <div className="p-2 mt-2 text-red-500 rounded-lg bg-red-50" role="alert">
                  <span className="font-semibold">
                  {errors.stock[0]}
                  </span>
                </div>
              )}
              </div>
              
            </div>
            

            <div className="mb-4.5">
              <label
                className="mb-3 block text-sm font-medium text-black :text-white"
              >
                Attach file
              </label>
              <input
                type="file"
                onChange={handleFileChange}
                className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent font-normal outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:px-5 file:py-3 file:hover:bg-indigo-600 file:hover:bg-opacity-10 focus:border-indigo-600 active:border-indigo-600 disabled:cursor-default disabled:bg-whiter :border-form-stroke :bg-form-input :file:border-form-stroke :file:bg-white/30 :file:text-white :focus:border-indigo-600"
              />
              {errors.cover_photo && (
                <div className="p-2 mt-2 text-red-500 rounded-lg bg-red-50" role="alert">
                  <span className="font-semibold">
                  {errors.cover_photo[0]}
                  </span>
                </div>
              )}
            </div>
            

            <div className="mb-4.5">
              <label
                className="mb-3 block text-sm font-medium text-black :text-white"
              >
                Genre
              </label>
              <div
                className="relative z-20 bg-transparent :bg-form-input"
              >
                <select
                name="genre_id"
                value={bookData.genre_id}
                onChange={handleInputChange}
                  className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent px-5 py-3 outline-none transition focus:border-indigo-600 active:border-indigo-600 :border-form-stroke :bg-form-input :focus:border-indigo-600"
                >
                  <option value="" className="text-body">
                    --select genre--
                  </option>
                  {genres.map((genre) => (
                  <option key={genre.id} value={genre.id} className="text-body">{genre.name}</option>
                ))}
                </select>
                <span
                  className="absolute right-4 top-1/2 z-30 -translate-y-1/2"
                >
                  <svg
                    className="fill-current"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="0.8">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                        fill=""
                      ></path>
                    </g>
                  </svg>
                </span>
              </div>
              {errors.genre_id && (
                <div className="p-2 mt-2 text-red-500 rounded-lg bg-red-50" role="alert">
                  <span className="font-semibold">
                  {errors.genre_id[0]}
                  </span>
                </div>
              )}
            </div>
            
            <div className="mb-4.5">
              <label
                className="mb-3 block text-sm font-medium text-black :text-white"
              >
                Author
              </label>
              <div
                className="relative z-20 bg-transparent :bg-form-input"
              >
                <select
                  name="author_id"
                  value={bookData.author_id}
                  onChange={handleInputChange}
                  className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent px-5 py-3 outline-none transition focus:border-indigo-600 active:border-indigo-600 :border-form-stroke :bg-form-input :focus:border-indigo-600"
                >
                  <option value="" className="text-body">
                    --select author--
                  </option>
                  {authors.map((author) => (
                    
                  <option key={author.id} value={author.id} className="text-body">{author.name}</option>
                ))}
                
                </select>
                <span
                  className="absolute right-4 top-1/2 z-30 -translate-y-1/2"
                >
                  <svg
                    className="fill-current"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="0.8">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                        fill=""
                      ></path>
                    </g>
                  </svg>
                </span>
              </div>
              {errors.author_id && (
                <div className="p-2 mt-2 text-red-500 rounded-lg bg-red-50" role="alert">
                  <span className="font-semibold">
                  {errors.author_id[0]}
                  </span>
                </div>
              )}
            </div>

            <button
              type="submit"
              className="flex w-full justify-center rounded bg-indigo-600 p-3 font-medium text-white hover:bg-opacity-90"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}