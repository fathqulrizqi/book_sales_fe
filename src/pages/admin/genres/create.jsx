import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createGenre } from "../../../services/genres";

export default function GenreCreate() {
  const [errors, setErrors] = useState([{}]);
  const [genreData, setGenreData] = useState({
    name: "",
    description: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setGenreData({...genreData, [name]: value});
  };

  const storeGenre = async (e) => {
    e.preventDefault();
  const formDataToSend = new FormData();
  formDataToSend.append('name', genreData.name);
  formDataToSend.append('description', genreData.description);

    try {
      await createGenre(formDataToSend);
      navigate('/admin/genres');
    } catch(error) {
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
            Add Data Genre
          </h3>
        </div>
        <form onSubmit={storeGenre} className="py-5">
          <div className="p-6.5 flex flex-col gap-5">
            
            <div className="mb-4.5">
              <label
                className="mb-3 block text-base font-medium text-black :text-white"
              >
                Name
              </label>
              <input
                name="name"
                value={genreData.name}
                onChange={handleInputChange}
                type="text"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-indigo-600 active:border-indigo-600 disabled:cursor-default disabled:bg-whiter :border-form-stroke :bg-form-input :text-white :focus:border-indigo-600"
              />
              {errors.name && (
                <div className="p-2 text-red-500 rounded-lg bg-red-50 mt-2" role="alert">
                  <span className="font-semibold">
                  {errors.name[0]}
                  </span>
                </div>
              )}
            </div>

            <div className="mb-4.5">
              <label
                className="mb-3 block text-base font-medium text-black :text-white"
              >
                Description
              </label>
              <textarea
                name="description"  
                value={genreData.description}
                onChange={handleInputChange}
                type="text"
                rows="6"
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