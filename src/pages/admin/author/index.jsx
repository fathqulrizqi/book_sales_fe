import { Link } from "react-router-dom";
import { getAuthors } from "../../../services/authors";
import { useEffect, useState } from "react";

export default function Authors() {
  const [authors, setAuthors] = useState([]);  
    
    useEffect(() => {  
      const fetchAuthors = async () => {  
        const data = await getAuthors();  
        setAuthors(data.data);  
      };  
    
      fetchAuthors();  
    }, []);
  
    console.log(authors)
  return (
    <div
      className="rounded-sm shadow-default :bg-box sm:px-7.5 xl:pb-1"
    >
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead className="border-b bg-gray-50 text-white">
            <tr className="bg-gray-2 text-left :bg-meta-4">
              <th
                className="min-w-[150px] px-4 py-4 font-medium text-black :text-white xl:pl-11"
              >
                Photo
              </th>
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
          {authors.map((author, index) => (
          <tbody key={index}>
            <tr className="hover:bg-gray-50">
              <td
                className="px-4 py-5 pl-9 xl:pl-11"
              >
                <p className="font-medium text-black :text-white">{author.photo}</p>
              </td>
              <td
                className="px-4 py-5 pl-9 xl:pl-11"
              >
                <h5 className="font-medium text-black :text-white">{author.name}</h5>
              </td>
              <td className="px-4 py-5">
                <p className="text-black :text-white">{author.bio}</p>
              </td>
              <td className="px-4 py-5">
                <div className="flex items-center space-x-3.5">
                  <Link to="create"><i className="fa-solid fa-plus"></i></Link>
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