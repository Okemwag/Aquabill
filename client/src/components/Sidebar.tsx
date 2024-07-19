import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar: React.FC = () => {
   return (
      <div className="w-64 h-screen bg-white border-r border-gray-200 flex flex-col sticky">
         <div className="p-4 text-lg font-semibold">AquaBill</div>
         <nav className="flex-1 px-2 space-y-2">
            <NavLink
               to="/dashboard"
               className={({ isActive }) =>
                  `flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded ${
                     isActive ? "bg-gray-200 font-bold" : ""
                  }`
               }
            >
               <span className="mr-3">🏠</span>
               <span>Dashboard</span>
            </NavLink>
            <NavLink
               to="/meters"
               className={({ isActive }) =>
                  `flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded ${
                     isActive ? "bg-gray-200 font-bold" : ""
                  }`
               }
            >
               <span className="mr-3">💧</span>
               <span>Meters</span>
            </NavLink>
            <NavLink
               to="/billing"
               className={({ isActive }) =>
                  `flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded ${
                     isActive ? "bg-gray-200 font-bold" : ""
                  }`
               }
            >
               <span className="mr-3">💸</span>
               <span>Billing</span>
            </NavLink>
            <NavLink
               to="/customers"
               className={({ isActive }) =>
                  `flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded ${
                     isActive ? "bg-gray-200 font-bold" : ""
                  }`
               }
            >
               <span className="mr-3">👥</span>
               <span>Customers</span>
            </NavLink>
            <NavLink
               to="/reports"
               className={({ isActive }) =>
                  `flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded ${
                     isActive ? "bg-gray-200 font-bold" : ""
                  }`
               }
            >
               <span className="mr-3">📊</span>
               <span>Reports</span>
            </NavLink>
            <NavLink
               to="/settings"
               className={({ isActive }) =>
                  `flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded ${
                     isActive ? "bg-gray-200 font-bold" : ""
                  }`
               }
            >
               <span className="mr-3">⚙️</span>
               <span>Settings</span>
            </NavLink>
         </nav>
      </div>
   );
};

export default Sidebar;
