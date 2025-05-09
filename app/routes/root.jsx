import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router";
import { useEffect, useState } from "react";

export default function RootRedirect() {
  const { isAuthenticated, loading } = useAuth();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient || loading) return null;
  if (isAuthenticated) return <Navigate to="/dashboard" replace />;
  else return <Navigate to="/login" replace />;
} 