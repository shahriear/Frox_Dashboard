export default function DeliverInfo() {
  return (
    <div className="p-5 border border-gray-200 dark:border-slate-600 bg-[var(--card-bg)] rounded-lg w-full transition-colors duration-300">
      <h3 className="font-semibold mb-3 ">
        Deliver to
      </h3>

      <p className="">
        Address: Santa Ana, Illinois 85486
      </p>
      <p className="">2972 Westheimer Rd.</p>
      <p className="">Block 9A</p>

      <button className="mt-3 bg-gray-200 dark:bg-slate-600 text-gray-800 dark:text-gray-100 px-3 py-1 rounded transition-colors duration-300">
        View Profile
      </button>
    </div>
  );
}
