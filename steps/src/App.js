import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(0);
  const [isOpen, setOpen] = useState(true);

  const handlePreviousClick = () => {
    if (step > 0) {
      setStep((s) => s - 1);
    }
    console.log(step);
  };

  const handleNextClick = () => {
    if (step < messages.length - 1) {
      setStep((s) => s + 1);
    }
    console.log(step);
  };

  return (
    <>
      <button className="close" onClick={() => setOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 0 ? "active" : ""}>1</div>
            <div className={step >= 1 ? "active" : ""}> 2</div>
            <div className={step >= 2 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {step + 1}: {messages[step]}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePreviousClick}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNextClick}
            >
              Next
            </button>
          </div>
        </div>
      )}
      ;
    </>
  );
}
