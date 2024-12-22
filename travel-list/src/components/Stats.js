export default function Stats({ items }) {
  const packedItems = items.filter((item) => item.isChecked);
  const packedPercentage = items.length
    ? (packedItems.length / items.length) * 100
    : 0;

  return (
    <div className="flex justify-center items-center h-20 bg-teal-500 text-white">
      <p>
        💼 You have {items.length} items on your list, and you already packed{" "}
        {packedItems.length} ({Math.round(packedPercentage)}%)
      </p>
    </div>
  );
}
