import React, { useState } from 'react';
import { BsCart2 } from 'react-icons/bs';
import { FiLogOut } from 'react-icons/fi';
import { NavLink, useNavigate } from 'react-router-dom-v5-compat';
import logo from '../../assets/logo2.png';
import { useOrder } from '../../contexts/OrderProvider';
// import useAuth from '../../hooks/useAuth';

const Navbar = () => {
  const [changeHeader, setChangeHeader] = useState(false);
  const navigate = useNavigate();
  // const { user } = useAuth();
  const [user, setUser] = useState(null);
  const order = useOrder();

  //header change function
  const onChangeHeader = () => {
    if (window.scrollY >= 50) {
      setChangeHeader(true);
    } else {
      setChangeHeader(false);
    }
  };

  //change header by scrolling
  window.addEventListener('scroll', onChangeHeader);
  return (
    <header
      className={
        changeHeader
          ? 'bg-white fixed z-50 top-0 left-0 w-full shadow-md transition duration-500'
          : 'bg-transparent fixed z-50 top-0 left-0 w-full transition duration-500'
      }>
      <nav className="flex items-center max-w-screen-xl mx-auto px-6 py-3">
        {/* left  */}
        <div className="flex flex-grow">
          <img
            className="w-36 cursor-pointer"
            src={logo}
            alt="logo"
            onClick={() => navigate('/')}
          />
        </div>
        {/* right  */}
        {user ? (
          <>
            <div className="flex items-center justify-end space-x-4">
              <NavLink end to="/admin" className="text-gray-600" />

              <div
                className="relative flex cursor-pointer"
                onClick={() => navigate('/orders')}>
                <span className="bg-primary w-6 h-6 rounded-full flex items-center justify-center text-white poppins absolute -right-2 -top-2">
                  {order.length}
                </span>
                <BsCart2 className="cursor-pointer w-6 h-6 text-gray-700" />
              </div>
              <p className="text-gray-700 poppins hidden md:block lg:block">
                {user.displayName}
              </p>
              <FiLogOut
                className="cursor-pointer w-6 h-6 text-gray-700"
                onClick={signOutUser}
              />
            </div>
          </>
        ) : (
          <>
            <div className="flex items-center justify-end space-x-6">
              <button
                className="bg-primary px-6 py-3 text-white poppins rounded-full ring-green-500 focus:outline-none focus:ring-4  transition duration-700 hover:scale-105 "
                onClick={() => navigate('/signin')}>
                Sign In
              </button>
              <button
                className=" bg-primary px-6 py-3 text-white poppins rounded-full ring-green-500 focus:outline-none focus:ring-4  transition duration-700 hover:scale-105"
                onClick={() => navigate('/signup')}>
                Sign Up
              </button>
            </div>
          </>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
