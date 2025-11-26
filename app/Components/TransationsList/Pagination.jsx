export default function Pagination() {
  return (
    <div className="flex items-center gap-3 mt-4">
      <button className="px-4 py-2 bg-purple-600 text-white rounded-lg">1</button>
      <button className="px-4 py-2 rounded-lg border">2</button>
      <button className="px-4 py-2 rounded-lg border">3</button>
      <button className="px-4 py-2 rounded-lg border">4</button>
      <button className="px-4 py-2 rounded-lg border">Next →</button>
    </div>
  );
}
