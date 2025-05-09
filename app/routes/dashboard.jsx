import ProtectedRoute from "../components/ProtectedRoute";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router";
import { useState } from "react";
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

  return (
    <ProtectedRoute>
      <div className="min-h-screen flex bg-gray-100">
        {/* Sidebar */}

        {/* Main area */}
        <div className="flex-1 flex flex-col min-h-screen">
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

            <DashboardContent />
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
