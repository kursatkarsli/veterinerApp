import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import tr from "date-fns/locale/tr";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";

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

// Örnek randevu verisi
const events = [
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
        messages={{
          week: "Hafta",
          day: "Gün",
          month: "Ay",
          today: "Bugün",
          previous: "Geri",
          next: "İleri",
        }}
      />
    </div>
  );
}
