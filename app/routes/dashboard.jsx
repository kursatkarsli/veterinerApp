import ProtectedRoute from "../components/ProtectedRoute";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router";
import { useState } from "react";
import Card from "../components/Card";
import Badge from "../components/Badge";

const cards = [
  {
    label: "Randevular",
    to: "/appointments",
    variant: "vet.blue",
    icon: "📅",
    badge: "3 Yeni",
    badgeVariant: "primary",
  },
  {
    label: "Hastalar",
    to: "/patients",
    variant: "vet.green",
    icon: "🐾",
    badge: "Aktif",
    badgeVariant: "success",
  },
  {
    label: "Aşı Takibi",
    to: "/vaccines",
    variant: "vet.yellow",
    icon: "💉",
    badge: "2 Bekleyen",
    badgeVariant: "warning",
  },
  {
    label: "Raporlar",
    to: "/reports",
    variant: "vet.pink",
    icon: "📊",
    badge: "Güncel",
    badgeVariant: "info",
  },
];

function DashboardContent() {
  return (
    <main className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card) => (
        <Card
          key={card.to}
          variant={card.variant}
          className="hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1"
          header={
            <div className="flex items-center justify-between">
              <span className="text-2xl">{card.icon}</span>
              {card.badge && (
                <Badge variant={card.badgeVariant} size="sm">
                  {card.badge}
                </Badge>
              )}
            </div>
          }
        >
          <Link to={card.to} className="block">
            <h3 className="text-lg font-semibold text-gray-800">
              {card.label}
            </h3>
          </Link>
        </Card>
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
