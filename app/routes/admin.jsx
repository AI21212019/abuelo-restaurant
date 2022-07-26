import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { CompatRouter, Routes, Route } from 'react-router-dom-v5-compat';
import AuthProvider from '../old-app/contexts/AuthProvider';
import RequireAuth from '../old-app/routes/PrivateRoute';
import AddProductScreen from '../old-app/Admin/AddProductScreen';
import EditProductScreen from '../old-app/Admin/EditProductScreen';
import ManageProductScreen from '../old-app/Admin/ManageProductScreen';
import SideNav from '../old-app/Admin/SideNav';

const Admin = () => {
  return (
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
  );
};

export default Admin;
