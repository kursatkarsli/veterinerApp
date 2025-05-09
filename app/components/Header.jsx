import { useAuth } from "../context/AuthContext";

export default function Header({ sidebarOpen, setSidebarOpen }) {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    await Promise.resolve(logout());
    navigate("/login", { replace: true });
  };

  return (
    <header className="flex items-center h-16 px-4 bg-white shadow-md sticky top-0 z-20 justify-between">
      {/* Mobilde hamburger */}
      <button
        className="md:hidden mr-2 p-2 rounded bg-gray-100"
        onClick={() => setSidebarOpen((v) => !v)}
        aria-label="Menüyü Aç/Kapat"
      >
        <span>🍔</span>
      </button>
      <span className="font-bold text-xl text-blue-700 flex items-center gap-2">
        <img src="/vet-logo.png" alt="Veteriner Logo" className="w-8 h-8" />
        VetApp
      </span>
      <div className="flex justify-end items-center gap-4 px-6 py-2">
        <span className="text-gray-600 font-medium">{user?.email}</span>
        <button
          onClick={handleLogout}
          className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          Çıkış Yap
        </button>
      </div>
    </header>
  );
}
