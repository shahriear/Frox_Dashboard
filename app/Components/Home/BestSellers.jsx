export default function BestSellers() {
return (
<div className="bg-white shadow rounded-xl p-4 h-80">
<h2 className="font-semibold mb-4">Best Sellers</h2>
<div className="space-y-4">
{[1, 2, 3, 4, 5].map((i) => (
<div className="flex justify-between items-center" key={i}>
<div>
<div className="font-semibold">Seller {i}</div>
<div className="text-sm text-gray-500">Category</div>
</div>
<div className="font-semibold">${(400 + i * 10).toFixed(2)}</div>
</div>
))}
</div>
</div>
);
}