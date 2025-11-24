export default function StatCard({ title, amount, percent }) {
return (
<div className="bg-white shadow rounded-xl p-4">
<div className="text-gray-500 text-sm">{title}</div>
<div className="text-2xl font-semibold mt-1">{amount}</div>
<div className="text-green-500 text-sm">+{percent}</div>
</div>
);
}
