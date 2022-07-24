import React from 'react';
// import { Redirect, Route } from 'react-router-dom';
import { Route, Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
  const { user } = useAuth();

  return (
    <Route
      {...rest}
      children={({ location }) =>
        user.displayName ? (
          children
        ) : (
          <Navigate
            to={{
              pathname: '/signin',
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
