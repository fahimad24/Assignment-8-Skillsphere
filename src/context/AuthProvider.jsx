"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
const AuthContext = createContext();
import { authClient } from "@/lib/auth-client";

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const userData = authClient.useSession();
  const session = userData.data?.user;

  //   LogOut session
  const logOut = async () => {
    await authClient.signOut();
  };

  return (
    <AuthContext.Provider
      value={{ session, loading: userData?.isPending, logOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
