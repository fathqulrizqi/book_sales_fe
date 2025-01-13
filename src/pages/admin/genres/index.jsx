import { Link } from "react-router-dom";
import { getGenres } from "../../../services/genres";
import { useEffect, useState } from "react";

export default function Genres() {
  const [genres, setGenres] = useState([]);  
    
    useEffect(() => {  
      const fetchGenres = async () => {  
        const data = await getGenres();  
        setGenres(data.data);  
      };  
    
      fetchGenres();  
    }, []);
  
    console.log(genres)
  return (
    <div
      className="rounded-sm shadow-default :bg-box sm:px-7.5 xl:pb-1"
    >
      <div className="max-w-full overflow-x-auto">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-indigo-900 mb-4 px-4">Genres</h1>
      <Link to="create" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">Add Data
      <i className="fa-solid fa-plus pl-4"></i>
      </Link>

        <table className="w-full table-auto mt-4">
          <thead className="border-b bg-gray-50 text-white">
            <tr className="bg-gray-2 text-left :bg-meta-4">
              <th
                className="min-w-[150px] px-4 py-4 font-medium text-black :text-white xl:pl-11"
              >
                Name
              </th>
              <th
                className="min-w-[220px] px-4 py-4 font-medium text-black :text-white"
              >
                Description
              </th>
              <th className="px-4 py-4 font-medium text-black :text-white">
                Actions
              </th>
            </tr>
          </thead>
          {genres.map((genre, index) => (
          <tbody key={index}>
            <tr className="hover:bg-gray-50">
              <td
                className="px-4 py-5 pl-9 xl:pl-11"
              >
                <h5 className="font-medium text-black :text-white">{genre.name}</h5>
              </td>
              <td className="px-4 py-5">
                <p className="text-black :text-white">{genre.description}</p>
              </td>
              <td className="px-4 py-5">
                <div className="flex items-center space-x-3.5">
                  <Link to="edit"><i className="fa-solid fa-pen-to-square"></i></Link>
                  <button>
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
          ))}
        </table>
      </div>
    </div>
  )
}