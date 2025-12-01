export default function NotesBox() {
  return (
    <div className="p-5 bg-[var(--card-bg)] border rounded-lg">
      <h3 className="font-semibold mb-3">Notes</h3>
      <textarea
        placeholder="Type some note"
        className="w-full border p-3 rounded min-h-[120px]"
      ></textarea>
    </div>
  );
}
