import { useState } from "react";
import Item from "./Item";

export default function PackingList({ items, setItems }) {
  const [selectedSort, setSelectedSort] = useState("SORT BY INPUT ORDER");

  const handleSelectedSort = (e) => {
    setSelectedSort(e.target.value);
  };

  const handleRemoveItem = (itemName) => {
    setItems((prevItems) =>
      prevItems.filter((item) => item.itemName !== itemName)
    );
  };

  const handleToggleCheck = (itemName) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.itemName === itemName
          ? { ...item, isChecked: !item.isChecked }
          : item
      )
    );
  };

  const sortedItems = [...items];

  if (selectedSort === "SORT BY DESCRIPTION") {
    sortedItems.sort((a, b) => a.itemName.localeCompare(b.itemName));
  } else if (selectedSort === "SORT BY PACKED STATUS") {
    sortedItems.sort((a, b) => a.isChecked - b.isChecked);
  }

  return (
    <div className="flex-grow bg-yellow-100 p-4 rounded-lg shadow-lg m-4">
      <ul className="flex flex-wrap justify-start items-start mb-4">
        {sortedItems.map((item, index) => (
          <li key={index} className="mr-4 mb-4">
            <Item
              item={item}
              onRemove={handleRemoveItem}
              onToggleCheck={handleToggleCheck}
            />
          </li>
        ))}
      </ul>

      <div className="flex justify-between items-center">
        <select
          value={selectedSort}
          onChange={handleSelectedSort}
          className="px-4 py-2 outline-none bg-orange-100 rounded-2xl"
        >
          {[
            "SORT BY INPUT ORDER",
            "SORT BY DESCRIPTION",
            "SORT BY PACKED STATUS",
          ].map((val, i) => (
            <option key={i + 1} value={val}>
              {val}
            </option>
          ))}
        </select>

        <button
          onClick={() => setItems([])}
          className="px-4 py-2 outline-none bg-red-500 hover:bg-red-600 rounded-2xl text-white"
        >
          CLEAR LIST
        </button>
      </div>
    </div>
  );
}
