import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { CompatRouter, CompatRoute } from 'react-router-dom-v5-compat';
import AuthProvider from '../contexts/AuthProvider';
import PrivateRoute from '../routes/PrivateRoute';
import AddProductScreen from './AddProductScreen';
import EditProductScreen from './EditProductScreen';
import ManageProductScreen from './ManageProductScreen';
import SideNav from './SideNav';

const Admin = () => {
  return (
    <Router>
      <CompatRouter>
        <AuthProvider>
          <main className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-5 gap-10">
            <div className="col-span-1">
              <SideNav />
            </div>
            <div className="col-span-4 my-24 px-6">
              <Switch>
                <PrivateRoute exact path="/admin/manage-products">
                  <ManageProductScreen />
                </PrivateRoute>
                <PrivateRoute exact path="/admin/add">
                  <AddProductScreen />
                </PrivateRoute>
                <PrivateRoute exact path="/admin/edit/:id">
                  <EditProductScreen />
                </PrivateRoute>
              </Switch>
            </div>
          </main>
        </AuthProvider>
      </CompatRouter>
    </Router>
  );
};

export default Admin;
