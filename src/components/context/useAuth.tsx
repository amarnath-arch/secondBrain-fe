import React, { createContext, useContext, useEffect, useState } from "react";
import Auth from "../pages/Auth";

export interface AuthContextType {
  isLoggedIn: boolean;
  logIn: (token: string) => void;
  logOut: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setLoggedIn] = useState<boolean | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setLoggedIn(!!token);
  }, []);

  function logOut() {
    localStorage.removeItem("token");
    setLoggedIn(false);
  }

  function logIn(token: string) {
    localStorage.setItem("token", token);
    setLoggedIn(true);
    alert("token set successfully");
  }

  if (isLoggedIn === null) return null;

  return (
    <AuthContext.Provider value={{ isLoggedIn, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used inside an AuthProvider");
  }
  return context;
}
