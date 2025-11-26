import Link from "next/link";

export default function SummaryCard() {
  return (
    <div>
      <div className="w-full text-right mt-6">
      <p>Subtotal: $630.44</p>
      <p>Tax(20%): $782.01</p>
      <p>Discount: $293.01</p>

      <h2 className="font-bold text-xl mt-3">Total: 310,000</h2>

      <p className="text-green-500 mt-2">Status: Pending</p>
    </div>
    
      <Link href={'/OrdersList'}>
        <button className=" bg-emerald-700 font-medium text-white px-4 py-2 rounded-md">Back to Order List</button>
      </Link>
    </div>
  );
}
