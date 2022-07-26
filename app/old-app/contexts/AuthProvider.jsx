import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';

//create an auth context
export const AuthContext = createContext('defaultValue');

export default function AuthProvider({ children }) {
  let authData = useFirebase();

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
}
