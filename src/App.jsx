import React from 'react';

import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { CompatRouter, CompatRoute } from 'react-router-dom-v5-compat';

import './config/firebase';
import Admin from './Admin/Admin';
import Navbar from './components/Navbar/Navbar';
import AuthProvider from './contexts/AuthProvider';
import DeliveryProvider from './contexts/DeliveryProvider';
import OrderProvider from './contexts/OrderProvider';
import PrivateRoute from './routes/PrivateRoute';
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
      <Router>
        <CompatRouter>
          <OrderProvider>
            <DeliveryProvider>
              <Navbar />
              <Switch>
                <CompatRoute exact path="/" component={HomeScreen} />

                <PublicRoute path="/signin">
                  <SignInScreen />
                </PublicRoute>
                <PublicRoute path="/signup">
                  <SignUpScreen />
                </PublicRoute>
                <PrivateRoute path="/foods/:title">
                  <FoodDetailScreen />
                </PrivateRoute>
                <PrivateRoute path="/orders">
                  <PlaceOrderScreen />
                </PrivateRoute>
                <PrivateRoute path="/order-successful">
                  <OrderSuccessfulScreen />
                </PrivateRoute>
                <PrivateRoute path="/admin">
                  <Admin />
                </PrivateRoute>
                <CompatRoute path="*" component={ErrorScreen} />
              </Switch>
            </DeliveryProvider>
          </OrderProvider>
        </CompatRouter>
      </Router>
    </AuthProvider>
  );
};

export default App;
