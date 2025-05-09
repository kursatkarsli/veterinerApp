import React from "react";
import Button from "../Button";
import { cardStyles } from "../../config/styles";

const PatientModal = ({ patient, onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-black/40 bg-opacity-40 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className={`${cardStyles.base} w-full max-w-md shadow-xl relative`}
        onClick={(e) => e.stopPropagation()}
      >
        <Button
          variant="secondary"
          className="absolute top-2 right-2 !p-1 !shadow-none hover:!scale-100"
          onClick={onClose}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          }
        />
        <h2 className={cardStyles.header}>{patient.name}</h2>
        <div className={cardStyles.body}>
          <div className="mb-2">
            <b>Tür:</b> {patient.species}
          </div>
          <div className="mb-2">
            <b>Sahibi:</b> {patient.owner}
          </div>
          <div className="mb-2">
            <b>Son Ziyaret:</b> {patient.lastVisit}
          </div>
        </div>
        <div className="mt-4 flex justify-end">
          <Button variant="secondary" onClick={onClose}>
            Kapat
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PatientModal;
