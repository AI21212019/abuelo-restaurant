import React from 'react';

const BottomFooter = () => {
  return (
    <div className="flex items-center pt-8">
      <div className="flex flex-grow">
        <span className="poppins text-gray-500">
          Developed by H.Q., an inspiration from S.M.Abtahi Noor
        </span>
      </div>

      <div className="flex justify-end items-center space-x-6">
        <span className="poppins text-white cursor-pointer">
          Spectram @2021
        </span>
        <span className="poppins text-white cursor-pointer">Terms of Use</span>
        <span className="poppins text-white cursor-pointer">Pricing</span>
      </div>
    </div>
  );
};

export default BottomFooter;
