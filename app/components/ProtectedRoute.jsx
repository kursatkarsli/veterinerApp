import { Navigate, useLocation } from "react-router";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, loading } = useAuth();
  const location = useLocation();

  if (loading) return null;

  if (!isAuthenticated) {
    // Kullanıcı giriş yapmamışsa, login sayfasına yönlendir
    // state ile birlikte önceki sayfayı da gönder
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
} 