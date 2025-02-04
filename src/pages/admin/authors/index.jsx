import { Link } from "react-router-dom";
import { deleteAuthor, getAuthors } from "../../../services/authors";
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
  
    const handleDelete = async (id) => {
      const confirmDelete = window.confirm("Are you sure you want to delete this author?");
      
      if (confirmDelete) {
        try {
          await deleteAuthor(id); 
          setAuthors(authors.filter((author) => author.id !== id)); 
          alert("Author deleted successfully");
        } catch (error) {
          console.error("Failed to delete the author:", error);
          alert("Failed to delete the author. Please try again later.");
        }
      }
    }
  return (
    <div
      className="rounded-sm shadow-default :bg-box sm:px-7.5 xl:pb-1"
    >
      <div className="max-w-full overflow-x-auto">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-indigo-900 mb-4">Authors</h1>
        <Link to="create" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded mb-4">Add Data
        <i className="pl-2 fa-solid fa-plus"></i>
        </Link>
        <table className="w-full mt-4 table-auto">
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
                Bio
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
                <img src={"http://127.0.0.1:8001/storage/authors/" + author.photo} className="w-20 h-30" alt="" />
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
                  <Link to={`/admin/authors/edit/${author.id}`}><i className="fa-solid fa-pen-to-square"></i></Link>
                  <button onClick={() => handleDelete(author.id)}>
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