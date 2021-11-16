import React, { createContext } from "react";
import useFirebase from "../hooks/useFirebase";

export const AllContext = createContext();
const AuthProvider = ({ children }) => {
  const authContext = useFirebase();
  return (
    <AllContext.Provider value={authContext}>{children}</AllContext.Provider>
  );
};

export default AuthProvider;
