import React from "react";
import { useCustomer } from "../services/hooks";

interface ProfileProps {
   id: number;
   email: string;
   phone_number: string;
}

const Profile: React.FC<ProfileProps> = () => {
   const { data, error, isLoading } = useCustomer();

   if (isLoading) return <div>Loading...</div>;
   if (error) return <div>Error loading profile</div>;

   return (
      <div className="p-4 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
         <h1 className="text-2xl font-bold text-gray-900">Profile</h1>
         <div>
            <label className="block text-sm font-medium text-gray-600">
               Email
            </label>
            <p className="text-gray-900">{data.email}</p>
         </div>
         <div>
            <label className="block text-sm font-medium text-gray-600">
               Phone Number
            </label>
            <p className="text-gray-900">{data.phone_number}</p>
         </div>
      </div>
   );
};

export default Profile;
