"use client";
import Image from "next/image";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

// TEMPORARY
const events = [
  {
    id: 1,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
  },
  {
    id: 1,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
  },
  {
    id: 1,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
  },
];

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="bg-white w-full p-3 rounded-md">
      {/* CALENDAR */}
      <Calendar onChange={onChange} value={value} />
      {/* EVENTS */}
      <div className="flex flex-col gap-5 py-4">
        <div className="flex justify-between items-center">
          <h2 className="font-semibold">Events</h2>
          <Image src="/moreDark.png" width={18} height={18} alt="more icon" />
        </div>
        {events.map((i) => (
          <div
            key={i.id}
            className="flex flex-col gap-2 p-4 border border-gray-100 rounded-md border-t-4 odd:border-t-lamaSky even:border-t-lameYellow"
          >
            <div className="flex justify-between items-center">
              <span className="text-sm font-semibold">{i.title}</span>
              <span className="text-xs text-gray-300">{i.time}</span>
            </div>
            <p className="text-sm text-gray-400">{i.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;
