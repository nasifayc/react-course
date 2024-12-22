import { useState } from "react";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function Form() {
  const [selectedNumber, setSelectedNumber] = useState(1);
  const [itemName, setItemName] = useState("");
  const [items, setItems] = useState([]);

  const handleAdd = () => {
    if (itemName.trim()) {
      const newItem = { quantity: selectedNumber, itemName, isChecked: false };
      setItems((prevItems) => [...prevItems, newItem]);
      setItemName("");
      setSelectedNumber(1);
    }
  };

  const handleChange = (e) => {
    setSelectedNumber(e.target.value);
  };

  const handleChangeName = (e) => {
    setItemName(e.target.value);
  };

  return (
    <div className="flex-grow bg-orange-200 p-4 rounded-lg shadow-lg m-4">
      <div className="flex justify-between items-center mb-4">
        <p className="text-lg font-semibold">
          What do you need for your😍 trip?
        </p>
      </div>
      <div className="flex space-x-4">
        <input
          className="px-4 py-2 outline-none bg-orange-100 rounded-2xl flex-grow"
          placeholder="Item Name"
          type="text"
          value={itemName}
          onChange={handleChangeName}
        />
        <select
          value={selectedNumber}
          onChange={handleChange}
          className="px-4 py-2 outline-none bg-orange-100 rounded-2xl"
        >
          {[...Array(10).keys()].map((num) => (
            <option key={num + 1} value={num + 1}>
              {num + 1}
            </option>
          ))}
        </select>

        <button
          onClick={handleAdd}
          className="px-6 py-2 bg-teal-500 hover:bg-teal-600 rounded-2xl text-white"
        >
          Add
        </button>
      </div>

      <PackingList items={items} setItems={setItems} />
      <Stats items={items} />
    </div>
  );
}
