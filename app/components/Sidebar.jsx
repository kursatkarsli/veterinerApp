import { Link } from "react-router";

const menuItems = [
  { label: "Ana Sayfa", to: "/dashboard", icon: "🏠" },
  { label: "Randevular", to: "/appointments", icon: "📅" },
  { label: "Hastalar", to: "/patients", icon: "🐾" },
  { label: "Aşı Takibi", to: "/vaccines", icon: "💉" },
  { label: "Raporlar", to: "/reports", icon: "📊" },
];

export default function Sidebar({ open, setOpen }) {
  return (
    <aside
      className={`relative z-30 top-0 left-0 h-full bg-white shadow-lg transition-all duration-300 flex flex-col ${
        open ? "w-48" : "w-14"
      }`}
    >
      <div className="flex-1 flex flex-col gap-2 mt-8">
        {menuItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={`flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 transition-colors ${
              open ? "justify-start" : "justify-center"
            }`}
          >
            <span className="text-lg">{item.icon}</span>
            {open && (
              <span className="text-gray-700 font-medium text-sm">
                {item.label}
              </span>
            )}
          </Link>
        ))}
      </div>
      <button
        className="mb-4 mx-auto p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
        onClick={() => setOpen((v) => !v)}
        aria-label="Menüyü Aç/Kapat"
      >
        <span className="transition-transform duration-300">
          {open ? "⬅️" : "➡️"}
        </span>
      </button>
    </aside>
  );
}
