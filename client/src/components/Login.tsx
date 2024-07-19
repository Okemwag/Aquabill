import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../services/hooks";
import { LoginRequest } from "../services/types";

const Login: React.FC = () => {
   const navigate = useNavigate();
   const { mutate: login, error, isSuccess } = useLogin();
   const [formData, setFormData] = useState<LoginRequest>({
      email: "",
      password: "",
   });

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({
         ...formData,
         [e.target.name]: e.target.value,
      });
   };

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      login(formData);
   };

   useEffect(() => {
      if (isSuccess) {
         navigate("/dashboard");
      }
   }, [isSuccess, navigate]);

   return (
      <div className="flex items-center justify-center min-h-screen bg-white">
         <form
            onSubmit={handleSubmit}
            className="w-full max-w-sm p-8 space-y-6 bg-white border rounded shadow-lg"
         >
            <div>
               <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-700"
               >
                  Email
               </label>
               <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
               />
            </div>
            <div>
               <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-700"
               >
                  Password
               </label>
               <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
               />
            </div>
            <button
               type="submit"
               className="w-full py-2 font-semibold text-white bg-black rounded hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 disabled:opacity-50"
            >
               Login
            </button>
            {error && <p className="text-sm text-red-600">{error.message}</p>}
            {isSuccess && (
               <p className="text-sm text-green-600">Login successful!</p>
            )}
         </form>
      </div>
   );
};

export default Login;
