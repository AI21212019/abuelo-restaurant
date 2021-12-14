import React from 'react';

const AboutItem = ({ id, image, icon, title, description }) => {
  return (
    <div className="bg-white  transition duration-700 hover:scale-105 p-6 rounded-2xl hover:shadow-xl">
      {/* image  */}
      <div className=" aspect-w-16 aspect-h-9 lg:aspect-none overflow-hidden rounded-2xl grow">
        <img
          className=" transition duration-700 hover:scale-125"
          src={image}
          alt={title}
        />
      </div>
      {/* other info  */}
      <div className=" mt-6 space-x-3 ">
        {/* icon  */}
        <div>
          <img src={icon} alt={title} className="w-36" />
        </div>
        {/* description  */}
        <div className="flex flex-col space-y-3">
          <h1 className="text-xl text-gray-800 poppins">{title}</h1>
          <p className="text-sm text-gray-500 poppins">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutItem;
