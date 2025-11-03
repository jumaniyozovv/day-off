import React, { useContext } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { LeaveContext } from "../context/LeaveContext";

// ✅ To‘g‘ri CSS importlar (yangicha yo‘l)
// import "@fullcalendar/react/dist/vdom";
// import "@fullcalendar/daygrid/index.css";

const CalendarPage = () => {
  const { leaves } = useContext(LeaveContext);

  const events = leaves.map((leave) => ({
    title: `${leave.type}`,
    start: leave.startDate,
    end: new Date(
      new Date(leave.endDate).setDate(new Date(leave.endDate).getDate() + 1)
    ),
    color:
      leave.type === "Vacation"
        ? "#22c55e"
        : leave.type === "Sick Leave"
        ? "#facc15"
        : leave.type === "Paid Leave"
        ? "#3b82f6"
        : "#9ca3af",
  }));

  return (
    <div className="min-h-[80vh] w-full flex items-center justify-center bg-gray-50 px-6">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full mx-auto">
        <h1 className="text-2xl font-bold text-gray-700 mb-6 ">
          Month Overview
        </h1>

        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          events={events}
          height="80vh"
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "",
          }}
          displayEventTime={false}
        />
      </div>
    </div>
  );
};

export default CalendarPage;
