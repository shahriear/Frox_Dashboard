export default function OrderInfo() {
  return (
    <div className="p-5 border rounded-lg w-full">
      <h3 className="font-semibold mb-3">Order Info</h3>

      <p>Shipping: Next express</p>
      <p>Pay method: Paypal</p>
      <p>Status: Pending</p>

      <button className="mt-3 bg-gray-200 px-3 py-1 rounded">
        Download info
      </button>
    </div>
  );
}
