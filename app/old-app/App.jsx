import React from 'react';

import { Route, Routes } from 'react-router-dom';
import { Link, Outlet } from '@remix-run/react';
// import { CompatRouter, Route, Routes } from 'react-router-dom-v5-compat';

import './config/firebase';
import Navbar from './components/Navbar/Navbar';
import AutoProvider from './contexts/AuthProvider';
import DeliveryProvider from './contexts/DeliveryProvider';
import OrderProvider from './contexts/OrderProvider';
import RequireAuth from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';

const App = () => {
  return (
    <AuthProvider>
      <OrderProvider>
        <DeliveryProvider>
          <Navbar />
        </DeliveryProvider>
      </OrderProvider>
    </AuthProvider>
  );
};

export default App;
