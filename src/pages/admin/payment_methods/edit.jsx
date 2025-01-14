import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  getPaymentMethods,
  updatePaymentMethods,
} from "../../../services/payment_methods";

export default function PaymentMethodsEdit() {
  const [name, setName] = useState("");
  const [account_number, setAccountNumber] = useState("");
  const [image, setImage] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  const fetchPaymentMethodsDetails = async () => {
    const data = await getPaymentMethods();

    const payment_method = data.data.find(
      (payment_method) => payment_method.id === parseInt(id)
    );
    if (payment_method) {
      setName(payment_method.name);
      setAccountNumber(payment_method.account_number);
      setImage(payment_method.image);
    }
  };

  useEffect(() => {
    fetchPaymentMethodsDetails();
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const updatePaymentMethodsDetails = async (e) => {
    e.preventDefault();

    const paymentMethodsData = new FormData();
    paymentMethodsData.append("name", name);
    paymentMethodsData.append("account_number", account_number);
    paymentMethodsData.append("_method", "PUT");

    if (image) {
      paymentMethodsData.append("image", image);
    }

    await updatePaymentMethods(id, paymentMethodsData);
    try {
      navigate("/admin/payment_methods");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col gap-9">
      <div className="rounded-sm bg-white shadow-default :bg-box">
        <div className="border-b border-stroke px-6.5 py-4 :border-stroke">
          <h3 className="font-medium text-black :text-white">
            Edit Data Payment Methods
          </h3>
        </div>
        <form onSubmit={updatePaymentMethodsDetails} className="py-5">
          <div className="p-6.5 flex flex-col gap-5">
            <div className="mb-4.5">
              <label className="mb-3 block text-base font-medium text-black :text-white">
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

            <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
              <div className="w-full xl:w-1/2">
                <label className="mb-3 block text-sm font-medium text-black :text-white">
                  Account Number
                </label>
                <input
                  type="number"
                  name="account_number"
                  value={account_number}
                  onChange={(e) => setAccountNumber(e.target.value)}
                  min={1}
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-indigo-600 active:border-indigo-600 disabled:cursor-default disabled:bg-whiter :border-form-stroke :bg-form-input :text-white :focus:border-indigo-600"
                />
              </div>
            </div>

            <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
              <div className="mb-4.5">
                <label className="mb-3 block text-sm font-medium text-black :text-white">
                  Image
                </label>

                <input
                  onChange={handleImageChange}
                  type="file"
                  className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent font-normal outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:px-5 file:py-3 file:hover:bg-indigo-600 file:hover:bg-opacity-10 focus:border-indigo-600 active:border-indigo-600 disabled:cursor-default disabled:bg-whiter :border-form-stroke :bg-form-input :file:border-form-stroke :file:bg-white/30 :file:text-white :focus:border-indigo-600"
                />
              </div>
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
  );
}
