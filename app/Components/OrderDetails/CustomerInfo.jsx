export default function CustomerInfo() {
  return (
    <div className="p-5 border rounded-lg w-full">
      <h3 className="font-semibold mb-3">Customer</h3>

      <p><strong>Full name:</strong> Jane Cooper</p>
      <p><strong>E-mail:</strong> tim.jennings@example.com</p>
      <p><strong>Phone:</strong> +099 856 245</p>

      <button className="mt-3 bg-gray-200 px-3 py-1 rounded">
        View Profile
      </button>
    </div>
  );
}
