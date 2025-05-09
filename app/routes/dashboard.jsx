import ProtectedRoute from "../components/ProtectedRoute";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Card from "../components/Card";

const cards = [
  {
    label: "Randevular",
    to: "/appointments",
    color: "bg-vet-card-blue",
    icon: "📅",
  },
  {
    label: "Hastalar",
    to: "/patients",
    color: "bg-vet-card-green",
    icon: "🐾",
  },
  {
    label: "Aşı Takibi",
    to: "/vaccines",
    color: "bg-vet-card-yellow",
    icon: "💉",
  },
  { label: "Raporlar", to: "/reports", color: "bg-vet-card-pink", icon: "📊" },
];

function DashboardContent() {
  return (
    <main className=" p-6 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card) => (
        <Card key={card.to} {...card} />
      ))}
    </main>
  );
}

export default function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleLogout = async () => {
    await Promise.resolve(logout());
    navigate("/login", { replace: true });
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen flex bg-gray-100">
        {/* Sidebar */}
        <div className="hidden md:block">
          <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
        </div>
        {/* Mobilde hamburger menü */}
        <div className="md:hidden fixed z-40">
          {sidebarOpen && (
            <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
          )}
        </div>
        {/* Main area */}
        <div className="flex-1 flex flex-col min-h-screen">
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <div className="flex-1 flex flex-col">
            <div className="flex justify-end items-center gap-4 px-6 py-2">
              <span className="text-gray-600 font-medium">{user?.email}</span>
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Çıkış Yap
              </button>
            </div>
            <DashboardContent />
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
