"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
const AuthContext = createContext();
import { authClient } from "@/lib/auth-client";

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const loadSession = async () => {
      setLoading(true);
      const { data } = await authClient.getSession();
      if (isMounted) {
        setSession(data.user ?? null);
      }
      setLoading(false);
    };

    loadSession();

    return () => {
      isMounted = false;
    };
  }, []);

  console.log("Current session:", session);

  return (
    <AuthContext.Provider value={{ session, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
