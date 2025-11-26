"use client";
import { useState } from "react";

export default function DropdownMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 hover:bg-gray-100 rounded-full"
      >
        ⋮
      </button>

      {open && (
        <div className="absolute right-0 top-8 bg-white shadow-lg rounded-lg p-2 w-40 text-sm">
          <p className="p-2 hover:bg-gray-100 rounded">View details</p>
          <p className="p-2 hover:bg-gray-100 rounded">Edit transaction</p>
          <p className="p-2 hover:bg-gray-100 rounded">Completed</p>
          <p className="p-2 hover:bg-red-100 text-red-600 rounded">Cancel</p>
        </div>
      )}
    </div>
  );
}
