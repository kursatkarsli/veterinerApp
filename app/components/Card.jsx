import { Link } from "react-router";

export default function Card({ to, color, icon, label }) {
  return (
    <Link
      to={to}
      className={`rounded-lg max-h-52 shadow-card p-3 flex flex-col items-center justify-center 
        gap-1 text-base font-semibold text-gray-800
         hover:scale-105 transition-transform cursor-pointer font-sans ${color} centerize`}
      style={{ minHeight: 90 }}
    >
      <span className="text-2xl">{icon}</span>
      {label}
    </Link>
  );
}
