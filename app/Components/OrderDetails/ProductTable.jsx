const products = [
  { img: "/photos/Avatar.png", name: "Bose noise cancelling", price: 948.55, qty: 2, total: 630.44 },
  { img: "/photos/Avatar.png", name: "Philips wireless headphone", price: 767.50, qty: 3, total: 767.50 },
  { img: "/photos/Avatar.png", name: "Cumitt smart watch", price: 396.84, qty: 1, total: 475.22 },
  { img: "/photos/Avatar.png", name: "Google Pixel Buds", price: 778.35, qty: 4, total: 293.01 },
];

export default function ProductTable() {
  return (
    <div className="mt-8">
      <h3 className="font-semibold mb-4 text-lg text-gray-900 dark:text-gray-100 transition-colors duration-300">Products</h3>

      <table className="w-full text-left bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-sm transition-colors duration-300">
        <thead>
          <tr className="border-b border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-700 transition-colors duration-300">
            <th className="text-gray-700 dark:text-gray-300"></th>
            <th className="text-gray-700 dark:text-gray-300 p-3">Product Name</th>
            <th className="text-gray-700 dark:text-gray-300 p-3">Price</th>
            <th className="text-gray-700 dark:text-gray-300 p-3">Quantity</th>
            <th className="text-gray-700 dark:text-gray-300 p-3">Total</th>
          </tr>
        </thead>

        <tbody>
          {products.map((p, i) => (
            <tr key={i} className="border-b border-gray-200 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors duration-300">
              <td className="p-3"><input type="checkbox" /></td>
              <td className="py-3 px-3 flex items-center gap-3 text-gray-900 dark:text-gray-100">
                <img src={p.img} className="w-10 h-10 rounded" />
                {p.name}
              </td>
              <td className="px-3 text-gray-900 dark:text-gray-100">${p.price}</td>
              <td className="px-3 text-gray-900 dark:text-gray-100">{p.qty}</td>
              <td className="px-3 text-gray-900 dark:text-gray-100">${p.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
