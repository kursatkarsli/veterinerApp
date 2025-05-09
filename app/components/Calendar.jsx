import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import tr from "date-fns/locale/tr";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";
import Modal from "./Modal";
import { addDays, format as formatDate } from "date-fns";

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
    id: 1,
    title: "Kedi Aşı Randevusu",
    start: new Date(2024, 5, 25, 10, 0),
    end: new Date(2024, 5, 25, 11, 0),
  },
  {
    id: 2,
    title: "Köpek Kontrol",
    start: new Date(2024, 5, 25, 13, 30),
    end: new Date(2024, 5, 25, 14, 30),
  },
  {
    id: 3,
    title: "Muhabbet Kuşu Muayene",
    start: new Date(2024, 5, 26, 9, 0),
    end: new Date(2024, 5, 26, 10, 0),
  },
];

function CustomEvent({ event }) {
  return (
    <div
      style={{
        background: "#2563eb",
        color: "#fff",
        borderRadius: 4,
        width: "90%",
        left: "5%",
        position: "relative",
        minHeight: 16,
        maxHeight: 20,
        marginBottom: 2,
        zIndex: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "0.75rem",
        padding: "0 2px",
      }}
      className="text-xs"
    >
      {event.title}
    </div>
  );
}

function CustomToolbar({ view, onView, date, onNavigate }) {
  // Tarih başlığı
  let label = "";
  if (view === "day") {
    label = formatDate(date, "d MMMM yyyy", { locale: tr });
  } else if (view === "week") {
    const weekStart = startOfWeek(date, { weekStartsOn: 1 });
    const start = formatDate(weekStart, "d MMMM", { locale: tr });
    const end = formatDate(addDays(weekStart, 6), "d MMMM yyyy", {
      locale: tr,
    });
    label = `${start} - ${end}`;
  } else if (view === "agenda") {
    const start = formatDate(date, "d MMMM", { locale: tr });
    const end = formatDate(addDays(date, 7), "d MMMM yyyy", { locale: tr });
    label = `${start} - ${end}`;
  } else if (view === "month") {
    label = formatDate(date, "MMMM yyyy", { locale: tr });
  }

  // Navigasyon fonksiyonları
  const handleToday = () => onNavigate("TODAY");
  const handlePrev = () => onNavigate("PREV");
  const handleNext = () => onNavigate("NEXT");

  return (
    <div className="flex justify-between items-center mb-4">
      <div className="flex gap-2 items-center">
        <button
          onClick={handlePrev}
          className="px-2 py-1 rounded bg-gray-100 hover:bg-gray-200"
        >
          ←
        </button>
        <button
          onClick={handleToday}
          className="px-2 py-1 rounded bg-gray-100 hover:bg-gray-200"
        >
          Bugün
        </button>
        <button
          onClick={handleNext}
          className="px-2 py-1 rounded bg-gray-100 hover:bg-gray-200"
        >
          →
        </button>
        <span className="ml-4 text-lg font-semibold text-gray-700">
          {label}
        </span>
      </div>
      <div className="flex gap-2">
        <button
          className={`px-3 py-1 rounded ${
            view === "day" ? "bg-vet-primary text-white" : "bg-gray-100"
          }`}
          onClick={() => onView("day")}
        >
          Gün
        </button>
        <button
          className={`px-3 py-1 rounded ${
            view === "week" ? "bg-vet-primary text-white" : "bg-gray-100"
          }`}
          onClick={() => onView("week")}
        >
          Hafta
        </button>
        {/* <button
          className={`px-3 py-1 rounded ${
            view === "month" ? "bg-vet-primary text-white" : "bg-gray-100"
          }`}
          onClick={() => onView("month")}
        >
          Ay
        </button> */}
        <button
          className={`px-3 py-1 rounded ${
            view === "agenda" ? "bg-vet-primary text-white" : "bg-gray-100"
          }`}
          onClick={() => onView("agenda")}
        >
          Ajanda
        </button>
      </div>
    </div>
  );
}

export default function VetCalendar() {
  const [view, setView] = useState("week");
  const [events, setEvents] = useState(initialEvents);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState(null); // 'add' | 'detail' | 'edit'
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [newTitle, setNewTitle] = useState("");
  const [viewDate, setViewDate] = useState(new Date());

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
    e && e.preventDefault && e.preventDefault();
    if (newTitle && selectedSlot) {
      setEvents([
        ...events,
        {
          id: Date.now() + Math.random(),
          start: selectedSlot.start,
          end: selectedSlot.end,
          title: newTitle,
        },
      ]);
      setModalOpen(false);
      setSelectedSlot(null);
      setNewTitle("");
    }
  };

  // Event sil
  const handleDeleteEvent = () => {
    setEvents(events.filter((ev) => ev.id !== selectedEvent.id));
    setModalOpen(false);
    setSelectedEvent(null);
  };

  // Edit moduna geç
  const handleEditEvent = () => {
    setNewTitle(selectedEvent.title);
    setModalType("edit");
  };

  // Event güncelle
  const handleUpdateEvent = (e) => {
    e.preventDefault();
    setEvents((prev) =>
      prev.map((ev) =>
        ev.id === selectedEvent.id ? { ...ev, title: newTitle } : ev
      )
    );
    setModalOpen(false);
    setSelectedEvent(null);
    setNewTitle("");
  };

  // Navigasyon fonksiyonunu react-big-calendar'ın beklediği şekilde güncelle
  const handleNavigate = (newDate) => {
    console.log(newDate);
    setViewDate(newDate);
  };

  return (
    <div className="bg-white rounded-lg shadow-card p-4 w-full">
      <Calendar
        components={{
          event: CustomEvent,
          toolbar: CustomToolbar,
        }}
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, width: "100%" }}
        className="w-full"
        views={["day", "week", "agenda"]}
        view={view}
        onView={setView}
        defaultView="week"
        culture="tr"
        selectable
        onSelectSlot={handleSelectSlot}
        onSelectEvent={handleSelectEvent}
        date={viewDate}
        onNavigate={handleNavigate}
        length={7}
        messages={{
          week: "Hafta",
          day: "Gün",
          agenda: "Ajanda",
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
      <Modal
        open={modalOpen && modalType === "detail"}
        onClose={() => setModalOpen(false)}
        title="Randevu Detayı"
        footer={
          <div className="flex gap-2">
            <button
              className="flex-1 py-2 px-4 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition"
              onClick={() => setModalOpen(false)}
            >
              Kapat
            </button>
            <button
              className="flex-1 py-2 px-4 bg-vet-primary text-white rounded hover:bg-vet-secondary transition"
              onClick={handleEditEvent}
            >
              Düzenle
            </button>
            <button
              className="flex-1 py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600 transition"
              onClick={handleDeleteEvent}
            >
              Sil
            </button>
          </div>
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
      {/* Modal: Event Düzenle */}
      <Modal
        open={modalOpen && modalType === "edit"}
        onClose={() => setModalOpen(false)}
        title="Randevu Düzenle"
        footer={
          <button
            className="w-full py-2 px-4 bg-vet-primary text-white rounded hover:bg-vet-secondary transition"
            onClick={handleUpdateEvent}
            disabled={!newTitle}
          >
            Kaydet
          </button>
        }
      >
        <form onSubmit={handleUpdateEvent} className="space-y-4">
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
          {selectedEvent && (
            <div className="text-xs text-gray-500">
              {format(selectedEvent.start, "Pp", { locale: tr })} -{" "}
              {format(selectedEvent.end, "Pp", { locale: tr })}
            </div>
          )}
        </form>
      </Modal>
    </div>
  );
}
