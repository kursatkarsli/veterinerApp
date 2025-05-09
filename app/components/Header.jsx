export default function Header({ sidebarOpen, setSidebarOpen }) {
  return (
    <header className="flex items-center h-16 px-4 bg-white shadow-md sticky top-0 z-20">
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
    </header>
  );
} 