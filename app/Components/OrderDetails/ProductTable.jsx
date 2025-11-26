const products = [
  { img: "/photos/Avatar.png", name: "Bose noise cancelling", price: 948.55, qty: 2, total: 630.44 },
  { img: "/photos/Avatar.png", name: "Philips wireless headphone", price: 767.50, qty: 3, total: 767.50 },
  { img: "/photos/Avatar.png", name: "Cumitt smart watch", price: 396.84, qty: 1, total: 475.22 },
  { img: "/photos/Avatar.png", name: "Google Pixel Buds", price: 778.35, qty: 4, total: 293.01 },
];

export default function ProductTable() {
  return (
    <div className="mt-8">
      <h3 className="font-semibold mb-4 text-lg">Products</h3>

      <table className="w-full text-left">
        <thead>
          <tr className="border-b">
            <th></th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>

        <tbody>
          {products.map((p, i) => (
            <tr key={i} className="border-b">
              <td><input type="checkbox" /></td>
              <td className="py-3 flex items-center gap-3">
                <img src={p.img} className="w-10 h-10 rounded" />
                {p.name}
              </td>
              <td>${p.price}</td>
              <td>{p.qty}</td>
              <td>${p.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
