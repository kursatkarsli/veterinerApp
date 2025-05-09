import { useState } from "react";
import Button from "../components/Button";
import PatientList from "../components/patients/PatientList";
import PatientModal from "../components/patients/PatientModal";
import AddPatientModal from "../components/patients/AddPatientModal";

const initialPatients = [
  {
    id: 1,
    name: "Max",
    species: "Köpek",
    owner: "Ali Veli",
    lastVisit: "2024-05-01",
  },
  {
    id: 2,
    name: "Mırmır",
    species: "Kedi",
    owner: "Ayşe Fatma",
    lastVisit: "2024-04-20",
  },
  {
    id: 3,
    name: "Boncuk",
    species: "Kuş",
    owner: "Mehmet Can",
    lastVisit: "2024-03-15",
  },
];

export default function Patients() {
  const [patients, setPatients] = useState(initialPatients);
  const [selected, setSelected] = useState(null);
  const [showAdd, setShowAdd] = useState(false);

  const handleAddPatient = (patient) => {
    setPatients((prev) => [...prev, patient]);
  };

  const handleDeletePatient = (patientId) => {
    setPatients((prev) => prev.filter((patient) => patient.id !== patientId));
  };

  return (
    <div className="p-4">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Hastalar
        </h1>
        <Button
          variant="primary"
          onClick={() => setShowAdd(true)}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
          }
        >
          Yeni Hasta Ekle
        </Button>
      </div>

      <PatientList
        patients={patients}
        onPatientSelect={setSelected}
        onDelete={handleDeletePatient}
      />

      {selected && (
        <PatientModal patient={selected} onClose={() => setSelected(null)} />
      )}
      {showAdd && (
        <AddPatientModal
          onSave={handleAddPatient}
          onClose={() => setShowAdd(false)}
        />
      )}
    </div>
  );
}
