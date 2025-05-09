import React from "react";
import PatientCard from "./PatientCard";

const PatientList = ({ patients, onPatientSelect, onDelete }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {patients.map((patient) => (
        <PatientCard
          key={patient.id}
          patient={patient}
          onClick={onPatientSelect}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default PatientList;
