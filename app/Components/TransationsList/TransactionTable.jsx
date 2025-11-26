import TransactionRow from "./TransactionRow";

export default function TransactionTable({ title, data }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm mb-10">

      <h2 className="text-lg font-semibold mb-4">{title}</h2>

      <table className="w-full text-left">
        <thead>
          <tr className="border-b">
            <th></th>
            <th>Order ID</th>
            <th>Paid</th>
            <th>Payment Method</th>
            <th>Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, i) => (
            <TransactionRow key={i} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
