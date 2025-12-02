import TransactionRow from "./TransactionRow";

export default function TransactionTable({ title, data }) {
  return (
    <div className="bg-[var(--card-bg)] dark:bg-slate-00 p-6 rounded-lg shadow-sm mb-10 transition-colors duration-300">
      <h2 className="text-lg font-semibold mb-4 transition-colors duration-300">
        {title}
      </h2>

      <table className="w-full text-left transition-colors duration-300">
        <thead>
          <tr className="border-b border-gray-400 transition-colors duration-300">
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
