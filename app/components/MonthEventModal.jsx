import React, { useState } from "react";
import Modal from "./Modal";
import Button from "./Button";

export default function MonthEventModal({
  open,
  onClose,
  onSave,
  initialDate,
}) {
  const [form, setForm] = useState({
    date: initialDate ? initialDate.toISOString().slice(0, 10) : "",
    time: "09:00",
    title: "",
    description: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedDateTime = new Date(`${form.date}T${form.time}`);
    if (selectedDateTime < new Date()) {
      setError("Geçmiş bir tarihe etkinlik ekleyemezsiniz.");
      return;
    }
    setError("");
    onSave(form);
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose} title="Yeni Etkinlik (Aylık)">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Gün</label>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Saat</label>
          <input
            type="time"
            name="time"
            value={form.time}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Başlık</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Açıklama</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            rows={3}
          />
        </div>
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
    </Modal>
  );
}
