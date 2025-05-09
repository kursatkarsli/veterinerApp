import VetCalendar from "../components/Calendar";

export default function Appointments() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6 text-vet-primary">Randevular</h1>
      <VetCalendar />
    </div>
  );
}
