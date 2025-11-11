import { Navigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";
import type React from "react";

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return <Navigate to={"/"} />;
  }

  return children;
}
