import { Navigate, useLocation } from "react-router";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, loading } = useAuth();
  const location = useLocation();

  // Yükleme durumunda boş bir div göster
  if (loading) {
    return null;
  }

  // Giriş yapılmamışsa login'e yönlendir
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Giriş yapılmışsa içeriği göster
  return <>{children}</>;
}
