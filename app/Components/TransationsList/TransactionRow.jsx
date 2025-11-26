import StatusBadge from "./StatusBadge";
import DropdownMenu from "./DropdownMenu";

export default function TransactionRow({ item }) {
  return (
    <tr className="border-b">
      <td><input type="checkbox" /></td>
      <td className="py-3">{item.orderId}</td>
      <td>${item.paid}</td>
      <td className="flex items-center gap-2">
        <img src={item.img} className="w-8 h-5" />
        {item.method}
      </td>
      <td>{item.date}</td>
      <td><StatusBadge status={item.status} /></td>
      <td><DropdownMenu /></td>
    </tr>
  );
}
