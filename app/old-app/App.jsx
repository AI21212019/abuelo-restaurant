import React from 'react';

import { Route, Routes } from 'react-router-dom';
import { Link, Outlet } from '@remix-run/react';
// import { CompatRouter, Route, Routes } from 'react-router-dom-v5-compat';

import './config/firebase';
import Admin from './Admin/Admin';
import Navbar from './components/Navbar/Navbar';
import AutoProvider from './contexts/AuthProvider';
import DeliveryProvider from './contexts/DeliveryProvider';
import OrderProvider from './contexts/OrderProvider';
import RequireAuth from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';
import ErrorScreen from './screens/ErrorScreen';
import FoodDetailScreen from './screens/FoodDetailScreen';
import HomeScreen from './screens/HomeScreen';
import OrderSuccessfulScreen from './screens/OrderSuccessfulScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';

const App = () => {
  return (
    <AuthProvider>
      <OrderProvider>
        <DeliveryProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomeScreen />} />

            <Route path="/signin" element={<SignInScreen />} />

            <Route path="/signup" element={<SignUpScreen />} />

            <Route path="/foods/:title" element={<FoodDetailScreen />} />

            <Route path="/orders" element={<PlaceOrderScreen />} />

            <Route
              path="/order-successful"
              element={<OrderSuccessfulScreen />}
            />

            <Route path="/admin" element={<Admin />} />

            <Route path="*" element={<ErrorScreen />} />
          </Routes>
        </DeliveryProvider>
      </OrderProvider>
    </AuthProvider>
  );
};

export default App;
