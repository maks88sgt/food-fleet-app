import { MenuItem } from "./components/menu-item";

export function MenuItemsList() {
  return (
    <div className="border-2 border-purple-400 rounded-lg p-6 bg-white mb-4">
      <p className="text-center text-purple-600 font-semibold">MenuItemsList</p>
      <div className="grid grid-cols-2 gap-2 max-w-full">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </div>
  );
}