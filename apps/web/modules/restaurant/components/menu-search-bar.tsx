export function MenuSearchBar() {
  return (
    <div className="border-2 border-green-400 rounded-lg p-4 bg-green-50 flex-1">
      <p className="text-green-700 font-semibold">MenuSearchBar</p>
      <input
        type="text"
        placeholder="Search menu..."
        className="w-full mt-2 px-3 py-2 border rounded text-sm"
      />
    </div>
  );
}
