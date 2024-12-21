import { useState } from "react";

export default function TraveList() {
  return (
    <div>
      <Logo />
      <Form />
      <PackingList />
    </div>
  );
}

function Logo() {
  return (
    <div className="h-20 bg-orange-300 flex flex-row justify-center items-center">
      <p className="space-x-5 text-3xl uppercase font-mono">🌴 Far Away 💼</p>
    </div>
  );
}

function Form() {
  const [selectedNumber, setSelectedNumber] = useState(0);

  const handleChange = (e) => {
    setSelectedNumber(e.target.value);
  };
  return (
    <div className="h-16 bg-orange-500 flex  justify-evenly items-center">
      <p>What do you need for your😍 trip?</p>
      <select
        value={selectedNumber}
        onChange={handleChange}
        className="px-4 px py-1 outline-none bg-orange-200  rounded-2xl"
      >
        {[...Array(10).keys()].map((num) => (
          <option key={num + 1} value={num + 1}>
            {num + 1}
          </option>
        ))}
      </select>
      <input
        className="px-4 py-1 outline-none bg-orange-200  rounded-2xl"
        placeholder="Items"
      />
      <button className="px-4 py-1 bg-teal-400 hover:bg-teal-500 active:bg-teal-600 rounded-2xl">
        Add
      </button>
    </div>
  );
}

function PackingList() {
  return <div className="min-h-svh bg-yellow-900"></div>;
}
