import Link from "next/link";

export default function SummaryCard() {
  return (
    <div>
      <div className="w-full text-right mt-6 transition-colors duration-300">
      <p className="">Subtotal: $630.44</p>
      <p className="">Tax(20%): $782.01</p>
      <p className="">Discount: $293.01</p>

      <h2 className="font-bold text-xl mt-3  transition-colors duration-300">Total: 310,000</h2>

      <p className="text-green-500 font-medium dark:text-green-400 mt-2 transition-colors duration-300">Status: Pending</p>
    </div>
    
      <Link href={'/OrdersList'}>
        <button className="bg-emerald-700 dark:bg-emerald-800 font-medium text-white px-4 py-2 rounded-md transition-colors duration-300">Back to Order List</button>
      </Link>
    </div>
  );
}
