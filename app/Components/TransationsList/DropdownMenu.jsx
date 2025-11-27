// "use client";
// import { useState } from "react";

// export default function DropdownMenu() {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className="relative">
//       <button
//         onClick={() => setOpen(!open)}
//         className="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 dark:bg-slate-700 rounded-full transition-colors duration-300"
//       >
//         ⋮
//       </button>

//       {open && (
//         <div className="absolute right-0 top-8 bg-white dark:bg-slate-700 shadow-lg rounded-lg p-2 w-40 text-sm transition-colors duration-300">
//           <p className="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 dark:bg-slate-700 rounded transition-colors duration-300">View details</p>
//           <p className="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 dark:bg-slate-700 rounded transition-colors duration-300">Edit transaction</p>
//           <p className="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 dark:bg-slate-700 rounded transition-colors duration-300">Completed</p>
//           <p className="p-2 hover:bg-red-100 text-red-600 rounded transition-colors duration-300">Cancel</p>
//         </div>
//       )}
//     </div>
//   );
// }

"use client";

import { useState, useEffect, useRef } from "react";

export default function DropdownMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // Handle open & close based on global event
  const toggle = () => {
    const isOpening = !open;

    // Dispatch custom global event
    window.dispatchEvent(
      new CustomEvent("close-all-dropdowns")
    );

    setOpen(isOpening);
  };

  // Close when other dropdowns open
  useEffect(() => {
    const handler = () => setOpen(false);
    window.addEventListener("close-all-dropdowns", handler);

    return () =>
      window.removeEventListener("close-all-dropdowns", handler);
  }, []);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={toggle}
        className="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 dark:bg-slate-700 rounded-full transition-colors duration-300"
      >
        ⋮
      </button>

      {open && (
        <div className="absolute right-0 top-8 bg-white dark:bg-slate-700 shadow-lg rounded-lg p-2 w-40 text-sm z-50 transition-colors duration-300">
          <p className="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 dark:bg-slate-700 rounded cursor-pointer transition-colors duration-300">View details</p>
          <p className="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 dark:bg-slate-700 rounded cursor-pointer transition-colors duration-300">Edit transaction</p>
          <p className="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 dark:bg-slate-700 rounded cursor-pointer transition-colors duration-300">Completed</p>
          <p className="p-2 hover:bg-red-100 text-red-600 rounded cursor-pointer transition-colors duration-300">Cancel</p>
        </div>
      )}
    </div>
  );
}
