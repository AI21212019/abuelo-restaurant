import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { CompatRouter, Routes, Route } from 'react-router-dom-v5-compat';
import AuthProvider from '../contexts/AuthProvider';
import RequireAuth from '../routes/PrivateRoute';
import AddProductScreen from './AddProductScreen';
import EditProductScreen from './EditProductScreen';
import ManageProductScreen from './ManageProductScreen';
import SideNav from './SideNav';

const Admin = () => {
  return (
    <Router>
      <AuthProvider>
        <main className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="col-span-1">
            <SideNav />
          </div>
          <div className="col-span-4 my-24 px-6">
            <Routes>
              <Route
                path="/admin/manage-products"
                element={<ManageProductScreen />}
              />

              <Route path="/admin/add" element={<AddProductScreen />} />

              <Route path="/admin/edit/:id" element={<EditProductScreen />} />
            </Routes>
          </div>
        </main>
      </AuthProvider>
    </Router>
  );
};

export default Admin;
