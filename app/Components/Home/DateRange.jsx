import { Calendar } from "lucide-react";


export function DateRange() {
return (
<div className="flex items-center gap-2 bg-white shadow px-4 py-2 rounded-xl">
<Calendar size={18} />
<span>Feb 15, 2022 - Feb 21, 2022</span>
</div>
);
}