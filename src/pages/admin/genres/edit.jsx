import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { getGenres, updateGenre } from "../../../services/genres";

export default function GenreEdit() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();
  
  const fetchGenreDetails = async () => {
    const data = await getGenres(); 

    const genre = data.data.find((genre) => genre.id === parseInt(id));
    if (genre) {
      setName(genre.name);
      setDescription(genre.description);
    }
  };

  useEffect(() => {
    fetchGenreDetails();
  }, []);

  const updateGenreDetails = async (e) => {
    e.preventDefault();

    const genreData = new FormData()

    genreData.append('name', name)
    genreData.append('description', description)
    genreData.append('_method', 'PUT')

     await updateGenre(id, genreData)

      .then(() => {
        navigate('/admin/genres')
      })
      .catch((err) => {
        console.log(err.response.data.message)
      })
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
            Edit Data Genre
          </h3>
        </div>
        <form onSubmit={updateGenreDetails} className="py-5">
          <div className="p-6.5 flex flex-col gap-5">
            
            <div className="mb-4.5">
              <label
                className="mb-3 block text-base font-medium text-black :text-white"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-indigo-600 active:border-indigo-600 disabled:cursor-default disabled:bg-whiter :border-form-stroke :bg-form-input :text-white :focus:border-indigo-600"
              />
            </div>

            <div className="mb-4.5">
              <label
                className="mb-3 block text-base font-medium text-black :text-white"
              >
                Description
              </label>
              <textarea
                rows="6"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-indigo-600 active:border-indigo-600 disabled:cursor-default disabled:bg-whiter :border-form-stroke :bg-form-input :text-white :focus:border-indigo-600"
              ></textarea>
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