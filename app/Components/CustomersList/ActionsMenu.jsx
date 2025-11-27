"use client";
import { useEffect, useRef } from "react";


export default function ActionsMenu({ open, onToggle, closeMenu }) {
const menuRef = useRef(null);


useEffect(() => {
const close = (e) => {
if (menuRef.current && !menuRef.current.contains(e.target)) {
closeMenu();
}
};
document.addEventListener("mousedown", close);
return () => document.removeEventListener("mousedown", close);
}, [closeMenu]);


return (
<div className="relative inline-block" ref={menuRef}>
<button
onClick={onToggle}
className="p-2 hover:bg-gray-200 dark:hover:bg-slate-600 dark:bg-slate-600 rounded-full transition-colors duration-300"
>
⋮
</button>


{open && (
<div className="absolute right-0 top-8 bg-white dark:bg-slate-700 border shadow-md rounded-lg w-40 text-sm z-50 transition-colors duration-300">
<button className="block w-full text-left p-2 hover:bg-gray-100 dark:hover:bg-slate-700 dark:bg-slate-700 transition-colors duration-300">
View details
</button>
<button className="block w-full text-left p-2 hover:bg-gray-100 dark:hover:bg-slate-700 dark:bg-slate-700 transition-colors duration-300">
Send message
</button>
<button className="block w-full text-left p-2 hover:bg-gray-100 dark:hover:bg-slate-700 dark:bg-slate-700 transition-colors duration-300">
Contact
</button>
<button className="block w-full text-left p-2 text-red-600 hover:bg-red-100 transition-colors duration-300">
Delete
</button>
</div>
)}
</div>
);
}