import { useState } from "react";
import styles from "./SetCounter.module.css";

function SetCounter({ updateCounter, max }) {
  const [inputValue, setInputValue] = useState("");

  const handleSet = () => {
    const value = Number(inputValue);

    if (isNaN(value) || value < 0) return;

    updateCounter(value);
    setInputValue("");
  };

  return (
    <div className={styles.setCounter}>
      <input
        type="number"
        value={inputValue}
        min="0"
        max={max}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleSet}>Set Counter</button>
    </div>
  );
}

export default SetCounter;
