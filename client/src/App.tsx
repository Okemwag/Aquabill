import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./pages/Dashboard";


const App: React.FC = () => {
   const [hasAccount, setHasAccount] = useState(true);

   return (
      <Router>
         <div className="flex flex-col items-center justify-center min-h-screen ">
            <Routes>
               <Route
                  path="/"
                  element={
                     hasAccount ? (
                        <>
                           <Login />
                           <p className="mt-4 text-gray-600">
                              Don't have an account?{" "}
                              <button
                                 onClick={() => setHasAccount(false)}
                                 className="text-blue-500 hover:underline"
                              >
                                 Sign Up
                              </button>
                           </p>
                        </>
                     ) : (
                        <>
                           <Register />
                           <p className="mt-4 text-gray-600">
                              Already have an account?{" "}
                              <button
                                 onClick={() => setHasAccount(true)}
                                 className="text-blue-500 hover:underline"
                              >
                                 Log In
                              </button>
                           </p>
                        </>
                     )
                  }
               />
               <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
         </div>
      </Router>
   );
};

export default App;
