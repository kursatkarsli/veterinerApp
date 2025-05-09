import React, { useState } from "react";
import Button from "../Button";
import FloatingInput from "../FloatingInput";
import FloatingSelect from "../FloatingSelect";
import { cardStyles } from "../../config/styles";

const speciesOptions = [
  { value: "Köpek", label: "Köpek" },
  { value: "Kedi", label: "Kedi" },
  { value: "Kuş", label: "Kuş" },
];

const AddPatientModal = ({ onSave, onClose }) => {
  const [form, setForm] = useState({
    name: "",
    species: "Köpek",
    owner: "",
    lastVisit: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.owner.trim() || !form.lastVisit.trim()) {
      setError("Lütfen tüm alanları doldurun.");
      return;
    }
    onSave({ ...form, id: Date.now() });
    onClose();
  };

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
        <h2 className={cardStyles.header}>Yeni Hasta Ekle</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <FloatingInput
            label="Hasta Adı"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <FloatingSelect
            label="Hayvan Türü"
            name="species"
            value={form.species}
            onChange={handleChange}
            options={speciesOptions}
            required
          />
          <FloatingInput
            label="Sahip Adı"
            name="owner"
            value={form.owner}
            onChange={handleChange}
            required
          />
          <FloatingInput
            label="Son Muayene Tarihi"
            name="lastVisit"
            type="date"
            value={form.lastVisit}
            onChange={handleChange}
            required
          />
          {error && <div className="text-red-500 text-sm">{error}</div>}
          <div className="flex justify-end gap-2 mt-2">
            <Button type="button" variant="secondary" onClick={onClose}>
              Vazgeç
            </Button>
            <Button type="submit" variant="primary">
              Kaydet
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPatientModal;
