import React, { useState } from 'react';

const BottomFooter = () => {
  const [date] = useState(new Date());
  return (
    <div className="flex items-center pt-8">
      <div className="flex flex-grow">
        <span className="poppins text-gray-500">Credit to S.M.Abtahi Noor</span>
      </div>

      <div className="flex justify-end items-center space-x-6">
        <span className="poppins text-white cursor-pointer">
          @{date.getFullYear()} Spectram
        </span>
      </div>
    </div>
  );
};

export default BottomFooter;
