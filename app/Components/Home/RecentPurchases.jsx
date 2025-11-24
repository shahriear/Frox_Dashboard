// export default function RecentPurchases() {
// return (
// <div className="bg-white shadow rounded-xl p-4">
// <h2 className="font-semibold mb-4">Recent Purchases</h2>
// <div className="overflow-x-auto">
// <table className="w-full text-left">
// <thead>
// <tr className="text-gray-500 text-sm">
// <th className="p-2">Product</th>
// <th className="p-2">Order ID</th>
// <th className="p-2">Date</th>
// <th className="p-2">Customer</th>
// <th className="p-2">Status</th>
// <th className="p-2">Amount</th>
// </tr>
// </thead>
// <tbody>
// {[1, 2, 3, 4].map((i) => (
// <tr key={i} className="border-t text-sm">
// <td className="p-2">Product {i}</td>
// <td className="p-2">#2543{i}</td>
// <td className="p-2">Aug 5th, 2021</td>
// <td className="p-2">Customer {i}</td>
// <td className="p-2">Delivered</td>
// <td className="p-2">$400</td>
// </tr>
// ))}
// </tbody>
// </table>
// </div>
// </div>
// );
// }

import Image from "next/image";
import { MoreHorizontal } from "lucide-react";

export default function RecentPurchases() {
  const data = [
    {
      id: 1,
      product: "MacBook Pro",
      orderId: "#25431",
      date: "Aug 5th, 2021",
      customer: "Bessie Cooper",
      img: "/images/48px.png",
      status: "Delivered",
      amount: "$400.00",
    },
    {
      id: 2,
      product: "iPhone 11 Pro",
      orderId: "#25432",
      date: "Aug 5th, 2021",
      customer: "Annette Black",
      img: "/images/48px.png",
      status: "Pending",
      amount: "$220.00",
    },
    {
      id: 3,
      product: "Oppo A20",
      orderId: "#25433",
      date: "Aug 5th, 2021",
      customer: "Jerome Bell",
      img: "/images/48px.png",
      status: "Canceled",
      amount: "$150.00",
    },
    {
      id: 4,
      product: "MacBook Air",
      orderId: "#25434",
      date: "Aug 5th, 2021",
      customer: "Brooklyn Simmons",
      img: "/images/48px.png",
      status: "Delivered",
      amount: "$350.00",
    },
  ];

  const getStatusColor = (status) => {
    if (status === "Delivered") return "bg-green-500";
    if (status === "Pending") return "bg-yellow-500";
    if (status === "Canceled") return "bg-red-500";
  };

  return (
    <div className="bg-white shadow rounded-xl p-6">
      <h2 className="font-semibold mb-4 text-lg">Recent Purchases</h2>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-gray-500 text-sm border-b border-gray-400">
              <th className="p-3"><input type="checkbox" /></th>
              <th className="p-3">Product</th>
              <th className="p-3">Order ID</th>
              <th className="p-3">Date</th>
              <th className="p-3">Customer</th>
              <th className="p-3">Status</th>
              <th className="p-3">Amount</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item) => (
              <tr key={item.id} className="border-b border-gray-300 text-sm hover:bg-gray-50">
                <td className="p-3">
                  <input type="checkbox" />
                </td>

                {/* Product */}
                <td className="p-3 font-medium">{item.product}</td>

                <td className="p-3">{item.orderId}</td>
                <td className="p-3">{item.date}</td>

                {/* Customer with image */}
                <td className="p-3">
                  <div className="flex items-center gap-2">
                    <Image
                      src={item.img}
                      alt={item.customer}
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                    <span>{item.customer}</span>
                  </div>
                </td>

                {/* STATUS WITH GLOW DOT */}
                <td className="p-3">
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-3 h-3 rounded-full ${getStatusColor(
                        item.status
                      )} shadow-[0_0_6px] ${getStatusColor(item.status)}`}
                    ></span>
                    <span>{item.status}</span>
                  </div>
                </td>

                <td className="p-3 font-medium">{item.amount}</td>

                {/* Actions */}
                <td className="p-3">
                  <button className="p-1 rounded hover:bg-gray-200">
                    <MoreHorizontal className="text-gray-600" />
                  </button>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
