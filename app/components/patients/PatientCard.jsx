import React from "react";
import Button from "../Button";
import { cardStyles } from "../../config/styles";

const PatientCard = ({ patient, onClick, onDelete }) => {
  const getEmoji = (species) => {
    switch (species) {
      case "Köpek":
        return "🐶";
      case "Kedi":
        return "🐱";
      default:
        return "🐦";
    }
  };

  const handleDelete = (e) => {
    e.stopPropagation(); // Kart tıklamasını engelle
    if (
      window.confirm(
        `${patient.name} isimli hastayı silmek istediğinize emin misiniz?`
      )
    ) {
      onDelete(patient.id);
    }
  };

  return (
    <div
      className={`${cardStyles.base} flex flex-col items-center cursor-pointer border border-gray-100 dark:border-gray-700 group relative`}
      onClick={() => onClick(patient)}
    >
      <Button
        variant="danger"
        className="absolute top-2 right-2 !p-1 !shadow-none hover:!scale-100 opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={handleDelete}
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        }
      />
      <div className="w-16 h-16 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center text-3xl mb-3 border-4 border-primary-200 dark:border-primary-800 group-hover:scale-105 transition-transform">
        {getEmoji(patient.species)}
      </div>
      <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
        {patient.name}
      </h2>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
        {patient.species}
      </p>
      <div className="text-xs text-gray-700 dark:text-gray-300 w-full">
        <div>
          <span className="font-medium">Sahibi:</span> {patient.owner}
        </div>
        <div>
          <span className="font-medium">Son Ziyaret:</span> {patient.lastVisit}
        </div>
      </div>
    </div>
  );
};

export default PatientCard;
