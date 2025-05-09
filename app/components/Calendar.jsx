import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import tr from "date-fns/locale/tr";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";
import Modal from "./Modal";

const locales = {
  tr: tr,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 1 }),
  getDay,
  locales,
});

const initialEvents = [
  {
    title: "Kedi Aşı Randevusu",
    start: new Date(2024, 5, 25, 10, 0),
    end: new Date(2024, 5, 25, 11, 0),
  },
  {
    title: "Köpek Kontrol",
    start: new Date(2024, 5, 25, 13, 30),
    end: new Date(2024, 5, 25, 14, 30),
  },
  {
    title: "Muhabbet Kuşu Muayene",
    start: new Date(2024, 5, 26, 9, 0),
    end: new Date(2024, 5, 26, 10, 0),
  },
];

export default function VetCalendar() {
  const [view, setView] = useState("week");
  const [events, setEvents] = useState(initialEvents);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState(null); // 'add' | 'detail'
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [newTitle, setNewTitle] = useState("");

  // Slot seçimiyle yeni event ekleme
  const handleSelectSlot = ({ start, end }) => {
    setSelectedSlot({ start, end });
    setNewTitle("");
    setModalType("add");
    setModalOpen(true);
  };

  // Event'e tıklayınca detay göster
  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    setModalType("detail");
    setModalOpen(true);
  };

  // Modal'da event ekle
  const handleAddEvent = (e) => {
    e.preventDefault();
    if (newTitle && selectedSlot) {
      setEvents([
        ...events,
        { start: selectedSlot.start, end: selectedSlot.end, title: newTitle },
      ]);
      setModalOpen(false);
      setSelectedSlot(null);
      setNewTitle("");
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-card p-4 w-full">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, width: "100%" }}
        className="w-full"
        views={["day", "week", "month"]}
        view={view}
        onView={setView}
        defaultView="week"
        culture="tr"
        selectable
        onSelectSlot={handleSelectSlot}
        onSelectEvent={handleSelectEvent}
        messages={{
          week: "Hafta",
          day: "Gün",
          month: "Ay",
          today: "Bugün",
          previous: "Geri",
          next: "İleri",
        }}
      />
      {/* Modal: Randevu Ekle */}
      <Modal
        open={modalOpen && modalType === "add"}
        onClose={() => setModalOpen(false)}
        title="Yeni Randevu Ekle"
        footer={
          <button
            className="w-full py-2 px-4 bg-vet-primary text-white rounded hover:bg-vet-secondary transition"
            onClick={handleAddEvent}
            disabled={!newTitle}
          >
            Kaydet
          </button>
        }
      >
        <form onSubmit={handleAddEvent} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Başlık</label>
            <input
              className="w-full border rounded px-3 py-2"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              required
              autoFocus
            />
          </div>
          {selectedSlot && (
            <div className="text-xs text-gray-500">
              {format(selectedSlot.start, "Pp", { locale: tr })} -{" "}
              {format(selectedSlot.end, "Pp", { locale: tr })}
            </div>
          )}
        </form>
      </Modal>
      {/* Modal: Event Detay */}
      <Modal
        open={modalOpen && modalType === "detail"}
        onClose={() => setModalOpen(false)}
        title="Randevu Detayı"
        footer={
          <button
            className="w-full py-2 px-4 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition"
            onClick={() => setModalOpen(false)}
          >
            Kapat
          </button>
        }
      >
        {selectedEvent && (
          <div>
            <div className="font-semibold mb-2">{selectedEvent.title}</div>
            <div className="text-xs text-gray-500">
              {format(selectedEvent.start, "Pp", { locale: tr })} -{" "}
              {format(selectedEvent.end, "Pp", { locale: tr })}
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
