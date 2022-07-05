import React from 'react';
// import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom-v5-compat';

const FoodItem = ({ image, title, description, price, type }) => {
  const navigate = useNavigate();

  const handleRoute = () => {
    navigate(`/foods/${title}`);
  };
  return (
    <div className="bg-white border border-gray-100 transition  duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative">
      <span className="bg-green-100 border border-green-500 rounded-full text-primary text-sm poppins px-4 py-1 inline-block mb-4 ">
        {type}
      </span>
      <img
        className="w-64 mx-auto  transition duration-300 hover:scale-105"
        src={image}
        alt=""
      />
      <div className="flex flex-col items-center my-3 space-y-2">
        <h1 className="text-gray-900 poppins text-lg">{title}</h1>
        <p className="text-gray-500 poppins text-sm text-center">
          {description.slice(0, 50)}
        </p>
        <h2 className="text-gray-900 poppins text-2xl font-bold">${price}</h2>
        <button
          className="bg-primary text-white px-8 py-2 focus:outline-none poppins rounded-full mt-24  transition duration-300 hover:scale-105"
          onClick={handleRoute}>
          Order Now
        </button>
      </div>
    </div>
  );
};

export default FoodItem;
