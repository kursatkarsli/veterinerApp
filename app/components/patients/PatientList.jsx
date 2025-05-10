import React from "react";
import Card from "../Card";
import Button from "../Button";

const PatientList = ({
  patients,
  onPatientSelect,
  onDelete,
  getStatusBadge,
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {patients.map((patient) => (
        <Card
          key={patient.id}
          className="hover:shadow-lg transition-shadow duration-200 cursor-pointer"
          onClick={() => onPatientSelect(patient)}
          header={
            <div className="flex items-center justify-between">
              <span className="text-2xl">
                {patient.species === "Köpek"
                  ? "🐕"
                  : patient.species === "Kedi"
                  ? "🐱"
                  : "🐦"}
              </span>
              {getStatusBadge(patient.status)}
            </div>
          }
          footer={
            <div className="flex justify-end">
              <Button
                variant="danger"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  onDelete(patient.id);
                }}
              >
                Sil
              </Button>
            </div>
          }
        >
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-800">
              {patient.name}
            </h3>
            <p className="text-sm text-gray-600">Sahibi: {patient.owner}</p>
            <p className="text-sm text-gray-600">
              Son Ziyaret: {patient.lastVisit}
            </p>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default PatientList;
