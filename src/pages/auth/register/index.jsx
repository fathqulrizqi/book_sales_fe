import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../../services/auth";

export default function Register() {
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  })
  const navigate = useNavigate();
  const [isTermsChecked, setIsTermsChecked] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRegisterData({...registerData, [name]: value});
  }

  const handleTermsChange = (e) => { 
    setIsTermsChecked(e.target.checked);
  }

  console.log(registerData)

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (registerData.password !== registerData.confirm_password) {
      alert("Passwords do not match");
      return;
    }

    if (!isTermsChecked) {
      alert("Please accept the terms and conditions");
      return;
    }
    
    try {
      await register(registerData);
      alert("Registration successful");
      return navigate("/login");
    } catch (error) {
      console.log(error);
    }
    
  }
  return (
    <section className="bg-gray-50 :bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow :border md:mt-0 sm:max-w-md xl:p-0 :bg-gray-800 :border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl :text-white">
              Create an account
            </h1>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 :text-white"
                >
                  Your Name
                </label>
                <input
                  value={registerData.name}
                  onChange={handleInputChange}
                  type="text"
                  name="name"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-blue-500 :focus:border-blue-500"
                  placeholder="name@company.com"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 :text-white"
                >
                  Your email
                </label>
                <input
                  value={registerData.email}
                  onChange={handleInputChange}
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-blue-500 :focus:border-blue-500"
                  placeholder="name@company.com"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 :text-white"
                >
                  Password
                </label>
                <input
                  value={registerData.password}
                  onChange={handleInputChange}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-blue-500 :focus:border-blue-500"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="confirm-password"
                  className="block mb-2 text-sm font-medium text-gray-900 :text-white"
                >
                  Confirm password
                </label>
                <input
                  value={registerData.confirm_password}
                  onChange={handleInputChange}
                  type="password"
                  name="confirm_password"
                  id="confirm-password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-blue-500 :focus:border-blue-500"
                  required=""
                />
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    onChange={handleTermsChange}
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-indigo-300 :bg-gray-700 :border-gray-600 :focus:ring-indigo-600 :ring-offset-gray-800"
                    required=""
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="terms"
                    className="font-light text-gray-500 :text-gray-300"
                  >
                    I accept the{" "}
                    <a
                      className="font-medium text-indigo-600 hover:underline :text-indigo-500"
                      href="#"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center :bg-indigo-600 :hover:bg-indigo-700 :focus:ring-indigo-800"
              >
                Create an account
              </button>
              <p className="text-sm font-light text-gray-500 :text-gray-400">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-medium text-indigo-600 hover:underline :text-indigo-500"
                >
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
