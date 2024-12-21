import { useState } from "react";

export default function DateDisplayer() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(step);
  const [date, setDate] = useState(new Date());

  const formattedDate = new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);

  const handleDecreaseStep = () => {
    setStep(step - 1);
  };

  const handleIncreaseStep = () => {
    setStep(step + 1);
  };

  const handleDecreaseCount = () => {
    setCount((c) => c - step);
    setDate(new Date(date.getTime() - step * 24 * 60 * 60 * 1000));
  };

  const handleIncreaseCount = () => {
    setCount((c) => c + step);
    setDate(new Date(date.getTime() + step * 24 * 60 * 60 * 1000));
  };

  return (
    <div className="flex flex-col items-center gap-6 p-6 bg-gray-100 min-h-screen">
      <div className="flex items-center gap-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 active:bg-blue-700"
          onClick={handleDecreaseStep}
        >
          -
        </button>
        <span className="text-lg font-medium">Step: {step}</span>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 active:bg-blue-700"
          onClick={handleIncreaseStep}
        >
          +
        </button>
      </div>
      <div className="flex itewm-center gap-4">
        <button
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 active:bg-green-700"
          onClick={handleDecreaseCount}
        >
          -
        </button>
        <span className="text-lg font-medium">Count: {count}</span>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 active:bg-green-700"
          onClick={handleIncreaseCount}
        >
          +
        </button>
      </div>
      <p className="text-xl font-semibold text-gray-700 text-center">
        {count < 0 ? -count : count} days{" "}
        {count < 0 ? "ago was" : "from today is"}{" "}
        <span className="text-blue-700">{formattedDate}</span>
      </p>
    </div>
  );
}
