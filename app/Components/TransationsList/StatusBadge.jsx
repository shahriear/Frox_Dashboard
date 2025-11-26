export default function StatusBadge({ status }) {
  const color = {
    Pending: "bg-orange-500",
    Completed: "bg-green-600",
    Cancelled: "bg-red-500",
  }[status];

  return (
    <div className="flex items-center gap-2">
      <span className={`w-2 h-2 rounded-full ${color}`}></span>
      <span className="text-sm">{status}</span>
    </div>
  );
}
