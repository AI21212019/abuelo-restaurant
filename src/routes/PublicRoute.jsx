import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
// import { useLocation } from 'react-router-dom-v5-compat';

const PublicRoute = ({ children, ...rest }) => {
  const { user } = useAuth();
  // const location = useLocation();
  return (
    <Route
      {...rest}
      children={({ location }) => {
        return !user.displayName ? children : <Redirect to="/" />;
      }}
    />
  );
};

export default PublicRoute;
