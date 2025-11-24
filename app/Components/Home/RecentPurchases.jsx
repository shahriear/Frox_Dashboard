export default function RecentPurchases() {
return (
<div className="bg-white shadow rounded-xl p-4">
<h2 className="font-semibold mb-4">Recent Purchases</h2>
<div className="overflow-x-auto">
<table className="w-full text-left">
<thead>
<tr className="text-gray-500 text-sm">
<th className="p-2">Product</th>
<th className="p-2">Order ID</th>
<th className="p-2">Date</th>
<th className="p-2">Customer</th>
<th className="p-2">Status</th>
<th className="p-2">Amount</th>
</tr>
</thead>
<tbody>
{[1, 2, 3, 4].map((i) => (
<tr key={i} className="border-t text-sm">
<td className="p-2">Product {i}</td>
<td className="p-2">#2543{i}</td>
<td class="p-2">Aug 5th, 2021</td>
<td class="p-2">Customer {i}</td>
<td class="p-2">Delivered</td>
<td class="p-2">$400</td>
</tr>
))}
</tbody>
</table>
</div>
</div>
);
}