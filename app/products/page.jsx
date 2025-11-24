export default function ProductPage() {
  return (
    <div className="p-6 my-container">
      <h1 className="text-xl font-semibold mb-4">All Products</h1>

      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search Products..."
          className="border p-2 rounded-md w-64"
        />

        <div className="flex gap-2">
          <button className="px-4 py-2 border rounded-lg">List</button>
          <button className="px-4 py-2 border rounded-lg">Grid</button>
        </div>
      </div>

      <div className="bg-white p-4 rounded-xl shadow">
        <h2 className="font-semibold mb-4">All Products</h2>

        <div className="h-96 overflow-y-auto">
          <p>Put your table here..…</p>
        </div>
      </div>
    </div>
  );
}
