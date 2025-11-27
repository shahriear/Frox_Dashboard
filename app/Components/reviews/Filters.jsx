export default function Filters() {
  return (
    <div className="flex flex-wrap gap-4 bg-white dark:bg-slate-700 shadow p-4 rounded-lg mb-6 transition-colors duration-300">
      <select className="border p-2 rounded w-40">
        <option>All Category</option>
      </select>

      <input
        type="date"
        className="border p-2 rounded"
        defaultValue="2021-02-10"
      />

      <select className="border p-2 rounded w-40">
        <option>Status</option>
      </select>

      <button className="ml-auto border px-4 py-2 rounded">Filters</button>
    </div>
  );
}
