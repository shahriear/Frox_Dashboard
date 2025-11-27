"use client";
import ActionsMenu from "./ActionsMenu";


export default function CustomerRow({ customer, openMenu, setOpenMenu }) {
const isOpen = openMenu === customer.id;


return (
<tr className="border-b hover:bg-gray-50 dark:hover:bg-slate-800 dark:bg-slate-800 transition-colors duration-300">
<td className="p-3"><input type="checkbox" /></td>


<td className="p-3 font-semibold">{customer.name}</td>
<td className="p-3">{customer.email}</td>
<td className="p-3">{customer.phone}</td>
<td className="p-3">{customer.address}</td>


<td className="p-3">
<span
className={`inline-block h-3 w-3 rounded-full mr-2 ${
customer.status === "Online" ? "bg-green-500" : "bg-gray-400"
}`}
></span>
{customer.status}
</td>


<td className="p-3">{customer.joined}</td>


<td className="p-3">
<ActionsMenu
open={isOpen}
onToggle={() => setOpenMenu(isOpen ? null : customer.id)}
closeMenu={() => setOpenMenu(null)}
/>
</td>
</tr>
);
}