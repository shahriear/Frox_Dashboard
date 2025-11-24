"use client";

import { useState, useEffect } from "react";
import { Calendar } from "lucide-react";

export function DateRange() {
  const [dateRange, setDateRange] = useState("");

  useEffect(() => {
    const today = new Date();
    const priorDate = new Date().setDate(today.getDate() - 6); // 7-day range
    const startDate = new Date(priorDate);

    const options = { year: "numeric", month: "short", day: "numeric" };
    const formattedStart = startDate.toLocaleDateString("en-US", options);
    const formattedEnd = today.toLocaleDateString("en-US", options);

    setDateRange(`${formattedStart} - ${formattedEnd}`);
  }, []);

  return (
    <div className="flex items-center gap-2 bg-white shadow px-4 py-2 rounded-xl">
      <Calendar size={18} />
      <span>{dateRange}</span>
    </div>
  );
}
