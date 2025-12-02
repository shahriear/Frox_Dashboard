import Image from 'next/image';
import { MoreHorizontal } from 'lucide-react';

export default function RecentPurchases() {
  const data = [
    {
      id: 1,
      product: 'MacBook Pro',
      orderId: '#25431',
      date: 'Aug 5th, 2021',
      customer: 'Bessie Cooper',
      img: '/photos/Avatar.png',
      status: 'Delivered',
      amount: '$400.00',
    },
    {
      id: 2,
      product: 'iPhone 11 Pro',
      orderId: '#25432',
      date: 'Aug 5th, 2021',
      customer: 'Annette Black',
      img: '/photos/Avatar.png',
      status: 'Pending',
      amount: '$220.00',
    },
    {
      id: 3,
      product: 'Oppo A20',
      orderId: '#25433',
      date: 'Aug 5th, 2021',
      customer: 'Jerome Bell',
      img: '/photos/Avatar.png',
      status: 'Canceled',
      amount: '$150.00',
    },
    {
      id: 4,
      product: 'MacBook Air',
      orderId: '#25434',
      date: 'Aug 5th, 2021',
      customer: 'Brooklyn Simmons',
      img: '/photos/Avatar.png',
      status: 'Delivered',
      amount: '$350.00',
    },
  ];

  const getStatusColor = status => {
    if (status === 'Delivered') return 'bg-green-500';
    if (status === 'Pending') return 'bg-yellow-500';
    if (status === 'Canceled') return 'bg-red-500';
  };

  return (
    <div className="bg-[var(--card-bg)] shadow rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 transition-colors duration-300 w-full">
      <h2 className="font-semibold mb-3 sm:mb-4 text-base sm:text-lg dark:text-white">
        Recent Purchases
      </h2>

      {/* Desktop Table - Hidden on mobile */}
      <div className="hidden sm:block overflow-x-auto table-container">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm border-b border-gray-300 dark:border-gray-600">
              <th className="p-2 sm:p-3">
                <input type="checkbox" className="cursor-pointer" />
              </th>
              <th className="p-2 sm:p-3">Product</th>
              <th className="p-2 sm:p-3">Order ID</th>
              <th className="p-2 sm:p-3">Date</th>
              <th className="p-2 sm:p-3">Customer</th>
              <th className="p-2 sm:p-3">Status</th>
              <th className="p-2 sm:p-3">Amount</th>
              <th className="p-2 sm:p-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {data.map(item => (
              <tr
                key={item.id}
                className="border-b border-gray-300 dark:border-gray-700 text-xs sm:text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <td className="p-2 sm:p-3">
                  <input type="checkbox" className="cursor-pointer" />
                </td>
                <td className="p-2 sm:p-3 font-medium">{item.product}</td>
                <td className="p-2 sm:p-3">{item.orderId}</td>
                <td className="p-2 sm:p-3 text-gray-600 dark:text-gray-400">
                  {item.date}
                </td>
                <td className="p-2 sm:p-3">
                  <div className="flex items-center gap-2">
                    <Image
                      src={item.img}
                      alt={item.customer}
                      width={32}
                      height={32}
                      className="rounded-full w-8 h-8"
                    />
                    <span className="hidden md:inline">{item.customer}</span>
                  </div>
                </td>
                <td className="p-2 sm:p-3">
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${getStatusColor(
                        item.status
                      )} shadow-[0_0_6px] ${getStatusColor(item.status)}`}
                    ></span>
                    <span className="text-xs sm:text-sm">{item.status}</span>
                  </div>
                </td>
                <td className="p-2 sm:p-3 font-medium">{item.amount}</td>
                <td className="p-2 sm:p-3">
                  <button className="p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                    <MoreHorizontal
                      size={16}
                      className="text-gray-600 dark:text-gray-400"
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="sm:hidden space-y-3">
        {data.map(item => (
          <div
            key={item.id}
            className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg border border-gray-200 dark:border-gray-600"
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2 flex-1">
                <Image
                  src={item.img}
                  alt={item.customer}
                  width={32}
                  height={32}
                  className="rounded-full w-8 h-8"
                />
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-xs text-gray-900 dark:text-white">
                    {item.product}
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    {item.customer}
                  </p>
                </div>
              </div>
              <button className="p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors flex-shrink-0">
                <MoreHorizontal
                  size={16}
                  className="text-gray-600 dark:text-gray-400"
                />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs mb-2">
              <div>
                <p className="text-gray-600 dark:text-gray-400">Order ID</p>
                <p className="font-medium dark:text-white">{item.orderId}</p>
              </div>
              <div>
                <p className="text-gray-600 dark:text-gray-400">Amount</p>
                <p className="font-medium dark:text-white">{item.amount}</p>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs">
              <p className="text-gray-600 dark:text-gray-400">{item.date}</p>
              <div className="flex items-center gap-1">
                <span
                  className={`w-2 h-2 rounded-full ${getStatusColor(
                    item.status
                  )} shadow-[0_0_4px] ${getStatusColor(item.status)}`}
                ></span>
                <span className="font-medium dark:text-white">
                  {item.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
