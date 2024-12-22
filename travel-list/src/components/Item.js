export default function Item({ item, onRemove, onToggleCheck }) {
  return (
    <div className="flex justify-between items-center bg-white p-4 rounded-xl shadow-lg w-full">
      <div className="flex items-center">
        <input
          type="checkbox"
          className={`w-6 h-6 mr-4 ${
            item.isChecked ? "bg-green-500" : "bg-white"
          }`}
          checked={item.isChecked}
          onChange={() => onToggleCheck(item.itemName)}
        />
        <label
          htmlFor={`${item.itemName}-checkbox`}
          className={`text-lg ${
            item.isChecked ? "line-through text-gray-500" : "text-black"
          }`}
        >
          {item.quantity} x {item.itemName}
        </label>
      </div>
      <button
        onClick={() => onRemove(item.itemName)}
        className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded-xl text-white"
      >
        ❌
      </button>
    </div>
  );
}
