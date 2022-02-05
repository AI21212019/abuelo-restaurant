import React, { useState } from 'react';

const BottomFooter = () => {
  const [date] = useState(new Date());
  return (
    <div className="flex justify-center items-center pt-8">
      <div className="flex  items-center space-x-6">
        <span className="poppins text-white cursor-pointer">
          @{date.getFullYear()} Hector Quijada
        </span>
      </div>
    </div>
  );
};

export default BottomFooter;
