import React from 'react';

import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { CompatRouter, CompatRoute } from 'react-router-dom-v5-compat';

import './config/firebase';
import Admin from './Admin/Admin';
import Navbar from './components/Navbar/Navbar';
import AuthProvider from './contexts/AuthProvider';
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
      <Router>
        <CompatRouter>
          <OrderProvider>
            <DeliveryProvider>
              <Navbar />
              <Switch>
                <CompatRoute exact path="/" component={HomeScreen} />

                <CompatRoute path="/signin">
                  <SignInScreen />
                </CompatRoute>
                <CompatRoute path="/signup">
                  <SignUpScreen />
                </CompatRoute>
                <CompatRoute path="/foods/:title">
                  <FoodDetailScreen />
                </CompatRoute>
                <CompatRoute path="/orders">
                  <PlaceOrderScreen />
                </CompatRoute>
                <CompatRoute path="/order-successful">
                  <OrderSuccessfulScreen />
                </CompatRoute>
                <CompatRoute path="/admin">
                  <Admin />
                </CompatRoute>
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
