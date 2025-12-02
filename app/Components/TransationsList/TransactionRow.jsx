import StatusBadge from './StatusBadge';
import DropdownMenu from './DropdownMenu';

export default function TransactionRow({ item }) {
  return (
    <tr className="border-b border-gray-300 dark:border-slate-600 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors duration-300">
      <td className="px-2 sm:px-3 md:px-4 py-2 sm:py-3">
        <input type="checkbox" className="w-4 h-4" />
      </td>
      <td className="px-2 sm:px-3 md:px-4 py-2 sm:py-3 font-medium text-gray-900 dark:text-white transition-colors duration-300 whitespace-nowrap">
        {item.orderId}
      </td>
      <td className="px-2 sm:px-3 md:px-4 py-2 sm:py-3 text-gray-900 dark:text-white transition-colors duration-300 whitespace-nowrap">
        ${item.paid}
      </td>
      <td className="px-2 sm:px-3 md:px-4 py-2 sm:py-3">
        <div className="flex items-center gap-2 min-w-0">
          <img
            src={item.img}
            alt={item.method}
            className="w-6 h-4 sm:w-8 sm:h-5 object-contain flex-shrink-0"
          />
          <span className="text-gray-900 dark:text-white truncate text-xs sm:text-sm transition-colors duration-300 whitespace-nowrap">
            {item.method}
          </span>
        </div>
      </td>
      <td className="px-2 sm:px-3 md:px-4 py-2 sm:py-3 text-gray-900 dark:text-white transition-colors duration-300 text-xs sm:text-sm whitespace-nowrap">
        {item.date}
      </td>
      <td className="px-2 sm:px-3 md:px-4 py-2 sm:py-3 text-xs sm:text-sm">
        <StatusBadge status={item.status} />
      </td>
      <td className="px-2 sm:px-3 md:px-4 py-2 sm:py-3 text-right relative z-10">
        <DropdownMenu />
      </td>
    </tr>
  );
}
