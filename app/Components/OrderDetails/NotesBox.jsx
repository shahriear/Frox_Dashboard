export default function NotesBox() {
  return (
    <div className="p-5 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 transition-colors duration-300">
      <h3 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Notes</h3>
      <textarea
        placeholder="Type some note"
        className="w-full border border-gray-300 dark:border-slate-600 p-3 rounded min-h-[120px] bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 transition-colors duration-300"
      ></textarea>
    </div>
  );
}
