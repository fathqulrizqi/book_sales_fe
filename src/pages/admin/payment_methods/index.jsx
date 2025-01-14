import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { deletePaymentMethods, getPaymentMethods } from "../../../services/payment_methods";

export default function PaymentMethods() {
  const [payment_methods, setPaymentMethods] = useState([]);  
    
    useEffect(() => {  
      const fetchPaymentMethods = async () => {  
        const data = await getPaymentMethods();  
        setPaymentMethods(data.data);  
      };  
    
      fetchPaymentMethods();  
    }, []);

    const handleDelete = async (id) => {
      const confirmDelete = window.confirm("Are you sure you want to delete this payment method?");
      
      if (confirmDelete) {
        try {
          await deletePaymentMethods(id); 
          setPaymentMethods(payment_methods.filter((payment_method) => payment_method.id !== id)); 
          alert("Payment Method deleted successfully");
        } catch (error) {
          console.error("Failed to delete the payment method:", error);
          alert("Failed to delete the payment method. Please try again later.");
        }
      }
    };

  return (
    <div
      className="rounded-sm shadow-default :bg-box sm:px-7.5 xl:pb-1"
    >
      <div className="max-w-full overflow-x-auto">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-indigo-900 mb-4">Payment Methods</h1>
      <Link to="create" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">Add Data
      <i className="fa-solid fa-plus pl-2"></i>
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
                Account Number
              </th>
              <th
                className="min-w-[220px] px-4 py-4 font-medium text-black :text-white"
              >
                Image
              </th>
              <th className="px-4 py-4 font-medium text-black :text-white">
                Actions
              </th>
            </tr>
          </thead>
          {payment_methods.map((payment_method, index) => (
          <tbody key={index}>
            <tr className="hover:bg-gray-50">
              <td
                className="px-4 py-5 pl-9 xl:pl-11"
              >
                <h5 className="font-medium text-black :text-white">{payment_method.name}</h5>
              </td>
              <td className="px-4 py-5">
                <p className="text-black :text-white">{payment_method.account_number}</p>
              </td>
              <td className="px-4 py-5">
                <img src={"http://127.0.0.1:8000/storage/payment_methods/" + payment_method.image} className="w-20 h-30" alt="" />
              </td>
              <td className="px-4 py-5">
                <div className="flex items-center space-x-3.5">
                  <Link to="edit"><i className="fa-solid fa-pen-to-square"></i></Link>
                  <button onClick={() => handleDelete(payment_method.id)}>
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