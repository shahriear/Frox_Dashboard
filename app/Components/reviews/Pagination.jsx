export default function Pagination() {
  return (
    <div className="flex justify-between items-center mt-4">
      <div className="flex gap-2">
        {[1, 2, 3, 4, 5].map(n => (
          <button
            key={n}
            className={`px-3 py-1 rounded ${
              n === 1 ? 'bg-indigo-600 text-white' : 'bg-gray-100'
            }`}
          >
            {n}
          </button>
        ))}
      </div>

      <button className="border px-4 py-2 rounded">Next →</button>
    </div>
  );
}
