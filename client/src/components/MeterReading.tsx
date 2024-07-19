import React from "react";
import { useMeterReading } from "../services/hooks";
import { MeterReading as MeterReadingType } from "../services/types";

const MeterReading: React.FC = () => {
   const { data, isLoading, isError, error } = useMeterReading();

   const meterReadings: MeterReadingType[] = data || [];

   if (isLoading) return <div className="text-center py-4">Loading...</div>;
   if (isError)
      return (
         <div className="text-center py-4 text-red-500">
            Failed to fetch meter readings: {error.message}
         </div>
      );

   return (
      <div className="container mx-auto p-4">
         <h1 className="text-2xl font-bold mb-4">Meter Readings</h1>
         <table className="min-w-full bg-white border border-gray-300 rounded-lg">
            <thead>
               <tr className="w-full bg-gray-200 border-b border-gray-300">
                  <th className="py-2 px-4 text-left">Meter ID</th>
                  <th className="py-2 px-4 text-left">Reading</th>
                  <th className="py-2 px-4 text-left">Usage</th>
                  <th className="py-2 px-4 text-left">Timestamp</th>
               </tr>
            </thead>
            <tbody>
               {meterReadings.map((reading) => (
                  <tr key={reading.id}>
                     <td className="py-2 px-4 border-b border-gray-300">
                        {reading.meter.meter_id}
                     </td>
                     <td className="py-2 px-4 border-b border-gray-300">
                        {reading.reading}
                     </td>
                     <td className="py-2 px-4 border-b border-gray-300">
                        {reading.usage}
                     </td>
                     <td className="py-2 px-4 border-b border-gray-300">
                        {new Date(reading.timestamp).toLocaleString()}
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   );
};

export default MeterReading;
