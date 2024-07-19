import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const Dashboard: React.FC = () => {
   return (
      <div className="flex">
         <Sidebar />
         <div className="flex-1 p-4 overflow-auto">
            <Outlet />
         </div>
      </div>
   );
};

export default Dashboard;
